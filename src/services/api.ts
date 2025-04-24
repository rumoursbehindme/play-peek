import { IGame } from "../types/game";
import { IGenre } from "../types/genre";
import { IPlatform } from "../types/platform";

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
  const res = await fetch(`${BASE_URL}/games?dates=${today},${nextYearEnd}&ordering=-added&page_size=20&key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchGenres = async (): Promise<IGenre[]> => {
  const res = await fetch(`${BASE_URL}/genres?key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchGamesByGenre = async (genreId: number): Promise<IGame[]> => {
  const res = await fetch(`${BASE_URL}/games?genres=${genreId}&key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchPlatforms = async (): Promise<IPlatform[]> => {
  const res = await fetch(`${BASE_URL}/platforms?key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchGamesByPlatform = async (platformId: number): Promise<IGame[]> => {
  const res = await fetch(`${BASE_URL}/games?platforms=${platformId}&key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const fetchTopRatedGames = async (): Promise<IGame[]> => {
  const res = await fetch(`${BASE_URL}/games?ordering=-rating&page_size=20&key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}