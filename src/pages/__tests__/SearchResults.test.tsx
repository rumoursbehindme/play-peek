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
});
