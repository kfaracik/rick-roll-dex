import {atom} from 'jotai';
import {atomWithMmkvArrayStorage} from './atomWithMmkvStorage';

const FAVORITE_CHARACTERS_KEY = 'favoriteCharacters';

export const favoriteCharactersAtom = atomWithMmkvArrayStorage<number>(
  FAVORITE_CHARACTERS_KEY,
  [],
);

export const addFavoriteCharacter = atom(null, (get, set, id: number) => {
  const currentFavorites = get(favoriteCharactersAtom);
  if (!currentFavorites.includes(id)) {
    set(favoriteCharactersAtom, [...currentFavorites, id]);
  }
});

export const removeFavoriteCharacter = atom(null, (get, set, id: number) => {
  const currentFavorites = get(favoriteCharactersAtom);
  set(
    favoriteCharactersAtom,
    currentFavorites.filter(favoriteId => favoriteId !== id),
  );
});

export const getFavoriteCharacters = atom(get => get(favoriteCharactersAtom));
