// backend/services/telegramService.js
const axios = require('axios');
require('dotenv').config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

exports.sendTelegramMessage = async (message) => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    throw new Error('Failed to send Telegram notification');
  }
};