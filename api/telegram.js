import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const update = req.body;

    await bot.processUpdate(update);

    bot.on("message", (msg) => {
      bot.sendMessage(msg.chat.id, "✅ Bot working on Vercel!");
    });

    res.status(200).json({ ok: true });
  } else {
    res.status(200).send("Telegram bot webhook running");
  }
}
