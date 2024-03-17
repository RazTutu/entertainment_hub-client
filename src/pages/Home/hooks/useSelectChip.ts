import { useState, useCallback } from 'react';
import { MOVIE_BOOKS_NOT_AVAILABLE } from './constants';

type ChipType = {
  games: boolean;
  movies: boolean;
  books: boolean;
};

export const useSelectChip = (initialState: ChipType) => {
  const [activeChip, setActiveChip] =
    useState(initialState);

  const toggleActiveChips = useCallback(
    (chipType: keyof ChipType) => {
      if (chipType === 'movies' || chipType === 'books') {
        alert(MOVIE_BOOKS_NOT_AVAILABLE);
        return;
      }
      setActiveChip((chip) => {
        return {
          ...chip,
          [chipType]: !chip[chipType],
        };
      });
    },
    []
  );

  return { activeChip, toggleActiveChips };
};

export default useSelectChip;
