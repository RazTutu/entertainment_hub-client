import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { GetMediaOptions } from '../types';

export const getMedia = ({
  mediaType,
  searchedKeyword,
}: GetMediaOptions): Promise<any> => {
  // replace any with type of data returned
  return apiClient.get(
    `/media/${mediaType}/${searchedKeyword}`
  );
};

export const useMedia = ({
  mediaType,
  searchedKeyword = '',
}: GetMediaOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: [mediaType, searchedKeyword],
    queryFn: () =>
      getMedia({ mediaType, searchedKeyword }),
  });

  return { data, isLoading };
};
