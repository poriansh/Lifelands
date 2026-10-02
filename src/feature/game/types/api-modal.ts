import Game from "@/feature/game/types/game";

export interface ApiResponse<T> {
  state: boolean;
  data: T;
}
export interface GamesPage {
  pageId: number;
  eachPerPage: number;
  searchValue: string;
  total: number;
  games: Game[];
}
