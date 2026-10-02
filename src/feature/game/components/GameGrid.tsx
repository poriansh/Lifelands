

import Game from "@/feature/game/types/game";
import {GameCard} from "@/feature/game/components/GameCard";
import { MagicBento } from "@/shared/magic-bento";

interface GameGridProps {
  games: Game[];
}

export function GameGrid({games}: GameGridProps) {
  return (
    <MagicBento
      textAutoHide={true}
      enableStars
      enableSpotlight
      enableBorderGlow={true}
      enableTilt={false}
      enableMagnetism={false}
      clickEffect
      spotlightRadius={400}
      particleCount={12}
      glowColor="132, 0, 255"
      disableAnimations={false}
    >
      {games.map((game) => (
        <GameCard key={game._id} game={game} />
      ))}
    </MagicBento>
  );
}
