# OJ Services — website

Customer-facing site for **OJ Services**: a Gas Safe registered **gas, heating &
plumbing** business — boiler installation, servicing & repair, central heating,
gas safety / landlord certificates, emergency callouts and general plumbing.

Built with Next.js 15, React 19 and Tailwind CSS v4. This repo is **only** the
OJ Services website — it has nothing to do with the PlumbCalc app (the separate
tool used for quoting, estimating and job tracking). The two are kept entirely
apart.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3003
```

## Before going live — checklist

1. **Business details** — edit `src/lib/site-config.ts` (phone, email, WhatsApp,
   service area, years of experience). Everything on the site reads from here, so
   this is the main file to update.
2. **Gas Safe number** — in `src/lib/site-config.ts`, set `gasSafeNumber` to your
   real registration number. Until you do, the site shows a "Gas Safe registered"
   badge without a number (the number only appears once it's filled in). If you
   aren't Gas Safe registered, set `gasSafeRegistered: false`.
3. **Your work photos** — drop images into `public/work/` (jpg / png / webp).
   They appear in the **Our Work** gallery automatically and the file name
   becomes the caption (e.g. `new-boiler.jpg` → "New Boiler"). Until then, tidy
   branded placeholders are shown.
4. **Reviews** — replace the placeholder reviews in
   `src/components/testimonials.tsx` with real customer feedback before launch.
5. **Services copy** — adjust wording in `src/components/services.tsx` if needed.

## Lead capture

- **Call / WhatsApp** work out of the box once the numbers are set in
  `site-config.ts` (sticky bar on mobile + buttons throughout).
- The **quote form** opens the visitor's email app pre-filled to your address
  (no backend needed). To collect submissions in a proper inbox/dashboard
  instead, wire it to a service like Formspree or add a Next.js route handler.

## Deploy (Vercel)

Create a Vercel project pointing at this repo (the **Root Directory** is the repo
root — there is no subfolder anymore), then add **ojservices.co.uk** (+ `www`) to
that project. PlumbCalc is a completely separate project on its own domain.

## Get found locally

- Set up a **Google Business Profile** — the biggest lead source for trades. The
  site already ships `LocalBusiness` / `HVACBusiness` structured data to help.
- Ask happy customers for Google reviews and add them to the testimonials.
