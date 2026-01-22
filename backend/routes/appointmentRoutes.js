// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentController');

// POST /api/appointments
router.post('/appointments', createAppointment);

module.exports = router;