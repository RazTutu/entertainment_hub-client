import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';

import { Navigation } from './navigation';
import { theme } from '@/config/theme';
import { NAV_INPUT_PLACEHOLDER } from '@/config/constants';

describe('Navigation component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Navigation handleSetFullSidebar={() => null} />
      </ThemeProvider>
    );
  });

  it('renders the search input', () => {
    const searchInput = screen.getByPlaceholderText(
      NAV_INPUT_PLACEHOLDER
    );
    expect(searchInput).toBeInTheDocument();
  });

  it('allows typing text into the search input', () => {
    const searchInput = screen.getByPlaceholderText(
      NAV_INPUT_PLACEHOLDER
    );

    fireEvent.change(searchInput, {
      target: { value: 'God of war' },
    });
    expect(searchInput).toHaveValue('God of war');
  });
});
