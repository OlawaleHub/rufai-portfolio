# Rufai Abdulrahmon — Portfolio Website

A modern, single-page portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **lucide-react** icons. Dark navy + gold aesthetic with scroll animations and a clearly-marked photo placeholder.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Add your picture (later)

1. Save your photo as `public/profile.jpg` (square, ~640×640 recommended).
2. Open `src/lib/data.js` and set `hasPhoto: true`.

That's it — the placeholder "RA" monogram is replaced by your photo automatically.

## Edit content

All text content lives in **`src/lib/data.js`** — profile, experience, skills, certifications, leadership, and stats. Update it there; no need to touch the components.

## Project structure

```
src/
├── app/
│   ├── layout.js      # Root layout + SEO metadata
│   ├── page.js        # Home (composes all sections)
│   ├── globals.css    # Tailwind + theme + animations
│   └── not-found.js   # 404 page
├── components/
│   ├── Navbar.js      # Sticky nav + mobile menu (client)
│   ├── Hero.js        # Hero with photo placeholder
│   ├── ProfilePhoto.js # ← drop your picture here
│   ├── About.js
│   ├── Experience.js  # Timeline
│   ├── Skills.js
│   ├── Certifications.js # Education + certs
│   ├── Leadership.js
│   ├── Contact.js
│   ├── Footer.js
│   └── Reveal.js      # Scroll animation wrapper (client)
└── lib/
    └── data.js        # All content (edit this)
```

## Build & deploy

```bash
npm run build   # production build
npm run start   # run the production server
```

Deploy to Vercel — no `vercel.json` needed. Push to GitHub, import the repo at <https://vercel.com>, and Vercel handles Next.js natively.
