import {Image} from 'react-native';
import React from 'react';
import rickAndMorty from '../../../../shared/assets/images/rickAndMorty/rickAndMorty.webp';
import {styles} from './RickAndMortyHeader.styles';

export const RickAndMortyHeader = () => {
  return (
    <Image
      resizeMode="contain"
      source={rickAndMorty}
      style={styles.headerImage}
    />
  );
};
