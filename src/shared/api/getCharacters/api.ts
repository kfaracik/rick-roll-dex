import apiClient from '../config';

export const getCharacters = async (page = 1) => {
  try {
    const response = await apiClient.get(`/character?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};
