import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { GetEntertainmentOptions } from '../types';
import { Games } from '@/types';

export const getEntertainment = ({
  entertainmentType,
}: GetEntertainmentOptions): Promise<Games> => {
  return apiClient.get(
    `/entertainment/${entertainmentType}/popularGames`
  );
};

export const useEntertainmentPopular = ({
  entertainmentType,
}: GetEntertainmentOptions) => {
  const { data, isLoading } = useQuery<Games>({
    queryKey: [entertainmentType],
    queryFn: () =>
      getEntertainment({
        entertainmentType,
      }),
  });

  return { gamesData: data, isLoading };
};
