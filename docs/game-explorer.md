# Game explorer

## Data source

`src/feature/game/libs/api.ts` fetches `https://lifelands.ir/api/v1/games` with a Next.js revalidation interval of 60 seconds. If the HTTP response is not successful, it throws `Error("Failed to fetch games")`; the root error boundary renders `src/app/error.tsx` in that case.

`getGameImageUrl()` in `libs/image.ts` leaves absolute image URLs unchanged and prefixes relative image paths with `https://lifelands.ir/api/v1`.

Remote images from `lifelands.ir` are allowed by the `images.remotePatterns` entry in `next.config.ts`.

## Data model

The `Game` interface in `types/game.ts` describes catalogue entries. The rendered card uses these fields:

| Field | Card use |
| --- | --- |
| `image` | Remote game artwork. |
| `title` | Image alternative text and card heading. |
| `companyName` | Supporting metadata. |
| `category.title` | Category badge. |
| `score` | Score metadata. |
| `runCount` | Run-count metadata. |

`ApiResponse<T>` wraps the response with `state` and `data`. `GamesPage` supplies pagination-related fields plus the `games` array. The current UI passes `response.data.games` directly to `GameExplorer`; it does not paginate, search, filter, or transform the result.

## Component flow

```text
/home page
  └── GameExplorer
        └── GameGrid
              └── MagicBento
                    └── GameCard (one per game)
```

`GameGrid` uses each game `_id` as the React key. `GameCard` uses Next.js `Image` with a fixed intrinsic size of 320 × 180 and CSS `object-cover` presentation.

## Loading and error states

The root `loading.tsx` mirrors the game explorer heading and renders `GameCardSkeleton`. The skeleton produces eight responsive placeholder cards with the same approximate 16:10 image region and metadata layout as a game card.

The root `error.tsx` is a Client Component. It logs the received error, preserves its existing `reset()` retry action, and provides a full-page reload action. Its role is presentation and recovery only; it does not change API behavior.
