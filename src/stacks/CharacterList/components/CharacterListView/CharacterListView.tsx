import React from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {CharacterItem} from '../CharacterItem';
import {styles} from './CharacterListView.styled';

type CharacterListViewProps = {};

export const CharacterListView = ({}: CharacterListViewProps) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={[]}
        renderItem={({item}) => <CharacterItem title={item} />}
        estimatedItemSize={200}
      />
    </View>
  );
};
