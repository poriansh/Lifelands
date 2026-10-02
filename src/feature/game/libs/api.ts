import { ApiResponse, GamesPage } from "@/feature/game/types/api-modal";

const GAMES_API_URL = "https://lifelands.ir/api/v1/games";

export async function getGames(): Promise<ApiResponse<GamesPage>> {
  const response = await fetch(GAMES_API_URL, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json() as Promise<ApiResponse<GamesPage>>;
}
