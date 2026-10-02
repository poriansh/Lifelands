# Architecture

## Application structure

```text
src/
├── app/                         # App Router routes and route-level UI
│   ├── home/page.tsx             # /home game catalogue
│   ├── simulation/page.tsx       # /simulation page shell
│   ├── layout.tsx                # root document, metadata, RTL and font
│   ├── loading.tsx               # root loading fallback
│   ├── error.tsx                 # root error boundary UI
│   ├── not-found.tsx             # unmatched-route and notFound() UI
│   └── globals.css               # Tailwind import and application tokens
├── feature/
│   ├── game/                     # game catalogue feature
│   └── simulation/               # simulation feature
└── shared/
    └── magic-bento/              # reusable animated card-grid wrapper
```

`src/app` is the only routing tree. There is no `pages` directory, provider component, middleware, route handler, or environment-variable file in the current repository.

## Rendering model

`RootLayout` is a Server Component. It loads `IRANSansWeb_FaNum.woff2` using `next/font/local`, exposes it as `--font-iran-sans`, and applies the font to the document body. The root `<html>` element establishes Persian language and RTL layout for every route.

`/home` is an async Server Component. It calls `getGames()` before rendering `GameExplorer`. The root `loading.tsx` supplies the App Router suspense fallback and `error.tsx` is the client error boundary for route-level runtime errors. `not-found.tsx` handles unmatched URLs as well as any future `notFound()` calls.

The simulation component is intentionally a Client Component because it uses state and an interval. Its route page is a small Server Component wrapper.

## Module imports

`tsconfig.json` maps `@/*` to `./src/*`. Source modules use this alias instead of parent-directory relative imports. Examples:

```ts
import GameSimulation from "@/feature/simulation/components/GameSimulation";
import { MagicBento } from "@/shared/magic-bento";
import "@/app/globals.css";
```

Package imports and local re-exports remain unchanged. The local font path in `RootLayout` is a `next/font/local` asset reference, not a module import.

## Shared animated card grid

`shared/magic-bento/MagicBento.tsx` is a client-side reusable wrapper around its children. It uses GSAP to provide optional particles, pointer spotlighting, border glow, tilt, magnetism, and click ripples. `MagicBento.css` owns its grid breakpoints and card wrapper styles.

The game grid currently configures MagicBento with a purple glow (`132, 0, 255`), stars, spotlight, border glow, and click effect. Tilt and magnetism are disabled. On screens at or below 768px, MagicBento disables its animations through its internal mobile detection hook.

## Styling

Tailwind CSS v4 is imported in `src/app/globals.css` through `@import "tailwindcss"`. The global color tokens are `--background` and `--foreground`; individual components use utility classes for their layouts and visual treatments. The visual language uses dark slate surfaces, restrained violet accents, subtle borders, and responsive spacing.
