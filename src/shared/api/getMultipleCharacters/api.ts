import apiClient from '../config';
import type {GetMultipleCharacters} from '../types';

export const getMultipleCharacters = async ({ids}: GetMultipleCharacters) => {
  const response = await apiClient.get(`/character/${ids}`);

  return response.data;
};
