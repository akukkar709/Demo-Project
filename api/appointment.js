// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, phone, date, time } = req.body;

//     return res.status(200).json({
//       success: true,
//       message: "Appointment booked"
//     });
//   }

//   res.status(405).json({ error: "Method not allowed" });
// }


import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, members, date, time } = req.body;

  // SEND MESSAGE (await)
  await bot.sendMessage(
    process.env.TELEGRAM_CHAT_ID,
    `📅 New Appointment\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n👥 Members: ${members}\n📆 Date: ${date}\n⏰ Time: ${time}`
  );

  // ⚠️ RESPOND IMMEDIATELY
  return res.status(200).json({ success: true });
}
