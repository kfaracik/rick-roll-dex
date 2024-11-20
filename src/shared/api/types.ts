export type Status = string | null | undefined;

export type Species = Character['species'] | null | undefined;

export type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {name: string; url: string};
  location: {name: string; url: string};
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type GetCharacters = {
  page?: number;
  name?: string;
  search?: string;
  status?: Status;
  species?: Species;
};

export type GetSingleCharacter = {
  id: number;
};
