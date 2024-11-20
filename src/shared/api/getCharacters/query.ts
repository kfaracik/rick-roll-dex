import { useInfiniteQuery } from '@tanstack/react-query';
import { getCharacters } from './api';

export const useCharacters = (searchQuery: string) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['characters', searchQuery],
    queryFn: ({ pageParam = 1 }) => getCharacters(pageParam, searchQuery),
    getNextPageParam: (lastPage) => {
      if (lastPage?.info?.next) {
        return lastPage.info.next.page;
      }
      return undefined;
    },
    staleTime: 1000 * 60, // 1 minute
  });
};
