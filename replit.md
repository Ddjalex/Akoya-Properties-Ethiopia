# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (Neon — uses `NEON_DATABASE_URL` secret, falls back to `DATABASE_URL`)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Akoya Properties (`artifacts/akoya-properties`)
- **Type**: react-vite static website
- **Preview path**: `/`
- **Purpose**: Luxury real estate marketing website for Akoya Properties Ethiopia
- **Routes**: `/`, `/about`, `/properties`, `/gallery`, `/profile`, `/contact`
- **Features**:
  - Full-page luxury landing site with dark gold theme
  - Sticky responsive navbar with mobile hamburger
  - Hero section with building render background
  - Project overview stats (3B+G+28 floors, 1300m², 6 apts/floor)
  - 8 numbered property cards (Property 1 – Property 8) on `/properties`
    page and a featured-4 teaser on the homepage
  - About page with Mission / Vision / Why Choose Us / image gallery sections
  - Property gallery page with category filters (All / Exterior / Interior / Construction / Amenities)
  - Contact page with phone, WhatsApp, email, address, hours, contact form,
    floating WhatsApp button and 6 social media icons
    (Facebook, Instagram, Telegram, TikTok, YouTube, LinkedIn)
  - Footer with social icons, full pages list, address & all contact methods
- **Easy-to-edit data files**:
  - `src/data/properties.ts` — the 8 property cards (number, image, title, price, etc.)
  - `src/data/contact.ts` — phone, WhatsApp, email, address, social media links
- **Images**: 4 attached_assets images used via @assets alias (logo + 3 renders)
- **Animations**: Framer Motion scroll-triggered entrance animations

### API Server (`artifacts/api-server`)
- **Type**: Express 5 backend
- **Preview path**: `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/akoya-properties run dev` — run the Akoya Properties website

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
