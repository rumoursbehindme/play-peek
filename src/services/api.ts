const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async () => {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};
