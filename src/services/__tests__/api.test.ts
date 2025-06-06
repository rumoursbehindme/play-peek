// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
/// <reference types="node" />

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const API_KEY = 'test-key';
const BASE_URL = 'https://api.rawg.io/api';

let fetchMock: ReturnType<typeof vi.fn>;

const loadApi = async () => {
  vi.stubEnv('VITE_RAWG_API_KEY', API_KEY);
  vi.resetModules();
  const module = await import('../api');
  return module;
};

beforeEach(() => {
  fetchMock = vi.fn().mockResolvedValue({ json: vi.fn().mockResolvedValue(sampleResponse) });
  global.fetch = fetchMock as any;
});

afterEach(() => {
  vi.resetAllMocks();
  vi.unstubAllEnvs();
});

const sampleResponse = { results: [{ id: 1 }] };

describe('api services', () => {
  it('fetchGames calls correct endpoint', async () => {
    const { fetchGames } = await loadApi();
    const data = await fetchGames();
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/games?key=${API_KEY}`);
    expect(data).toEqual(sampleResponse.results);
  });

  it('fetchUpcomingGames builds dates url', async () => {
    const { fetchUpcomingGames } = await loadApi();
    await fetchUpcomingGames();
    const today = new Date().toISOString().split('T')[0];
    const nextYearEnd = new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0];
    expect(fetchMock).toHaveBeenCalledWith(
      `${BASE_URL}/games?dates=${today},${nextYearEnd}&ordering=-added&page_size=20&key=${API_KEY}`
    );
  });

  it('fetchGenres calls genres endpoint', async () => {
    const { fetchGenres } = await loadApi();
    await fetchGenres();
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/genres?key=${API_KEY}`);
  });

  it('fetchGamesByGenre uses provided id', async () => {
    const { fetchGamesByGenre } = await loadApi();
    await fetchGamesByGenre(3);
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/games?genres=3&key=${API_KEY}`);
  });

  it('fetchPlatforms calls platforms endpoint', async () => {
    const { fetchPlatforms } = await loadApi();
    await fetchPlatforms();
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/platforms?key=${API_KEY}`);
  });

  it('fetchGamesByPlatform uses provided id', async () => {
    const { fetchGamesByPlatform } = await loadApi();
    await fetchGamesByPlatform(5);
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/games?platforms=5&key=${API_KEY}`);
  });

  it('fetchTopRatedGames orders by rating', async () => {
    const { fetchTopRatedGames } = await loadApi();
    await fetchTopRatedGames();
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/games?ordering=-rating&page_size=20&key=${API_KEY}`);
  });

  it('propagates fetch errors', async () => {
    fetchMock.mockRejectedValue(new Error('fail'));
    const { fetchGames } = await loadApi();
    await expect(fetchGames()).rejects.toThrow('fail');
  });
});
