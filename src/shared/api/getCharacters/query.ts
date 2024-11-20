import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from './api';
import type {Species, Status} from '../types';

export const useCharacters = (
  searchQuery: string,
  status: Status,
  species: Species,
) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['characters', searchQuery, status, species],
    queryFn: ({pageParam}) =>
      getCharacters(pageParam, searchQuery, status, species),
    getNextPageParam: lastPage => {
      return lastPage?.info?.next || undefined;
    },
    staleTime: 1000 * 60, // 1 minute
  });
};
