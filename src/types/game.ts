export interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface IGame {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: any; // Can be refined if you know the structure
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: string | null;
      year_end: number | null;
      year_start: number | null;
      games_count: number;
      image_background: string;
    };
    released_at: string;
    requirements_en: {
      minimum?: string;
      recommended?: string;
    } | null;
    requirements_ru: unknown;
  }[];
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  genres: IGenre[];
  stores: {
    id: number;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }[];
};
