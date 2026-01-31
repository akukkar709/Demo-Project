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


// import TelegramBot from "node-telegram-bot-api";

// const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, phone, members, date, time } = req.body;

//   // SEND MESSAGE (await)
//   await bot.sendMessage(
//     process.env.TELEGRAM_CHAT_ID,
//     `📅 New Appointment\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n👥 Members: ${members}\n📆 Date: ${date}\n⏰ Time: ${time}`
//   );

//   // ⚠️ RESPOND IMMEDIATELY
//   return res.status(200).json({ success: true });
// }

// api/appointment.js
// import TelegramBot from "node-telegram-bot-api";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, phone, gender, city, location, service, date, time, message } = req.body;

//   // Format the message
//   const telegramMessage = `
// 🎉 *New Appointment Request* 🎉

// *Name:* ${name}
// *Email:* ${req.body.email || 'Not provided'}
// *Phone:* ${phone}
// *Gender:* ${gender}
// *City:* ${city}
// *Location:* ${location}
// *Service:* ${service}
// *Date:* ${date}
// *Time:* ${time}
// *Message:*
// ${message || 'No additional message provided'}
//   `;

//   try {
//     // Directly call Telegram API
//     const response = await fetch(
//       `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: process.env.TELEGRAM_CHAT_ID,
//           text: telegramMessage,
//           parse_mode: 'Markdown'
//         })
//       }
//     );

//     const data = await response.json();
    
//     if (data.ok) {
//       return res.status(200).json({ success: true, message: 'Appointment sent successfully!' });
//     } else {
//       throw new Error(data.description || 'Failed to send message to Telegram');
//     }
//   } catch (error) {
//     console.error('Error sending to Telegram:', error);
//     return res.status(500).json({ 
//       success: false, 
//       error: 'Failed to send appointment',
//       details: error.message
//     });
//   }
// }


// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ success: false });
//   }

//   const {
//     name,
//     phone,
//     service,
//     date,
//     time
//   } = req.body;

//   const text = `
// 📅 New Appointment
// Name: ${name}
// Phone: ${phone}
// Service: ${service}
// Date: ${date}
// Time: ${time}
// `;

//   const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
//   const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

//   const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

//   await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       chat_id: CHAT_ID,
//       text
//     })
//   });

//   return res.status(200).json({ success: true });
// }



// /api/appointment.js
// Vercel Serverless Function

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const {
      name,
      email,
      phone,
      gender,
      city,
      location,
      service,
      date,
      time,
      message
    } = req.body;

    // Basic validation
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Telegram message format
    const telegramMessage = `
📅 *New Appointment Booking*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || "Not provided"}

👩‍🦰 *Gender:* ${gender}
🏙️ *City:* ${city}
📍 *Location:* ${location}

💇 *Service:* ${service}
🗓️ *Date:* ${date}
⏰ *Time:* ${time}

📝 *Message:*
${message || "No additional notes"}
`;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return res.status(500).json({
        success: false,
        message: "Telegram credentials not configured"
      });
    }

    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown"
      })
    });

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      return res.status(500).json({
        success: false,
        message: "Telegram API error",
        telegram: telegramData
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment sent successfully"
    });

  } catch (error) {
    console.error("Appointment error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}
