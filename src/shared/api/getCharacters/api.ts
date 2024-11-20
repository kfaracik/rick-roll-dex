import apiClient from '../config';
import type {GetCharacters} from '../types';

export const getCharacters = async ({
  page = 1,
  name = '',
  status = null,
  species = null,
}: GetCharacters) => {
  const response = await apiClient.get('/character', {
    params: {
      page,
      name,
      status,
      species,
    },
  });

  return response.data;
};
