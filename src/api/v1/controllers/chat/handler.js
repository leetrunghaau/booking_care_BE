const createError = require("http-errors");

class AI {
    static async chat(req, res, next) {
        try {
            const message = req.body?.message;
            const response = await fetch("http://localhost:11434/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "medllama2:latest",
                    messages: [{ role: "user", content: message }],
                    stream: true,
                    options: {
                        num_ctx: 30
                    },
                }),
            });

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
                const chunkOBJ = JSON.parse(chunk)
                res.write(chunkOBJ.message.content); // cắt bớt chỉ chừa message và done
            }
        } catch (error) {
            console.error(error);
            return next(createError.InternalServerError());
        }
    }
}

module.exports = AI;
