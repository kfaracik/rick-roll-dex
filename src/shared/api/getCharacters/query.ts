import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from './api';

export const useCharacters = (searchQuery: string) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['characters', searchQuery],
    queryFn: ({pageParam}) => getCharacters(pageParam, searchQuery),
    getNextPageParam: lastPage => {
      return lastPage?.info?.next || undefined;
    },
    staleTime: 1000 * 60, // 1 minute
  });
};
