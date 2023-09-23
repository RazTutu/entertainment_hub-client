import { render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { theme } from '@/config/theme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Sidebar component', () => {
  it('renders sidebar title', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Sidebar
            fullSidebarActive={true}
            handleSetFullSidebar={() => null}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const titleElement = screen.getByText(
      'Entertainment Hub'
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Sidebar
            fullSidebarActive={true}
            handleSetFullSidebar={() => null}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
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
});
