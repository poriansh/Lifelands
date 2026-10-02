# Development

## Requirements

- Node.js compatible with Next.js 16.
- pnpm 11.17.0, as declared by `package.json`.

Install dependencies from the project root:

```bash
pnpm install
```

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Starts the Next.js development server. |
| `pnpm lint` | Runs ESLint with Next.js core-web-vitals and TypeScript rules. |
| `pnpm build` | Creates a production build. |
| `pnpm start` | Serves a completed production build. |

## Configuration

- `next.config.ts` allows `next/image` requests to the `lifelands.ir` host.
- `tsconfig.json` enables strict TypeScript, uses bundler module resolution, and maps `@/*` to `src/*`. It also enables unused-local and unused-parameter checks.
- `postcss.config.mjs` enables the Tailwind CSS PostCSS plugin.
- `eslint.config.mjs` composes Next.js core-web-vitals and TypeScript configurations.
- `pnpm-workspace.yaml` disables build scripts for `sharp` and `unrs-resolver`.

## Verification notes

Run `pnpm exec tsc --noEmit` to perform an explicit TypeScript check, and `pnpm lint` to verify the source lint rules locally. A production build also performs page-data collection for `/home`, so it requires access to the external Lifelands API. If the environment blocks outbound access to that API, the compile and TypeScript phases can succeed while static prerendering of `/home` fails.
