import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {useDebounce} from '../../../../shared/hooks';
import {Character, useCharacters} from '../../../../shared/api';
import {
  ScreenContainer,
  CharacterList,
  SearchAndFilterHeader,
} from '../../../../shared/comopnents';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {Status, Species} from '../../../../shared/api';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [inputValue, setInputValue] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status>(null);
  const [speciesFilter, setSpeciesFilter] = useState<Species>(null);

  const debouncedSearch = useDebounce(inputValue, 300);

  const {data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage} =
    useCharacters({
      name: debouncedSearch,
      status: statusFilter,
      species: speciesFilter,
    });

  const handleCharacterPress = (id: number) => {
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {id},
    });
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
          data={data?.pages.flatMap(
            (page: {results: Character[]}) => page.results,
          )}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          onCharacterPress={handleCharacterPress}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default CharacterListScreen;
