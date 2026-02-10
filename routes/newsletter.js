const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const fs = require('fs').promises;
const path = require('path');

// Newsletter signup rate limiter
const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: 'Too many signup attempts. Please try again later.'
});

// Subscribers file path
const subscribersFile = path.join(__dirname, '../data/subscribers.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(path.join(__dirname, '../data'), { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

// Get subscribers
async function getSubscribers() {
  try {
    const data = await fs.readFile(subscribersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save subscribers
async function saveSubscribers(subscribers) {
  await ensureDataDir();
  await fs.writeFile(subscribersFile, JSON.stringify(subscribers, null, 2));
}

// Newsletter signup endpoint
router.post('/subscribe', newsletterLimiter, async (req, res) => {
  const { email } = req.body;

  // Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    });
  }

  try {
    const subscribers = await getSubscribers();
    
    // Check if already subscribed
    if (subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already subscribed' 
      });
    }

    // Add new subscriber
    subscribers.push({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      ip: req.ip,
    });

    await saveSubscribers(subscribers);

    res.json({ 
      success: true, 
      message: 'Successfully subscribed! Check your email for a welcome message.' 
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
});

module.exports = router;
