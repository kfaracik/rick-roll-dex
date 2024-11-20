import apiClient from '../config';
import type {GetSingleCharacter} from '../types';

export const getSingleCharacter = async ({id}: GetSingleCharacter) => {
  const response = await apiClient.get(`/character/${id}`);

  return response.data;
};
