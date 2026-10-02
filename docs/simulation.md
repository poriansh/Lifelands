# Game simulation

## Route and components

`/simulation` renders `GameSimulation` from `src/feature/simulation/components/GameSimulation.tsx`. `GameSimulation` renders the summary counters and maps the active list to `GameItem` components. `GameItem` is the presentational row that exposes its identifier through `data-item-id`.

The feature type is defined in `src/feature/simulation/types/simulation.ts`:

```ts
type GameItemT = {
  id: number;
  createdAt: number;
};
```

## Lifecycle

On mount, `GameSimulation` starts one `setInterval` that runs every 1,000 ms. On each tick it:

1. Captures the current timestamp.
2. Removes existing entries whose age is 10,000 ms or more.
3. Adds one new item whose `id` and `createdAt` both equal the timestamp.
4. Keeps only the newest 100 active items.
5. Increments the total-created counter.

The interval is cleared during component cleanup. There are no controls, persistence, network requests, or other side effects in this feature.

## Constants

| Constant | Value | Meaning |
| --- | ---: | --- |
| `MAX_ITEMS` | 100 | Upper bound for retained list entries. |
| `ITEM_LIFETIME` | 10,000 ms | Maximum age of an active entry. |
| interval delay | 1,000 ms | Frequency for creating an item. |

## UI behavior

The summary reports `totalCreated`, which only increases while the component is mounted, and `items.length`, which reflects currently active DOM rows. The visual redesign changes only responsive spacing, dark surfaces, typography, borders, and hover treatment; the creation, expiry, cap, rendering, and cleanup logic are unchanged.
