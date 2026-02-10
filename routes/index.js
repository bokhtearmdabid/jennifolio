const express = require('express');
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    page: 'home' 
  });
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    page: 'about' 
  });
});

// Portfolio/Gallery
router.get('/portfolio', (req, res) => {
  res.render('portfolio', { 
    title: 'Portfolio',
    page: 'portfolio' 
  });
});

// Platforms Page
router.get('/platforms', (req, res) => {
  res.render('platforms', { 
    title: 'My Platforms',
    page: 'platforms' 
  });
});

// FAQ Page
router.get('/faq', (req, res) => {
  res.render('faq', { 
    title: 'FAQ',
    page: 'faq' 
  });
});

// Testimonials Page
router.get('/testimonials', (req, res) => {
  res.render('testimonials', { 
    title: 'Testimonials',
    page: 'testimonials' 
  });
});

// Legal Pages
router.get('/terms', (req, res) => {
  res.render('legal/terms', { 
    title: 'Terms of Service',
    page: 'legal' 
  });
});

router.get('/privacy', (req, res) => {
  res.render('legal/privacy', { 
    title: 'Privacy Policy',
    page: 'legal' 
  });
});

router.get('/dmca', (req, res) => {
  res.render('legal/dmca', { 
    title: 'DMCA Notice',
    page: 'legal' 
  });
});

module.exports = router;
