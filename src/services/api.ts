import { IGame } from "../types/game";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async () => {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchUpcomingGames = async (): Promise<IGame[]> => {
  const today = new Date().toISOString().split('T')[0];
  const nextYearEnd = new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0];

  const res = await fetch(
    `https://api.rawg.io/api/games?dates=${today},${nextYearEnd}&ordering=-added&page_size=20&key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

