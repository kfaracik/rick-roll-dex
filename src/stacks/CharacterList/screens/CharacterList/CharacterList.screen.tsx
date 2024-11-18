import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import {CharacterItem} from '../../components';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {Character} from '../../../../shared/api';

const ESTIMATED_ELEMENT_HEIGHT = 224;

const CharacterListScreen = () => {
  const {navigate} = useNavigation<CharacterListStackNavigationProp>();
  const DATA: Character[] = [];

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    const onCharacterPress = () => {
      navigate('CharacterDetailsStack', {
        screen: 'CharacterDetailsScreen',
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

  return (
    <View style={styles.container}>
      <Text>Characters</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={ESTIMATED_ELEMENT_HEIGHT}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default CharacterListScreen;
