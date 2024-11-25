import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from './api';
import type {GetCharacters} from '../types';

export const useCharacters = ({
  name = '',
  status = null,
  species = null,
}: Partial<GetCharacters>) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['characters', name, status, species],
    queryFn: ({pageParam: page}) =>
      getCharacters({
        page,
        name,
        status,
        species,
      }),
    getNextPageParam: lastPage => {
      return lastPage?.info?.next
        ? parseInt(lastPage.info.next.split('=')[1], 10)
        : undefined;
    },
    staleTime: 1000 * 60, // 1 minute
  });
};
