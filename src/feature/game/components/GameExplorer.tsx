
import Game from "@/feature/game/types/game";
import {GameGrid} from "@/feature/game/components/GameGrid";

interface GameExplorerProps {
  games: Game[];
}

export function GameExplorer({games}: GameExplorerProps) {
  return (
    <section aria-labelledby="games-title" className="mx-auto w-full max-w-7xl">
      <div className="mb-8 border-b border-white/10 pb-6 sm:mb-10 sm:pb-7">
        <h1 id="games-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">بازی‌ها</h1>
        <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">بازی‌های موجود در لیفلندز</p>
      </div>
        <GameGrid games={games} />
    </section>
  );
}
