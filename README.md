# ClientFlow Digital

**Manage Brands. Track Performance. Grow Digitally.**

A static, premium-styled client management dashboard built for a Digital Marketing university project. ClientFlow Digital simulates how a real agency tracks clients, campaigns, connected social accounts, analytics and monthly reports — all in a single site, deployable to Vercel in minutes.

---

## 1. Project Overview

ClientFlow Digital is a 5-page static website styled as a modern SaaS dashboard (dark blue + purple gradient theme, glassmorphism cards, smooth animations). It demonstrates practical, hands-on use of:

- **Google Analytics 4** — page and event tracking
- **Microsoft Clarity** — session recording and heatmaps
- **Google Search Console** — site verification
- **GitHub** — version control and source hosting
- **Vercel** — zero-config static deployment

No frameworks are used — just semantic HTML5, hand-written CSS3, vanilla JavaScript, and Chart.js for data visualization.

---

## 2. Features

- Sticky sidebar navigation on desktop, slide-in drawer menu on mobile
- Animated hero with a floating CSS-only dashboard illustration
- Animated statistic counters (12 clients, 48 campaigns, 2.3M reach, 91% retention)
- Six-service grid with hover animations
- Featured clients on the homepage (Nike India, Starbucks India, Zomato, Myntra)
- Full **Clients** dashboard: live search, status filters (All / Active / Reporting / Planning), progress bars, connected social icons, and a "View Client" modal with brand info, campaigns, platforms, performance summary and notes
- Full **Analytics** dashboard: 6 KPI cards + 4 Chart.js charts (line, doughnut, pie, bar), all responsive
- Full **Reports** page: monthly report cards with a sample PDF-style download, plus an animated vertical campaign timeline (Planning → Content Creation → Publishing → Optimization → Reporting)
- Full **Contact** page: agency info, working hours, and a JavaScript-validated enquiry form with a success toast
- Loading screen, scroll-reveal animations, button ripple effect, smooth scrolling
- Accessible: semantic HTML, ARIA labels, visible focus states, keyboard-navigable menus and modal, `prefers-reduced-motion` support
- SEO-ready: meta description/keywords, Open Graph + Twitter Card tags, canonical URLs, Organization structured data, favicon

---

## 3. Screenshots

> Add screenshots of each page here once deployed.

- `Dashboard (index.html)` — ![screenshot placeholder](assets/images/screenshot-dashboard.png)
- `Clients (clients.html)` — ![screenshot placeholder](assets/images/screenshot-clients.png)
- `Analytics (analytics.html)` — ![screenshot placeholder](assets/images/screenshot-analytics.png)
- `Reports (reports.html)` — ![screenshot placeholder](assets/images/screenshot-reports.png)

---

## 4. Folder Structure

```
ClientFlow-Digital/
│
├── index.html
├── clients.html
├── analytics.html
├── reports.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js       # shared behaviour: nav, counters, modal, filters, form
│   └── charts.js        # Chart.js setup (analytics.html only)
│
├── assets/
│   ├── images/           # logos, og-cover.jpg, screenshots
│   └── icons/
│       └── favicon.svg
│
└── README.md
```

---

## 5. How to Run Locally

No build step is required — it's a static site.

**Option A — just open it**
Double-click `index.html`, or right-click → "Open with" your browser.

**Option B — local server (recommended, avoids CORS quirks)**

```bash
# Python 3
cd ClientFlow-Digital
python -m http.server 5500

# then open http://localhost:5500 in your browser
```

Or with Node:

```bash
npx serve ClientFlow-Digital
```

---

## 6. How to Upload to GitHub

1. Create a new folder locally and copy in all project files (keep the exact folder structure above).
2. Initialize git and commit:
   ```bash
   cd ClientFlow-Digital
   git init
   git add .
   git commit -m "Initial commit: ClientFlow Digital"
   ```
3. Create a new repository on [github.com/new](https://github.com/new) (do **not** initialize it with a README).
4. Link and push:
   ```bash
   git remote add origin https://github.com/<your-username>/ClientFlow-Digital.git
   git branch -M main
   git push -u origin main
   ```

---

## 7. How to Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Select the `ClientFlow-Digital` repository you just pushed.
4. Framework Preset: choose **Other** (it's a static site — no build command needed).
5. Leave *Build Command* and *Output Directory* blank, or set Output Directory to `.`.
6. Click **Deploy**. Vercel will give you a live `*.vercel.app` URL within seconds.
7. Every future `git push` to `main` will trigger an automatic redeploy.

---

## 8. How to Connect Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com) and sign in.
2. Click **Admin → Create Property**, fill in your site details.
3. Under the new property, go to **Data Streams → Add Stream → Web**, enter your Vercel URL.
4. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
5. In every HTML file's `<head>`, find the two `G-XXXXXXXXXX` occurrences inside the `<!-- GOOGLE ANALYTICS 4 -->` comment block and replace both with your real Measurement ID.
6. Redeploy. Traffic should appear in GA4's **Realtime** report within a few minutes.

---

## 9. How to Connect Microsoft Clarity

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com) and sign in.
2. Click **Add new project**, enter your site name and Vercel URL.
3. Go to **Settings → Setup** and copy your **Project ID**.
4. In every HTML file's `<head>`, find `YOUR_PROJECT_ID` inside the `<!-- MICROSOFT CLARITY -->` comment block and replace it with your real Project ID.
5. Redeploy. Session recordings and heatmaps will start populating in Clarity within a few minutes of traffic.

---

## 10. How to Verify Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add a property using your Vercel URL (**URL prefix** method).
3. Choose the **HTML tag** verification method — Search Console will give you a `<meta name="google-site-verification" content="...">` tag.
4. In every HTML file's `<head>`, replace `YOUR_CODE` in the existing `google-site-verification` meta tag with the value Search Console gave you.
5. Redeploy, then click **Verify** in Search Console.
6. Once verified, submit a sitemap (optional) and monitor indexing/search performance.

---

## 11. Future Improvements

- Replace the static `CLIENTS` array in `js/script.js` with a real backend or headless CMS (e.g. Airtable, Supabase, Notion API)
- Connect the Analytics page to the live **GA4 Data API** instead of sample numbers
- Generate real PDF reports (e.g. with a serverless function + a PDF library) instead of the sample text-file download
- Add authentication so each client only sees their own dashboard
- Add dark/light theme toggle
- Internationalization (multi-language support)

---

## 12. Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, glassmorphism, keyframe animations)
- Vanilla JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) (line, doughnut, pie, bar charts)
- Google Fonts — Poppins (display) + Inter (body)
- Google Analytics 4, Microsoft Clarity, Google Search Console (placeholder integrations)

---

## 13. License

This project was created for educational purposes as part of a university Digital Marketing course. You're free to reuse, modify and extend it for learning and portfolio purposes.
