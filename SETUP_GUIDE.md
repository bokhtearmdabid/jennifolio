# 🚀 QUICK START GUIDE - Creator Portfolio Website

## ⚡ Fast Setup (5 Minutes)

### Step 1: Install Node.js (if needed)
Download from: https://nodejs.org/
Version: 16 or higher

**Verify installation:**
```bash
node --version
npm --version
```

### Step 2: Navigate to Project
```bash
cd creator-portfolio
```

### Step 3: Install Dependencies
```bash
npm install
```
This installs all required packages. Wait for it to complete (1-2 minutes).

### Step 4: Configure Your Site
```bash
# Copy the environment template
cp .env.example .env

# Open .env in a text editor and fill in:
# - Your stage name
# - Your social media links
# - Email settings (optional for now)
```

**Minimum required changes in .env:**
```env
SITE_NAME=Your Name Here
SITE_TAGLINE=Your tagline here
ONLYFANS_URL=https://onlyfans.com/yourusername
```

### Step 5: Build CSS
**Open Terminal Window 1:**
```bash
npm run build:css
```
Keep this running! It watches for changes.

### Step 6: Start Server
**Open Terminal Window 2:**
```bash
npm start
```

### Step 7: View Your Site
Open browser: **http://localhost:3000**

🎉 **You should see your website!**

---

## 📝 Next Steps (Customize Your Site)

### 1. Add Your Images

Create images and place them in `public/images/`:

```
public/images/
├── hero.jpg           (Your main image - 1080x1440px)
├── about.jpg          (About section - 1000x1000px)
├── about-portrait.jpg (About page portrait)
├── favicon.ico        (Website icon)
└── portfolio/
    ├── image1.jpg
    ├── image2.jpg
    └── ...
```

**Image Guidelines:**
- Format: JPG or PNG
- Size: Keep under 500KB (use tinypng.com to compress)
- Dimensions: At least 1080px width
- Add watermarks to portfolio images

### 2. Update Content

Edit these files with your information:

**Homepage** (`views/index.ejs`):
- Line 40-50: Update stats (subscribers, years, content)
- Line 55-60: Customize hero text

**About Page** (`views/about.ejs`):
- Line 35-50: Write your bio
- Line 80-95: Update quick facts
- Line 130-160: Add your milestones

**All Pages:**
Replace placeholder text with your actual content

### 3. Update Social Links

Edit `.env` file:
```env
ONLYFANS_URL=https://onlyfans.com/your-username
FANSLY_URL=https://fansly.com/your-username  
INSTAGRAM_URL=https://instagram.com/your-username
TWITTER_URL=https://twitter.com/your-username
TIKTOK_URL=https://tiktok.com/@your-username
WISHLIST_URL=https://throne.com/your-username
```

### 4. Set Up Email (Optional)

For contact/booking forms to work:

