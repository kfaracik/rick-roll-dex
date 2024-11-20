import apiClient from '../config';
import type {Species, Status} from '../types';

export const getCharacters = async (
  page = 1,
  searchQuery = '',
  status: Status = null,
  species: Species = null,
) => {
  const response = await apiClient.get('/character', {
    params: {
      page,
      name: searchQuery,
      status,
      species,
    },
  });

  return response.data;
};
