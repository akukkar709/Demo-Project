// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Telegram Bot Token from BotFather
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Endpoint to handle form submissions
app.post('/api/appointment', async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message, gender, city, location } = req.body;

    // Format the message for Telegram
    const telegramMessage = `
🎉 *New Appointment Request* 🎉

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Gender:* ${gender}
*City:* ${city}
*Location:* ${location}
*Service:* ${service}
*Date:* ${date}
*Time:* ${time}
*Message:*
${message || 'No additional message provided'}
    `;

    // Send message to Telegram
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      }
    );

    res.status(200).json({ success: true, message: 'Appointment request sent successfully!' });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).json({ success: false, message: 'Failed to send appointment request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});