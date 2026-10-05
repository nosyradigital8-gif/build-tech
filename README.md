# BuildTech Construction Website

A responsive React website for BuildTech Construction, Oyarifa, Accra, Ghana. The site is designed for commercial construction, design & build, and renovation enquiries, with editable content and replaceable brand/project assets.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- React Router v6
- Framer Motion
- lucide-react
- react-helmet-async
- react-hook-form + zod

## Getting started

```bash
pnpm install
pnpm dev
pnpm build
```

The dev server listens on port 3000. `npm install`, `npm run dev`, and `npm run build` are also supported by the package scripts.

## Project structure

`src/components` contains the shared shell, UI primitives and page sections. `src/pages` contains lazy-loaded routes. `src/data` is the editable content layer. `src/lib` contains SEO and quote submission helpers. `public/brand` contains the supplied logo crops and SVG fallbacks.

## Editing content

Update company details, phone, email, domain, social URLs, stats, navigation, image URLs and footer copy in `src/data/site.ts`. Update service blocks in `src/data/services.ts`, project records and galleries in `src/data/projects.ts`, testimonials in `src/data/testimonials.ts`, and process/FAQ content in `src/data/faqs.ts`. Components should not need editing for ordinary content changes.

## Swapping logo and images

Replace the files under `public/brand/` and `src/assets/` with the final approved lockup, icon-only B and app icon assets. Update the URLs in `src/data/site.ts` for hero/why/team imagery and replace the image URLs in `src/data/services.ts` and `src/data/projects.ts` with owned project photography. The current construction imagery is replaceable Unsplash stock.

## Domain and contact details

Change `domain`, `email`, `socials`, phone and address in `src/data/site.ts`. When the final domain is known, update the same domain in `public/robots.txt` and `public/sitemap.xml`. SEO canonical and Open Graph values are generated from `site.domain`.

## Quote endpoint

By default, the form opens a prefilled WhatsApp message containing all fields. To POST JSON to a backend, copy `.env.example` to `.env` and set:

```bash
VITE_QUOTE_ENDPOINT=https://your-domain.example/api/quote
```

Do not commit `.env` or secrets.

## Deploy to Vercel

Import the GitHub repository into Vercel, keep the framework as Vite, and use `pnpm build` (or `npm run build`) with output directory `dist`. The included `vercel.json` rewrites refreshes to `index.html` so React Router routes continue to work.

## Placeholders to replace

Final email/domain, Facebook and Instagram URLs, stats, testimonials, team names/roles/photos, accreditation badges, project photos and detailed project facts, current service scope/claims, the Google Map destination if a custom pin is preferred, and `VITE_QUOTE_ENDPOINT` if a backend is added.
