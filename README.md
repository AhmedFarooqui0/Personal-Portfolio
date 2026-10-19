# Developer Portfolio (React + Vite)

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Make it yours
- Text, skills, projects, education, achievements, social links: `src/data/portfolio.js` (search for `TODO`).
- Resume: save your PDF as `public/resume.pdf`.
- Screenshots: put images in `public/projects/` and set `image: '/projects/name.png'` (use compressed .webp/.jpg under ~200 KB).
- Page title/description: `index.html`.

## Contact form (EmailJS)
1. Create an account at emailjs.com, add an email service and a template using the variables `from_name`, `reply_to`, `subject`, `message`.
2. Copy `.env.example` to `.env.local` and fill in the service ID, template ID and public key.
3. The public key is meant for browsers; never use a private key here. In EmailJS, restrict allowed domains to your site and enable rate limiting.
Without these values the form validates, then shows a fallback message with your email.

## Deploy on Vercel
1. Push to GitHub (`.env.local` is git-ignored).
2. vercel.com > Add New Project > import the repo. Framework: Vite (auto-detected).
3. Add the three `VITE_EMAILJS_*` variables under Settings > Environment Variables, then deploy.

## Final checklist
- [ ] All TODO placeholders replaced; empty sections hidden
- [ ] Nav links scroll and highlight; mobile menu opens/closes
- [ ] Resume downloads; GitHub/LinkedIn/live links open the right pages
- [ ] Form errors, success and failure messages all appear
- [ ] Test at 360px, 768px, 1280px; Tab through everything with the keyboard
- [ ] Modal closes with Esc; Lighthouse accessibility score 90+
- [ ] No console errors in the browser
