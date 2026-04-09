# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Akoya Properties (`artifacts/akoya-properties`)
- **Type**: react-vite static website
- **Preview path**: `/`
- **Purpose**: Luxury real estate marketing website for Akoya Properties Ethiopia
- **Features**:
  - Full-page luxury landing site with dark gold theme
  - Sticky navbar with smooth scroll navigation
  - Hero section with building render background
  - Project overview stats (3B+G+28 floors, 1300m², 6 apts/floor)
  - Full amenities section with 30+ amenities
  - Apartment pricing cards (1BR, 2BR, 3BR) in ETB
  - Payment plan section
  - Photo gallery with all 4 provided images
  - Location section (Sarbet, near Canada Embassy)
  - Contact section with WhatsApp (+251998885529) and Call buttons
  - Footer with logo
- **Images**: All 4 attached_assets images used via @assets alias
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
