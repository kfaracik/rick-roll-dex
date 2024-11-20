import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterItem, Filter} from '../../components';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Character} from '../../../../shared/api';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useDebounce} from '../../../../shared/hooks';
import {useCharacters} from '../../../../shared/api';
import {ScreenContainer, Input} from '../../../../shared/comopnents';

const ESTIMATED_ELEMENT_HEIGHT = 224;

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [inputValue, setInputValue] = useState('');
  const debouncedSearch = useDebounce(inputValue, 300);
  const listRef = useRef(null);

  const {data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage} =
    useCharacters(debouncedSearch);

  const handleLoadMore = () => {
    if (hasNextPage) {
      void fetchNextPage();
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    const onCharacterPress = () => {
      navigate('CharacterDetailsStack', {
        screen: 'CharacterDetailsScreen',
        params: {id: item.id},
      });
    };

    return (
      <CharacterItem
        onPress={onCharacterPress}
        name={item.name}
        status={item.status}
        species={item.species}
        image={item.image}
        liked={false}
      />
    );
  };

  const itemSeparator = () => <View style={styles.separator} />;

  const footerComponent = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={styles.listFooter} />
    );

  const emptyComponent = () =>
    isLoading && !isFetchingNextPage ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={styles.noDataContainer}>
        <Text>No characters found</Text>
      </View>
    );

  const handleApplyFilters = (
    status: string | null, // TODO: create type
    species: string | null, // TODO: create type
  ) => {
    // TODO: implement
  };

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Characters</Text>
          <Input
            hint="Search the characters"
            value={inputValue}
            onChangeText={(text: string) => setInputValue(text)}
            clearInput={() => setInputValue('')}
          />
          <Filter onApplyFilters={handleApplyFilters} />
        </View>
        <View style={styles.listContainer}>
          <FlashList
            ref={listRef}
            data={data?.pages.flatMap(page => page.results) ?? []}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            estimatedItemSize={ESTIMATED_ELEMENT_HEIGHT}
            ListHeaderComponentStyle={styles.listHeader}
            ListFooterComponent={footerComponent}
            ListEmptyComponent={emptyComponent}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default CharacterListScreen;
