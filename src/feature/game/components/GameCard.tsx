import Image from "next/image";
import Game from "@/feature/game/types/game";
import { getGameImageUrl } from "@/feature/game/libs/image";


interface GameCardProps {
  game: Game;
}

export function GameCard({game}: GameCardProps) {
  return (
    <article className="group h-full cursor-pointer overflow-hidden rounded-[11px] bg-slate-950/55 shadow-[0_12px_28px_rgb(0_0_0/0.18)] transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-16/10 overflow-hidden bg-slate-800">
        <Image
          src={getGameImageUrl(game.image)}
          alt={game.title}
          width={320}
          height={180}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950/60 to-transparent" />
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <h2 className="truncate text-base font-bold text-slate-100 sm:text-lg">{game.title}</h2>

        <p className="truncate text-sm text-slate-400">{game.companyName}</p>

        <p className="inline-flex rounded-md border border-violet-300/20 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200">{game.category.title}</p>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
          <span>امتیاز: {game.score}</span>
          <span>اجرا: {game.runCount}</span>
        </div>
      </div>
    </article>
  );
}
