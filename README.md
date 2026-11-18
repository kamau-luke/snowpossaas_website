# Clubio POS website

The public marketing page for Clubio POS: what it does, pricing, and how to get in touch. It's built
with Astro 7 and Tailwind 4 and outputs static HTML; it has no backend and no analytics. It is
separate from the app (`snowpossaas_ui`), so changes here can't affect the POS.

## Run locally
Needs Node 22.23.4 or newer (`.nvmrc`). With nvm, run `nvm use` in this folder first.

```bash
cd snowpossaas_website
npm install
npm run dev        # http://localhost:5175 (the UI runs on 5174, the API on 4100)
```

Stop it with Ctrl+C. Astro also runs the dev server in the background when it isn't started
from a terminal (or with `npm run dev -- --background`). `npx astro dev status` shows whether one
is running, `npx astro dev stop` stops it, and `npx astro dev logs --follow` shows its output.

"Sign in" and "Start free trial" go to the UI at `http://localhost:5174`. Set `PUBLIC_APP_URL` (see
`.env.example`) to point them somewhere else.

Other commands: `npm run check` (types), `npm run build` (static site in `dist/`), `npm run
preview`, `npm run format`.

## Before showing it to anyone
Fill in the placeholders marked TODO in `src/site.ts`:
- `BUSINESS.legalName`: the business name, as it appears on the app's terms and privacy pages
- `CONTACT`: WhatsApp number, phone number (displayed and `+254` form) and email

Keep these in step with the app:
- `PLANS` (prices and features): Platform admin → Plans & pricing
- `TRIAL_DAYS`: `TRIAL_DAYS` in `snowpossaas_backend/src/modules/business/business.service.ts`

The hero shows an illustration of a closed shift drawn in HTML (`src/components/Hero.astro`).
Swap in a real screenshot from a demo club when you have one.

## Layout
- `src/site.ts`: everything you're likely to change (links, contact, prices)
- `src/pages/index.astro`: the page, assembled from the sections in `src/components/`
- `src/pages/404.astro`: page not found
- The terms and privacy policy aren't copied here: the footer links to the app's `/terms` and
  `/privacy`, so they live in one place.

## Deploying
Not set up yet. It will be planned along with the backend and UI deploys. The site is meant to go
on the root domain and the app on `app.`.
