import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { theme } from '@/config/theme';
import { colors } from '@/config/colors';
import { hexToRgb } from '@/utils/convertors';

describe('Sidebar component on desktop', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Sidebar
            fullSidebarActive={false}
            handleSetFullSidebar={() => null}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  it('renders sidebar title', () => {
    const titleElement = screen.getByText(
      'Entertainment Hub'
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const gamesLink = screen.getByText('Games');
    const moviesLink = screen.getByText('Movies');
    const booksLink = screen.getByText('Books');
    const statisticsLink = screen.getByText('Statistics');

    expect(homeLink).toBeInTheDocument();
    expect(gamesLink).toBeInTheDocument();
    expect(moviesLink).toBeInTheDocument();
    expect(booksLink).toBeInTheDocument();
    expect(statisticsLink).toBeInTheDocument();
  });

  it('checks the styles of an active link', () => {
    // Home link is the default active one
    const homeLink = screen.getByRole('link', {
      name: 'Home',
    });

    const computedStyles =
      window.getComputedStyle(homeLink);
    expect(computedStyles.backgroundColor).toBe(
      hexToRgb(colors.darkGunmetal)
    );
    expect(computedStyles.color).toBe(
      hexToRgb(colors.white)
    );
  });
});
