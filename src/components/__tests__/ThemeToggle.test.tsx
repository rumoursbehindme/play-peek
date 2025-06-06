// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../ThemeToggle';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  it('toggling checkbox updates body class and localStorage', async () => {
    render(<ThemeToggle />);
    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();

    // initial state should be dark mode
    expect(checkbox).toBeChecked();
    expect(document.body.classList.contains('dark-mode')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    await act(async () => {
      await user.click(checkbox);
    });
    expect(checkbox).not.toBeChecked();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('includes an aria-label for accessibility', () => {
    render(<ThemeToggle />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Toggle dark mode');
  });
});
