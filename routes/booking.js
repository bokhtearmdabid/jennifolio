const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

// Booking form rate limiter
const bookingLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: 'Too many booking requests. Please try again later.'
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Booking page
router.get('/', (req, res) => {
  res.render('booking', { 
    title: 'Booking & Collaboration',
    page: 'booking',
    success: req.query.success,
    error: req.query.error
  });
});

// Handle booking form submission
router.post('/', bookingLimiter, async (req, res) => {
  const { 
    name, 
    email, 
    bookingType, 
    budget, 
    timeline, 
    details 
  } = req.body;

  // Validation
  if (!name || !email || !bookingType || !details) {
    return res.redirect('/booking?error=Please fill in all required fields');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.redirect('/booking?error=Please enter a valid email address');
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Booking Request: ${bookingType}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${bookingType}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <h3>Details:</h3>
        <p>${details.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.redirect('/booking?success=Booking request sent! I\'ll review and respond within 24-48 hours.');
  } catch (error) {
    console.error('Booking form error:', error);
    res.redirect('/booking?error=Failed to send request. Please email directly at ' + process.env.BUSINESS_EMAIL);
  }
});

module.exports = router;
