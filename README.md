# IG — Trading Platform Landing

A pixel-faithful rebuild of an IG-style trading platform landing page. Built with Next.js 16 (App Router) + Tailwind CSS v4. Single page, seven sections, all visuals rendered with pure CSS (no asset dependencies).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript
- Inter + Playfair Display (via `next/font`)

## Sections

1. Hero — eclipse illustration with floating market cards
2. Markets grid — Forex, Indices, Shares, Commodities, Cryptocurrencies, ETFs
3. Rewards & rebates — spheres, volume chart, green disk
4. Award-winning platforms — checklist + aurora blob
5. Trust card — 400,000+ traders stats
6. Community — mountain night background with 3-step signup card
7. Footer — aurora gradient with link columns + legal

## Getting started

Requires Node.js 20+ and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open http://localhost:3000 in your browser.

## Available scripts

| command         | what it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | start the Turbopack dev server on :3000   |
| `npm run build` | create a production build                 |
| `npm start`     | run the production build                  |

## Project structure

```
app/
  layout.tsx     # root layout, fonts, metadata
  globals.css    # Tailwind import + custom CSS (eclipse, mountain, aurora)
  page.tsx       # the entire landing page (all 7 sections)
public/          # static assets
```

## Notes

- All product visuals (Forex tiles, share blocks, oil drums, globe, astronaut, etc.) are CSS-only approximations — swap in real 3D renders later if needed.
- Tailwind v4 uses the new `@import "tailwindcss"` syntax and `@theme inline` blocks instead of `tailwind.config.js`.

## License

Private project. All rights reserved.
