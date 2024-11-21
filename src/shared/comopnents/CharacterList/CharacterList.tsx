import React, {useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Character} from '../../api';
import {styles} from './CharacterList.styled';
import {Text} from 'react-native-paper';
import {CharacterItem} from '../CharacterItem';

const ESTIMATED_ELEMENT_SIZE = 224;

type CharacterListProps = {
  data: any;
  isLoading: boolean;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  onCharacterPress: (id: number) => void;
};

export const CharacterList = ({
  data,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  onCharacterPress,
}: CharacterListProps) => {
  const handleLoadMore = () => {
    if (hasNextPage && fetchNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    return (
      <CharacterItem
        onPress={() => onCharacterPress(item.id)}
        name={item.name}
        status={item.status}
        species={item.species}
        image={item.image}
        id={item.id}
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
        <Text style={styles.noFavoritesText}>Character not found </Text>
      </View>
    );

  const keyExtractor = useCallback(
    (item: Character, i: number) => `${i}-${item.id}`,
    [],
  );

  return (
    <View style={styles.listContainer}>
      <FlashList
        data={data ?? []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        estimatedItemSize={ESTIMATED_ELEMENT_SIZE}
        ListHeaderComponentStyle={styles.listHeader}
        ListFooterComponent={footerComponent}
        ListEmptyComponent={emptyComponent}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
