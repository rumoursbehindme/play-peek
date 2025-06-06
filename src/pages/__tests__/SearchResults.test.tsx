// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import SearchResults from '../SearchResults';
import { vi } from 'vitest';
import { IGame } from '../../types/game';

vi.mock('axios');
const mockedGet = vi.mocked(axios.get);

const API_KEY = 'test-key';

const game: IGame = {
  id: 1,
  slug: 'sample',
  name: 'Sample Game',
  released: '2024-01-01',
  tba: false,
  background_image: '/sample.jpg',
  rating: 4.5,
  rating_top: 5,
  ratings: [],
  ratings_count: 0,
  reviews_text_count: 0,
  added: 0,
  added_by_status: { yet: 0, owned: 0, beaten: 0, toplay: 0, dropped: 0, playing: 0 },
  metacritic: 0,
  playtime: 0,
  suggestions_count: 0,
  updated: '',
  user_game: null,
  reviews_count: 0,
  saturated_color: '',
  dominant_color: '',
  platforms: [],
  parent_platforms: [],
  genres: [],
  stores: [],
};

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={[`/search?q=test`]}>
      <SearchResults />
    </MemoryRouter>
  );

describe('SearchResults', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_RAWG_API_KEY', API_KEY);
    mockedGet.mockResolvedValue({ data: { results: [game] } });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetAllMocks();
  });

  it('renders game cards after fetch', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
    });

    expect(mockedGet).toHaveBeenCalledWith(
      `https://api.rawg.io/api/games?search=test&key=${API_KEY}`
    );
  });
});
