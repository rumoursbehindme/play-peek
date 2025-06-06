// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import GameCard from '../GameCard';
import { IGame } from '../../types/game';

const mockGame: IGame = {
  id: 1,
  slug: 'game-1',
  name: 'Game 1',
  released: '2020-01-01',
  tba: false,
  background_image: '/assets/svg/no-game-image.svg',
  rating: 4,
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

describe('GameCard', () => {
  it('opens modal when Details button is clicked', async () => {
    render(<GameCard game={mockGame} />);
    const btn = screen.getByRole('button', { name: /details/i });
    await userEvent.click(btn);
    // Modal should appear
    expect(screen.getByRole('button', { name: /×/i })).toBeInTheDocument();
  });
});
