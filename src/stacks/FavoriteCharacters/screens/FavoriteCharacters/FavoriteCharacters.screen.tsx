import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './FavoriteCharacters.styled';
import {ScreenContainer} from '../../../../shared/comopnents';

const FavoriteCharactersScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text>Implement FavoriteCharactersScreen</Text>
      </View>
    </ScreenContainer>
  );
};

export default FavoriteCharactersScreen;
