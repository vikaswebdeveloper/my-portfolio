# Kodeva — Freelance Portfolio

Lightweight static site: plain HTML/CSS/JS, no dependencies, no build step.

## Structure
```
portfolio/
├─ index.html              Home
├─ 404.html                Not-found page
├─ about/ services/ pricing/ experience/
│  clients/ reviews/ faq/ contact/      Pages (each is <name>/index.html → URL /<name>/)
├─ legal/                  privacy/, terms/, refund-policy/
├─ projects/               Portfolio
│  ├─ index.html           All projects (filter by category, or /projects/?type=ai)
│  └─ <project>/index.html One case-study page per project
└─ assets/
   ├─ css/style.css        Theme + components
   ├─ js/main.js           Config, header/footer, theme toggle, animations
   └─ img/logo.svg         Logo / favicon
```

## Customise
- **Name, email, links, brand:** the `SITE` block at the top of `assets/js/main.js` (header, footer and contact details update everywhere).
- **Menus and footer links:** the `NAV`, `EXPLORE`, `PROJECTS`, `LEGAL` lists in the same file.
- **Colours:** CSS variables at the top of `assets/css/style.css`.
- **Page text:** edit each `.html` file. Items marked “sample”, “add” or “Your Name” are placeholders.
- The brand name also appears in each page's `<title>`; find-and-replace `Kodeva` to rename fully.

## Add a project
1. Copy any folder in `projects/` (e.g. `goride`) to `projects/<new-name>/` and edit it.
2. Add a card to `projects/index.html` (set `data-cat` to `fullstack`, `ai` or `business`) and, if wanted, to `index.html`.
3. Add it to the `PROJECTS` list in `assets/js/main.js` so it appears in the footer.

## Run locally
`python -m http.server` (or `npx serve .`) in this folder, then open http://localhost:8000.

## Deploy
Drag the folder into Netlify, Vercel or Cloudflare Pages, or push to GitHub and enable Pages.

## Notes
- Contact form opens the visitor's email app (no backend needed). Swap in Formspree/Netlify Forms if you want server-side submissions.
- Legal pages are general templates, not legal advice. Have them reviewed before relying on them.
- Pricing, reviews and experience dates are placeholders to replace with your real details.
