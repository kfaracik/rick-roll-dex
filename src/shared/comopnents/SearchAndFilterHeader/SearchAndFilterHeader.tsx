import React from 'react';
import {View, Text} from 'react-native';
import type {Species, Status} from '../../api';
import {Input} from '../Input';
import {Filter} from '../Filter';
import {styles} from './SearchAndFilterHeader.styled';

type SearchAndFilterHeaderProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleApplyFilters: (status: Status, species: Species) => void;
  clearInput: () => void;
};

export const SearchAndFilterHeader = ({
  inputValue,
  setInputValue,
  handleApplyFilters,
  clearInput,
}: SearchAndFilterHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Characters</Text>
      <Input
        hint="Search the characters"
        value={inputValue}
        onChangeText={setInputValue}
        clearInput={clearInput}
      />
      <Filter onApplyFilters={handleApplyFilters} />
    </View>
  );
};
