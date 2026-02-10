const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

// Contact form rate limiter
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many contact submissions. Please try again later.'
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact page
router.get('/', (req, res) => {
  res.render('contact', { 
    title: 'Contact',
    page: 'contact',
    success: req.query.success,
    error: req.query.error
  });
});

// Handle contact form submission
router.post('/', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.redirect('/contact?error=Please fill in all fields');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.redirect('/contact?error=Please enter a valid email address');
  }

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.redirect('/contact?success=Message sent successfully! I\'ll get back to you soon.');
  } catch (error) {
    console.error('Contact form error:', error);
    res.redirect('/contact?error=Failed to send message. Please try again or email directly.');
  }
});

module.exports = router;
