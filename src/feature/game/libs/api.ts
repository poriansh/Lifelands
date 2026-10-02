import { ApiResponse, GamesPage } from "@/feature/game/types/api-modal";

const GAMES_API_URL = process.env.GAMES_API_URL;

export async function getGames(): Promise<ApiResponse<GamesPage>> {
  if (!GAMES_API_URL) {
    throw new Error("GAMES_API_URL is not configured");
  }

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
