# McCallum Creative Co. — Site

## File Structure
```
/
├── index.html          ← Homepage (all sections)
├── work.html           ← Portfolio page
├── services.html       ← Services + pricing page
├── about.html          ← About Craig / studio page
├── contact.html        ← Contact form page
├── css/
│   └── global.css      ← Design system (colors, nav, footer, buttons)
├── js/
│   ├── components.js   ← Nav + footer HTML injection
│   └── nav.js          ← Scroll behavior + reveal animations
├── netlify.toml        ← Netlify config (clean URLs, headers)
└── README.md
```

## Deploy to Netlify (2 minutes)

### Option A — Drag & Drop (fastest)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire site folder onto the page
3. Your site is live instantly at a `.netlify.app` URL

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir .
```

### Option C — Git (recommended for ongoing updates)
1. Push this folder to a GitHub repo
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import from Git"
4. Connect your repo — Netlify auto-deploys on every push

## Connect Your Domain
1. In Netlify: Site settings → Domain management → Add custom domain
2. Update your DNS nameservers to Netlify's (provided in dashboard)
3. SSL certificate is automatic (Let's Encrypt)

## Connect the Contact Form
The form on index.html and contact.html already points to Formspree.
To activate it:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `maqagbrg` in the form action URLs with your own form ID:
   `action="https://formspree.io/f/YOUR_FORM_ID"`

Or switch to Netlify Forms (free, built-in):
1. Add `data-netlify="true"` to each `<form>` tag
2. Remove the Formspree action attribute
3. Netlify captures submissions automatically — view in dashboard

## Add Your Videos
Replace placeholder comments with real video tags:

**Hero (index.html):**
```html
<video id="heroVideo" autoplay muted loop playsinline>
  <source src="YOUR_VIDEO_URL.mp4" type="video/mp4"/>
</video>
```

**Showcase section (index.html):**
```html
<video autoplay muted loop playsinline>
  <source src="YOUR_SHOWCASE_VIDEO.mp4" type="video/mp4"/>
</video>
```
Then delete the `<div class="video-placeholder">` beneath it.

## Customize

### Colors (css/global.css)
```css
:root {
  --teal:   #2DD4BF;   /* accent, CTAs */
  --gold:   #C9973A;   /* italic headlines */
  --orange: #C2612F;   /* buttons, dividers */
  --green:  #1F4D3A;   /* philosophy section bg */
}
```

### Nav links (js/components.js)
Edit the `navLink()` calls to add/remove pages.

### Content
Each page is self-contained HTML — edit text directly.
Craig's name and email appear in about.html and contact.html.