**Using Gmail:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate "App Password" for Mail
4. Update `.env`:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=your-gmail@gmail.com
```

**Using Other Services:**
- SendGrid: https://sendgrid.com
- Mailgun: https://mailgun.com
- Update EMAIL_HOST and EMAIL_PORT accordingly

---

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:
```javascript
primary: {
  500: '#YOUR-COLOR', // Main brand color
  600: '#DARKER-SHADE',
}
```

Use a color picker: https://htmlcolorcodes.com/

### Change Fonts

1. Find fonts on Google Fonts: https://fonts.google.com
2. Edit `public/css/input.css` - change the @import URL
3. Update `tailwind.config.js` fontFamily section

### Modify Layout

All pages are in `views/` folder:
- `index.ejs` - Homepage
- `about.ejs` - About page
- `portfolio.ejs` - Portfolio
- `platforms.ejs` - Platforms
- `booking.ejs` - Booking
- `contact.ejs` - Contact

Edit the HTML directly!

---

## 🌐 Going Live (Deploy Your Website)

### Option A: Vercel (Easiest - Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts (takes 2 minutes)
4. Get your live URL!

### Option B: Netlify (Also Easy - Free)

1. Create account: https://netlify.com
2. Drag your project folder to Netlify dashboard
3. Done!

### Option C: Heroku

1. Install Heroku CLI
2. Create `Procfile`:
```
web: node server.js
```

3. Deploy:
```bash
heroku create
git push heroku main
```

### Set Environment Variables

After deploying, add your .env variables in the hosting platform's dashboard:
- Vercel: Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- Heroku: Settings → Config Vars

---

## 🔧 Development Workflow

### Daily Work:

**Terminal 1 (CSS):**
```bash
npm run build:css
```

**Terminal 2 (Server):**
```bash
npm run dev  # Auto-restarts on file changes
```

**Edit Files:**
- Views: `views/*.ejs`
- Styles: `public/css/input.css`
- Scripts: `public/js/*.js`
- Routes: `routes/*.js`

**Refresh Browser** to see changes

### Before Deploying:

✅ Test all links
✅ Test all forms
✅ Check mobile responsiveness
✅ Verify all images load
✅ Update legal pages
✅ Test age verification
✅ Review content for errors

---

## 🐛 Common Issues & Fixes

### "Port 3000 in use"
```bash
# Change port in .env
PORT=3001

# Or kill the process
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID <number> /F
```

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "CSS not loading"
```bash
# Ensure build:css is running
npm run build:css

# Check file exists
ls public/css/output.css
```

### Images not showing
- Check file path is correct
- Verify image is in `public/images/`
- Check file extension matches (jpg vs jpeg)
- Clear browser cache

### Forms not sending email
- Check `.env` email settings
- Use App Password for Gmail
- Check server console for errors
- Test with a simple email first

---

## 📱 Mobile Testing

Test your site on:
1. Chrome DevTools (F12 → Device Toolbar)
2. Your actual phone
3. Browserstack (free trial)

Check:
- Navigation menu works
- Forms are usable
- Images load properly
- Text is readable
- Buttons are tap-friendly

---

## 🔒 Security Checklist

✅ Never commit `.env` to git
✅ Use strong passwords
✅ Enable HTTPS in production
✅ Keep dependencies updated: `npm audit`
✅ Set secure rate limits
✅ Validate all form inputs
✅ Use environment variables for secrets

---

## 📚 File Structure Reference

```
creator-portfolio/
├── public/              # Static files
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript
│   └── images/         # Images
├── views/              # HTML templates
│   ├── partials/       # Reusable parts
│   └── legal/          # Legal pages
├── routes/             # URL handlers
├── .env                # Your config (SECRET!)
├── server.js           # Main server
└── package.json        # Dependencies
```

---

## 🎯 Launch Checklist

Before going live:

**Content:**
- [ ] All placeholder text replaced
- [ ] Your images added
- [ ] Social links updated
- [ ] About page written
- [ ] FAQs added
- [ ] Testimonials added
- [ ] Legal pages reviewed

**Technical:**
- [ ] Email working
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] All links working
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Age verification tested

**Marketing:**
- [ ] Share on social media
- [ ] Add link to bios
- [ ] Tell subscribers
- [ ] Update other platforms

---

## 💡 Pro Tips

1. **Update regularly** - Add new content weekly
2. **Engage** - Respond to form submissions quickly
3. **Test** - Check your site on different devices
4. **Backup** - Keep backups of your content
5. **Monitor** - Check if forms are working
6. **Optimize** - Compress images before uploading
7. **Promote** - Share your new site everywhere!

---

## 🆘 Need Help?

1. Check README.md for detailed info
2. Review error messages carefully
3. Google specific errors
4. Check Node.js and npm versions
5. Try clearing cache and reinstalling

---

## 🚀 Ready to Launch?

```bash
# 1. Test locally
npm start

# 2. Deploy
vercel  # or your chosen platform

# 3. Configure domain

# 4. Promote!
```

**Your professional creator portfolio is ready! 🎉**

---

Remember: This is YOUR website. Customize it to match your brand and personality. Make it uniquely yours!
