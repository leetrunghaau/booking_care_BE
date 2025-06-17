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
                contextText = ragData.results.map(r => r.text).join("\n---\n");
                console.log("📚 RAG tìm thấy context:", contextText.slice(0, 200), "...");
            } else {
                console.log("⛅ Không tìm thấy tài liệu từ RAG. Trả về phản hồi đơn giản.");

                res.setHeader("Content-Type", "text/event-stream");
                res.setHeader("Cache-Control", "no-cache");
                res.setHeader("Connection", "keep-alive");

                // Phản hồi được chia nhỏ để mô phỏng AI đang gõ
                const friendlyChunks = [
                    "🩺 Xin chào bạn,\n",
                    "Hiện tại MedPlus chưa tìm thấy thông tin phù hợp để hỗ trợ câu hỏi của bạn.\n\n",
                    "📍 Bạn có thể thử lại với câu hỏi cụ thể hơn, ví dụ:\n",
                    "– Tôi đang bị ho nhiều ngày, nên đi khám ở chuyên khoa nào?\n",
                    "– MedPlus có bác sĩ nội tổng quát nào khám vào chiều mai không?\n\n",
                    "☎️ Nếu cần hỗ trợ nhanh hơn, bạn hãy gọi tổng đài MedPlus qua số: 0367 016 872.\n\n",
                    "💙 Cảm ơn bạn đã tin tưởng MedPlus, chúc bạn một ngày tốt lành!"
                ];

                // Gửi từng dòng như đang "gõ"
                (async () => {
                    for (const chunk of friendlyChunks) {
                        res.write(`data: ${chunk}\n\n`);
                        await new Promise(resolve => setTimeout(resolve, 500)); // Delay giữa các dòng
                    }
                    res.end();
                })();
                return;
            }

            // Step 2: Gửi tới Ollama kèm context
            const ollamaRequestBody = {
                model: "medplus",
                stream: true,
                messages: [],
            };

            message = `Dưới đây là tài liệu tham khảo:\n${contextText}\n\nVui lòng trả lời thật ngắn gọn, tối đa 3 câu. Câu hỏi của tôi: ${message}`;

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
                    res.write(`data: ${chunkOBJ.message?.content || ""}\n\n`);
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
