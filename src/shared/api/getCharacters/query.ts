import {useQuery} from 'react-query';
import {getCharacters} from './api';

export const useCharacters = (page = 1) => {
  return useQuery(['characters', page], () => getCharacters(page), {
    keepPreviousData: true,
    onError: error => {
      console.error('Error fetching characters:', error);
    },
  });
};
