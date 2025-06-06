// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GameDetailsModal from '../GameDetailsModal';
import { IGame } from '../../types/game';

const maliciousRequirements = {
  minimum: 'CPU: Anything <img src="x" onerror="alert(1)" /><script>bad()</script>',
  recommended: '<script>alert("xss")</script>Use something better'
};

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
  platforms: [
    {
      platform: {
        id: 1,
        name: 'PC',
        slug: 'pc',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 0,
        image_background: ''
      },
      released_at: '',
      requirements_en: maliciousRequirements,
      requirements_ru: null
    }
  ],
  parent_platforms: [],
  genres: [],
  stores: []
};

describe('GameDetailsModal sanitization', () => {
  it('strips dangerous tags and attributes', () => {
    render(<GameDetailsModal game={mockGame} closeModal={() => {}} />);

    // script tags should be removed
    expect(document.querySelector('.modal-body script')).toBeNull();
    // onerror attribute should be stripped
    const imgWithOnError = document.querySelector('.modal-body img[onerror]');
    expect(imgWithOnError).toBeNull();

    // ensure safe text is still rendered
    expect(screen.getByText(/CPU: Anything/i)).toBeInTheDocument();
    expect(screen.getByText(/Use something better/i)).toBeInTheDocument();
  });
});
