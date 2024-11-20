import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterItem} from '../../components';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Character, useCharacters} from '../../../../shared/api';
import {
  Button,
  Card,
  Input,
  ScreenContainer,
} from '../../../../shared/comopnents';
import {DATA} from '../../../../shared/api/mock';
import {MainStackNavigationProp} from '../../../Main/Main.routes';

const ESTIMATED_ELEMENT_HEIGHT = 224;

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [filterOptionsExpanded, setFilterOptionsExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const onClearInputPress = () => setInputValue('');

  const {data, isLoading} = useCharacters(page);

  const handleLoadMore = () => {
    if (!loadingMore && data?.info?.next) {
      setLoadingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (data && data.results) {
      setLoadingMore(false);
    }
  }, [data]);

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
      />
    );
  };

  const onFilterPress = () => {
    setFilterOptionsExpanded(prevState => !prevState);
  };

  const itemSeparator = () => <View style={styles.separator} />;

  const footerComponent = () =>
    loadingMore || isLoading ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={styles.listFooter} />
    );

  const emptyComponent = () => (
    <View>
      <Text>No data</Text>
    </View>
  );

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Characters</Text>
          <Input hint="Search the characters" clearInput={onClearInputPress} />
          <Button title={'FILTER'} onPress={onFilterPress} mode={'primary'} />
          {filterOptionsExpanded ? (
            <Card>
              <Text>TODO: Implement filters</Text>
            </Card>
          ) : null}
        </View>
        <View style={styles.listContainer}>
          <FlashList
            data={DATA} // TODO: replace with data={data?.results}
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
