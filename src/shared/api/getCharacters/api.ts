import apiClient from '../config';

export const getCharacters = async (page = 1, searchQuery = '') => {
  try {
    const response = await apiClient.get(`/character`, {
      params: {
        page,
        name: searchQuery,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};
