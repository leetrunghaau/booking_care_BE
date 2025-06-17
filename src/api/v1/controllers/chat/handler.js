const createError = require("http-errors");
const aiConfig = require("../../../config/ai-config");

class AI {
    static async chat(req, res, next) {
        try {
            let message = req.body?.message;

            // Step 1: Gọi đến RAG API để lấy tài liệu liên quan
            const ragResponse = await fetch(`${aiConfig.search_URL}/search`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: message }),
            });

            const ragData = await ragResponse.json();
            let contextText = "";

            if (ragData.found && Array.isArray(ragData.results)) {
                // Nối các tài liệu tìm được thành 1 context
                contextText = ragData.results.map(r => r.text).join("\n---\n");
                console.log("📚 RAG tìm thấy context:", contextText.slice(0, 200), "...");
            } else {
                console.log("⚠️ Không tìm thấy tài liệu từ RAG. Gửi message thuần.");
            }

            // Step 2: Gửi tới Ollama kèm context (nếu có)
            const ollamaRequestBody = {
                model: "medplus",
                stream: true,
                messages: [],
                
            };

            if (contextText) {
                // Chèn context trực tiếp vào câu hỏi người dùng
                message = `Dưới đây là tài liệu tham khảo:\n${contextText}\n\nVui lòng trả lời thật ngắn gọn, tối đa 3 câu. Câu hỏi của tôi:  ${message}`;
            }

            ollamaRequestBody.messages.push({
                role: "user",
                content: message
            });

            const response = await fetch(`${aiConfig.medly_URL}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(ollamaRequestBody),
            });

            // Step 3: Stream response từ Ollama về frontend
            res.setHeader("Content-Type", "text/event-stream");
            res.setHeader("Cache-Control", "no-cache");
            res.setHeader("Connection", "keep-alive");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    console.log("✅ Kết thúc đọc stream từ AI.");
                    res.end();
                    break;
                }
                const chunk = decoder.decode(value, { stream: true });

                try {
                    const chunkOBJ = JSON.parse(chunk);
                    res.write(chunkOBJ.message?.content || "");
                } catch (e) {
                    console.error("❌ Lỗi parse chunk:", chunk);
                }
            }
        } catch (error) {
            console.error("❌ Lỗi tổng thể:", error);
            return next(createError.InternalServerError());
        }
    }
}

module.exports = AI;
