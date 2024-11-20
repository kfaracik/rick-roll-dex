import {useQuery} from '@tanstack/react-query';
import {getSingleCharacter} from './api';
import type {GetSingleCharacter} from '../types';

export const useSingleCharacter = ({id}: GetSingleCharacter) => {
  console.log('Query one character');
  return useQuery({
    queryKey: ['singleCharacter', id],
    queryFn: () =>
      getSingleCharacter({
        id,
      }),
    staleTime: 1000 * 60, // 1 minute
  });
};
