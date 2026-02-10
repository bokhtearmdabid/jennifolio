# Creator Portfolio Website - Complete A-Z Guide

A professional, modern portfolio website built with Node.js, Express, and Tailwind CSS for content creators.

## 📋 Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation Guide](#installation-guide)
4. [Configuration](#configuration)
5. [Customization Guide](#customization-guide)
6. [Deployment](#deployment)
7. [File Structure](#file-structure)
8. [Troubleshooting](#troubleshooting)

---

## ✨ Features

### ✅ All 10 Required Sections

1. **Homepage** - Hero section with brand intro and CTAs
2. **About Me** - Bio, story, milestones, personality
3. **Portfolio/Gallery** - Categorized, watermarked image previews
4. **Platforms** - All subscription and social links organized
5. **Booking** - Professional collaboration request system
6. **Testimonials** - Social proof from fans and collaborators
7. **FAQ** - Common questions answered
8. **Legal Pages** - Terms, Privacy, DMCA
9. **Email List** - Newsletter signup with backend storage
10. **Branding** - Consistent design, premium feel, mobile-first

### 🎨 Design Features

- ✅ Modern, premium aesthetic
- ✅ Fully responsive (mobile-first)
- ✅ Dark theme with pink/purple accents
- ✅ Smooth animations and transitions
- ✅ Professional typography
- ✅ Age verification modal
- ✅ Fast loading times

### 🔧 Technical Features

- ✅ Node.js/Express backend
- ✅ EJS templating
- ✅ Tailwind CSS styling
- ✅ Email contact forms
- ✅ Newsletter subscription system
- ✅ Rate limiting for security
- ✅ Helmet.js security headers
- ✅ Compression for performance

---

## 📦 Prerequisites

Before starting, ensure you have:

```bash
Node.js (v16 or higher)
npm (comes with Node.js)
A code editor (VS Code recommended)
Git (optional, for version control)
```

**Check if installed:**
```bash
node --version
npm --version
```

---

## 🚀 Installation Guide

### Step 1: Download the Project

You have the complete project structure. Navigate to it:

```bash
cd creator-portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages:
- express (web server)
- ejs (templates)
- tailwindcss (styling)
- nodemailer (emails)
- helmet (security)
- compression (performance)
- and more...

### Step 3: Build Tailwind CSS

Open TWO terminal windows in the project folder.

**Terminal 1 - Build CSS (keep this running):**
```bash
npm run build:css
```

**Terminal 2 - Start Server:**
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

### Step 4: Open in Browser

Visit: `http://localhost:3000`

You should see your website! 🎉

---

## ⚙️ Configuration

### Environment Variables

1. **Copy the example file:**
```bash
cp .env.example .env
```

2. **Edit `.env` file** with your information:

```env
# Server
PORT=3000
NODE_ENV=development

# Email (for contact forms - using Gmail as example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_FROM=noreply@yourwebsite.com
EMAIL_TO=your-gmail@gmail.com

# Site Info
SITE_NAME=Your Stage Name
SITE_URL=https://yourwebsite.com
SITE_TAGLINE=Luxury lifestyle & exclusive content creator

# Social Media & Platforms
ONLYFANS_URL=https://onlyfans.com/yourusername
FANSLY_URL=https://fansly.com/yourusername
INSTAGRAM_URL=https://instagram.com/yourusername
TWITTER_URL=https://twitter.com/yourusername
TIKTOK_URL=https://tiktok.com/@yourusername
WISHLIST_URL=https://throne.com/yourusername
CLIPS_URL=https://manyvids.com/yourusername

# Business
BUSINESS_EMAIL=business@yourwebsite.com
```

### Setting Up Email (Gmail Example)

1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an "App Password" for email
4. Use that password in EMAIL_PASS

**Alternative email services:**
- SendGrid
- Mailgun
- Amazon SES
- Any SMTP provider

---

## 🎨 Customization Guide

### 1. Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#ec4899',  // Main brand color
    600: '#db2777',  // Darker shade
    700: '#be185d',  // Even darker
    // etc.
  }
}
```

### 2. Change Fonts

Edit `public/css/input.css`:

```css
/* Import different Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

/* Update font families in tailwind.config.js */
fontFamily: {
  'display': ['YourFont', 'serif'],
}
```

### 3. Add Your Images

Create these folders and add images:

```
public/images/
├── hero.jpg              (Main hero image - 1080x1440px recommended)
├── about.jpg             (About section - 1000x1000px recommended)
├── about-portrait.jpg    (Portrait for about page - 800x1200px)
├── favicon.ico           (Browser icon - 32x32px)
└── portfolio/
    ├── image1.jpg
    ├── image2.jpg
    └── ... (your portfolio images)
```

**Image Tips:**
- Use high quality JPGs
- Keep file sizes under 500KB (use TinyPNG to compress)
- Add watermarks to portfolio images
- Recommended dimensions: 1080px width minimum

### 4. Update Content

Edit the EJS files in `views/`:

**Homepage (`views/index.ejs`):**
- Update stats (subscribers, years active, content pieces)
- Modify hero text
- Update about preview

**About Page (`views/about.ejs`):**
- Write your bio
- Update quick facts
- Add your milestones
- Personalize the story

**Other Pages:**
- Customize all content to match your brand
- Add testimonials to testimonials page
- Add FAQs to FAQ page

### 5. Customize Portfolio Categories

Edit `views/portfolio.ejs`:

```html
<!-- Change categories to match your content -->
<button data-category="lifestyle">Lifestyle</button>
<button data-category="exclusive">Exclusive</button>
<button data-category="fitness">Fitness</button>
<button data-category="travel">Travel</button>
```

Then add matching data attributes to your portfolio items:

```html
<div class="portfolio-item" data-category="fitness">
  <!-- Item content -->
</div>
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Add environment variables** in Vercel dashboard

### Option 2: Heroku

1. **Create `Procfile`:**
```
web: node server.js
```

2. **Deploy:**
```bash
heroku create your-app-name
git push heroku main
```

3. **Set environment variables:**
```bash
heroku config:set SITE_NAME="Your Name"
```

### Option 3: DigitalOcean / VPS

1. **Set up server** (Ubuntu 22.04)
2. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2:**
```bash
sudo npm install -g pm2
```

4. **Clone your repo and start:**
```bash
cd your-project
npm install
npm run build:css
pm2 start server.js --name "portfolio"
pm2 startup
pm2 save
```

5. **Set up Nginx as reverse proxy**

### Domain Setup

1. **Purchase domain** (Namecheap, Google Domains, etc.)
2. **Point DNS** to your hosting IP/service
3. **Set up SSL** (Let's Encrypt for free HTTPS)

---

## 📁 File Structure

```
creator-portfolio/
├── config/                  # Configuration files
├── data/                    # Data storage (subscribers, etc.)
├── public/                  # Static files
│   ├── css/
│   │   ├── input.css       # Tailwind source
│   │   └── output.css      # Generated CSS
│   ├── images/             # Your images
│   └── js/
│       ├── main.js         # Main JavaScript
│       └── portfolio.js    # Portfolio filtering
├── routes/                 # Express routes
│   ├── index.js           # Main pages
│   ├── contact.js         # Contact form
│   ├── booking.js         # Booking form
│   └── newsletter.js      # Newsletter signup
├── views/                  # EJS templates
│   ├── partials/
│   │   ├── nav.ejs        # Navigation
│   │   └── footer.ejs     # Footer
│   ├── legal/             # Legal pages
│   ├── index.ejs          # Homepage
│   ├── about.ejs          # About page
│   ├── portfolio.ejs      # Portfolio
│   ├── platforms.ejs      # Platforms
│   ├── booking.ejs        # Booking
│   ├── contact.ejs        # Contact
│   ├── faq.ejs            # FAQ
│   └── testimonials.ejs   # Testimonials
├── .env                    # Environment variables
├── .env.example           # Environment template
├── package.json           # Dependencies
├── server.js              # Main server file
└── tailwind.config.js     # Tailwind configuration
```

---

## 🔧 Troubleshooting

### Issue: Tailwind CSS not working

**Solution:**
```bash
# Make sure build process is running
npm run build:css

# Check that output.css exists
ls public/css/output.css
```

### Issue: Images not showing

**Solution:**
- Check image paths are correct
- Ensure images are in `public/images/`
- Check file names match exactly (case-sensitive)
- Verify images are valid JPG/PNG files

### Issue: Contact form not sending emails

**Solutions:**
1. Check `.env` file has correct email settings
2. For Gmail: Enable "Less secure app access" or use App Password
3. Check server logs for error messages
4. Verify EMAIL_TO address is correct

### Issue: Port already in use

**Solution:**
```bash
# Change port in .env
PORT=3001

# Or kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: npm install fails

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Update npm
npm install -g npm@latest
```

---

## 📝 Development Workflow

### Daily Development:

1. **Start both processes:**
```bash
# Terminal 1
npm run build:css

# Terminal 2  
npm run dev
```

2. **Make changes** to files
3. **Refresh browser** to see changes
4. **Save frequently**

### Before Going Live:

1. ✅ Update ALL content in .env
2. ✅ Add ALL your images
3. ✅ Test all forms (contact, booking, newsletter)
4. ✅ Test on mobile devices
5. ✅ Check all links work
6. ✅ Add legal pages content
7. ✅ Set up email properly
8. ✅ Configure domain
9. ✅ Set up SSL certificate
10. ✅ Test age verification

---

## 🛡️ Security Best Practices

1. **Never commit `.env` file** to git
2. **Use strong passwords** for email
3. **Keep dependencies updated:**
```bash
npm audit
npm audit fix
```
4. **Enable HTTPS** in production
5. **Use environment variables** for all secrets
6. **Review rate limits** in server.js

---

## 📧 Support & Customization

Need help or want custom features?
- Check documentation carefully
- Review error messages in console/terminal
- Test in different browsers
- Search for specific errors online

---

## 🎯 Next Steps

After basic setup:

1. **Content Creation:**
   - Write compelling bio
   - Take professional photos
   - Create FAQs based on common questions
   - Gather testimonials

2. **SEO & Marketing:**
   - Add meta descriptions
   - Create sitemap
   - Set up Google Analytics
   - Promote on social media

3. **Advanced Features:**
   - Add blog section
   - Integrate payment processing
   - Add members area
   - Create content calendar

4. **Maintenance:**
   - Regular backups
   - Monitor uptime
   - Update content weekly
   - Respond to inquiries promptly

---

## 📄 License

This project is provided as-is for personal use. Customize and deploy as needed for your creator business.

---

## 🚀 Quick Start Summary

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Edit .env with your info
nano .env  # or use any text editor

# 4. Build CSS (Terminal 1)
npm run build:css

# 5. Start server (Terminal 2)
npm start

# 6. Open browser
# http://localhost:3000

# 7. Customize content and images
# 8. Deploy to hosting
```

---

**Remember:** This is YOUR website. Customize everything to match your brand and personality!
