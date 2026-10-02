import {GameExplorer} from "@/feature/game/components/GameExplorer";
import {getGames} from "@/feature/game/libs/api";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await getGames();

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <GameExplorer games={response.data.games} />
    </main>
  );
}
