import { GameItemT } from "@/feature/simulation/types/simulation";

;


type GameItemProps = {
  item: GameItemT;
};

export default function GameItem({item}: GameItemProps) {
  return (
    <div
      className="flex min-h-11 items-center rounded-xl border border-white/10 bg-slate-900/75 px-4 text-sm font-medium text-slate-200 shadow-sm transition-colors hover:border-violet-400/30 hover:bg-violet-500/10 sm:px-5"
      data-item-id={item.id}
    >
      Game Item #{item.id}
    </div>
  );
}
