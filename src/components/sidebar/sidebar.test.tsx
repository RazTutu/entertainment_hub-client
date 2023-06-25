import { render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe('Sidebar component', () => {
  it('renders sidebar title', () => {
    render(<Sidebar />);
    const titleElement = screen.getByText(
      'Entertainment Hub'
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Sidebar />);
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
