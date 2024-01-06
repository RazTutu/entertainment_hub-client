export type Game = {
  external_api_id: number;
  background_image: string;
  platforms: string[];
  released_date: string;
};

export type Games = {
  games: Game[];
};