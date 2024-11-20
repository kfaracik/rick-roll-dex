import apiClient from '../config';

export const getCharacters = async (page = 1, searchQuery = '') => {
  const response = await apiClient.get(`/character`, {
    params: {
      page,
      name: searchQuery,
    },
  });

  return response.data;
};
