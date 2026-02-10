# SOZO Demo Webpage

A modern, responsive web page featuring a chatbot interface and YouTube video embed for product demos.

## Features

- 🎥 YouTube video embed (supports private/unlisted links)
- 💬 LeadConnector chatbot widget integration
- 📱 Fully responsive design
- 🎨 Modern, professional UI with gradient backgrounds
- ✨ Smooth animations and transitions

## Setup Instructions

### 1. Add Your YouTube Video

1. Open `index.html`
2. Find the line with `src="https://www.youtube.com/embed/VIDEO_ID"`
3. Replace `VIDEO_ID` with your actual YouTube video ID

**For private/unlisted videos:**
- Your video must be set to "Unlisted" on YouTube (Private videos won't work in embeds)
- Get your video ID from the YouTube URL (e.g., `https://youtu.be/ABC123` → video ID is `ABC123`)
- The embed URL should look like: `https://www.youtube.com/embed/ABC123`

### 2. Chatbot Configuration

The page uses a LeadConnector chatbot widget (widget ID: `6981503730a943167d585615`).

The chatbot is already integrated and will appear automatically on your page. To customize or manage the chatbot:
1. Log in to your LeadConnector account
2. Navigate to your chatbot settings
3. Modify responses, appearance, and behavior through the LeadConnector dashboard

### 3. Customize Branding

- **Logo/Title**: Edit the `<h1 class="logo">` in `index.html`
- **Colors**: Modify CSS variables in `styles.css` under `:root`
- **Content**: Update text in `index.html` to match your product

## How to Run

### Option 1: Double-click the HTML file
Simply open `index.html` in any modern web browser.

### Option 2: Use a local server (recommended)
```bash
# If you have Python 3 installed:
python3 -m http.server 8000

# If you have Node.js installed:
npx http-server -p 8000

# Then visit: http://localhost:8000
```

### Option 3: Use VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Deployment

This is a static website and can be hosted on:
- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)
- **AWS S3 + CloudFront**
- Any web hosting service

### Quick Deploy to Netlify:
1. Drag and drop the folder to https://app.netlify.com/drop
2. Your site will be live instantly!

## File Structure

```
SOZO Demo Webpage/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Chatbot functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Change gradient colors**: Edit the gradient values in `styles.css`
2. **Add more pages**: Create additional HTML files and link them in the nav
3. **Integrate real chatbot**: Replace the simple bot logic with API calls
4. **Add analytics**: Insert Google Analytics or similar tracking code
5. **Add contact form**: Integrate with services like Formspree or EmailJS

## Support

For questions or issues, please contact the development team.

---

Built with ❤️ for SOZO
