// backend/controllers/appointmentController.js
const { sendTelegramMessage } = require('../services/telegramService');

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message, gender, city, location } = req.body;

    // Format message for Telegram
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

    // Send to Telegram
    await sendTelegramMessage(telegramMessage);

    res.status(200).json({ 
      success: true, 
      message: 'Appointment request sent successfully!' 
    });
  } catch (error) {
    console.error('Error in createAppointment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process appointment request',
      error: error.message 
    });
  }
};