import React, {useMemo, useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAtom} from 'jotai';
import {favoriteCharactersAtom} from '../../../../shared/store/favoriteCharactersStore';
import {styles} from './FavoriteCharacters.styled';
import {
  CharacterList,
  ScreenContainer,
  SearchAndFilterHeader,
} from '../../../../shared/comopnents';
import {
  Character,
  Species,
  Status,
  useMultipleCharacters,
} from '../../../../shared/api';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';

const FavoriteCharactersScreen = () => {
  const [favoriteCharacters] = useAtom(favoriteCharactersAtom);
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [inputValue, setInputValue] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status>(null);
  const [speciesFilter, setSpeciesFilter] = useState<Species>(null);

  const {data = [], isLoading} = useMultipleCharacters({
    ids: favoriteCharacters,
  });

  const filteredCharacters = useMemo(() => {
    return data.filter((character: Character) => {
      const matchesName = character.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const matchesStatus = !statusFilter || character.status === statusFilter;
      const matchesSpecies =
        !speciesFilter || character.species === speciesFilter;

      return matchesName && matchesStatus && matchesSpecies;
    });
  }, [data, inputValue, statusFilter, speciesFilter]);

  const handleCharacterPress = (id: number) => {
    navigate('CharacterDetailsScreen', {id});
  };

  const handleApplyFilters = (status: Status, species: Species) => {
    setStatusFilter(status);
    setSpeciesFilter(species);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <SearchAndFilterHeader
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleApplyFilters={handleApplyFilters}
          clearInput={handleClearInput}
        />
        <CharacterList
          data={filteredCharacters}
          isLoading={isLoading}
          onCharacterPress={handleCharacterPress}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default FavoriteCharactersScreen;
