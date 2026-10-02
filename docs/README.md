# Lifelands Game Explorer

Lifelands Game Explorer is a small Persian (RTL) Next.js application with two independent screens:

- A game explorer at `/home`, backed by the Lifelands games API.
- A game simulation at `/simulation`, which demonstrates a bounded, time-limited list of client-side items.

The project uses the App Router, TypeScript, Tailwind CSS v4, and a local IRANSans font. It has no Pages Router directory and does not expose any application-owned API routes.

## Documentation map

- [Architecture](./architecture.md): source layout, routes, rendering boundaries, and shared UI.
- [Game explorer](./game-explorer.md): API integration, data model, cards, and loading/error states.
- [Simulation](./simulation.md): exact simulation lifecycle and UI component responsibilities.
- [Development](./development.md): installation, commands, tooling, and configuration.

## Routes

| Route | Source | Purpose |
| --- | --- | --- |
| `/home` | `src/app/home/page.tsx` | Fetches and renders the game catalogue. |
| `/simulation` | `src/app/simulation/page.tsx` | Renders the live game-item simulation. |
| unmatched paths | `src/app/not-found.tsx` | Displays the global not-found experience. |

The root layout at `src/app/layout.tsx` wraps every route and sets `lang="fa"` and `dir="rtl"`.

## Import convention

Application source imports use the `@/*` TypeScript alias. It maps to `src/*`, so feature and shared modules are imported from paths such as `@/feature/game/components/GameCard` and `@/shared/magic-bento`.

External packages continue to use their package names, for example `next/image`, `next/link`, `react`, and `gsap`.
