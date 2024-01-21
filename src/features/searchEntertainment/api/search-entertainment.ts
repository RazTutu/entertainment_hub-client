import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { GetEntertainmentOptions } from '../types';
import { Games } from '@/types';

export const getEntertainmentByName = ({
  entertainmentType,
  entertainmentName,
}: GetEntertainmentOptions): Promise<Games> => {
  return apiClient.get(
    `/entertainment/${entertainmentType}/gameByName?gameName=${entertainmentName}`
  );
};

export const useEntertainmentByName = ({
  entertainmentType,
  entertainmentName,
}: GetEntertainmentOptions) => {
  const { data, isLoading, refetch } = useQuery<Games>({
    queryKey: [
      entertainmentType,
      'searchByName',
      entertainmentName,
    ],
    queryFn: () =>
      getEntertainmentByName({
        entertainmentType,
        entertainmentName,
      }),
    enabled: false,
  });

  return {
    gamesData: data,
    isLoading,
    refetchSearchByName: refetch,
  };
};
