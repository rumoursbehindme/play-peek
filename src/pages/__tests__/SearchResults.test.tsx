// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import SearchResults from '../SearchResults';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

vi.mock('axios');

describe('SearchResults', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (axios.get as unknown as any).mockResolvedValue({ data: { results: [] } });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches games on mount', async () => {
    render(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <SearchResults />
      </MemoryRouter>
    );
    const heading = await screen.findByText(/Search Results/i);
    expect(heading).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalled();
  });

  it('displays error when fetch fails', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (axios.get as unknown as any).mockRejectedValue(new Error('fail'));

    render(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <SearchResults />
      </MemoryRouter>
    );

    const alert = await screen.findByText(/failed to fetch search results/i);
    expect(alert).toBeInTheDocument();
  });
});
