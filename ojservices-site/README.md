# OJ Services — website

Customer-facing site for **OJ Services**: plumbing, bathrooms, landscaping /
restoration and emergency callouts. Built with Next.js 15, React 19 and
Tailwind CSS v4 (the same stack as the PlumbCalc site), but it is a
**self-contained app** and deploys completely independently.

## Run locally

```bash
cd ojservices-site
npm install
npm run dev      # http://localhost:3003
```

## Before going live — checklist

1. **Business details** — edit `src/lib/site-config.ts` (phone, email, WhatsApp,
   service area, years of experience). Everything on the site reads from here, so
   this is the main file to update.
2. **Your work photos** — drop images into `public/work/` and set the `image`
   field for each project in `src/components/work-gallery.tsx`
   (e.g. `image: '/work/bathroom-1.jpg'`). Until then, tidy branded placeholders
   are shown.
3. **Reviews** — replace the placeholder reviews in
   `src/components/testimonials.tsx` with real customer feedback before launch.
4. **Services copy** — adjust wording in `src/components/services.tsx` if needed.

## Lead capture

- **Call / WhatsApp** work out of the box once the numbers are set in
  `site-config.ts` (sticky bar on mobile + buttons throughout).
- The **quote form** opens the visitor's email app pre-filled to your address
  (no backend needed). To collect submissions in a proper inbox/dashboard
  instead, wire it to a service like Formspree or add a Next.js route handler.

## Deploy (Vercel)

Create a **new Vercel project** for this site and set its **Root Directory** to
`ojservices-site`, then add **ojservices.co.uk** (+ `www`) to that project. Keep
PlumbCalc as its own separate project on its own domain.

## Get found locally

- Set up a **Google Business Profile** — the biggest lead source for trades. The
  site already ships `LocalBusiness` structured data to help.
- Ask happy customers for Google reviews and add them to the testimonials.
