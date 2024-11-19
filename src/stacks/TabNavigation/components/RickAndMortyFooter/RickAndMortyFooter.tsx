import {View, Image} from 'react-native';
import React from 'react';
import rickAndMorty from '../../../../shared/assets/images/rickAndMorty/rickAndMorty@3.webp'; // TODO: automatically select quality
import {styles} from './RickAndMortyFooter.styles';

export const RickAndMortyFooter = () => {
  return (
    <View style={styles.imageContainer}>
      <Image resizeMode="contain" source={rickAndMorty} style={styles.image} />
    </View>
  );
};
