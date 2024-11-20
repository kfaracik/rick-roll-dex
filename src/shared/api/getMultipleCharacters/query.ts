import {useQuery} from '@tanstack/react-query';
import {getMultipleCharacters} from './api';
import type {GetMultipleCharacters} from '../types';

export const useMultipleCharacters = ({ids}: GetMultipleCharacters) => {
  return useQuery({
    queryKey: ['characters', ids],
    queryFn: () => getMultipleCharacters({ids}),
    staleTime: 1000 * 60, // 1 minute
    enabled: !!ids?.length,
  });
};
