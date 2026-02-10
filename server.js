require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Performance Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Contact form specific rate limit
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: 'Too many contact form submissions, please try again later.'
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Make environment variables available to views
app.locals.site = {
  name: process.env.SITE_NAME || 'Creator Portfolio',
  url: process.env.SITE_URL || 'http://localhost:3000',
  tagline: process.env.SITE_TAGLINE || 'Luxury lifestyle & exclusive content creator',
  businessEmail: process.env.BUSINESS_EMAIL || 'business@example.com',
};

app.locals.social = {
  onlyfans: process.env.ONLYFANS_URL,
  fansly: process.env.FANSLY_URL,
  instagram: process.env.INSTAGRAM_URL,
  twitter: process.env.TWITTER_URL,
  tiktok: process.env.TIKTOK_URL,
  wishlist: process.env.WISHLIST_URL,
  clips: process.env.CLIPS_URL,
};

// Routes
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');
const bookingRouter = require('./routes/booking');
const newsletterRouter = require('./routes/newsletter');

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/booking', bookingRouter);
app.use('/newsletter', newsletterRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', { 
    title: '404 - Page Not Found',
    path: req.path 
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
