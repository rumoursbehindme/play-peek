// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameCard from '../GameCard';
import { IGame } from '../../types/game';

describe('GameCard & GameDetailsModal', () => {
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

  it('opens and closes details modal', async () => {
    render(<GameCard game={game} />);
    const detailsButton = screen.getByRole('button', { name: /details/i });
    await userEvent.click(detailsButton);

    const closeButton = screen.getByRole('button', { name: /×/i });
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);

    expect(screen.queryByRole('button', { name: /×/i })).not.toBeInTheDocument();
  });
});
