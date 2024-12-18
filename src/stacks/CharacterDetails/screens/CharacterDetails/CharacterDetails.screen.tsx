import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {styles} from './CharacterDetails.styled';
import {Button, Card, CategoryValueText} from '../../../../shared/comopnents';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RickAndMortyFooter} from '../../../TabNavigation/components';
import {Colors} from '../../../../shared/utils';
import {useSingleCharacter} from '../../../../shared/api';
import {ActivityIndicator} from 'react-native-paper';
import {useAtom} from 'jotai';
import {favoriteCharactersAtom} from '../../../../shared/store/favoriteCharactersStore';
import {MainStackParamList} from '../../../Main/Main.routes';

type CharacterDetailsRouteProp = RouteProp<
  MainStackParamList,
  'CharacterDetailsScreen'
>;
const VERTICAL_MARGINS = 80;

const CharacterDetailsScreen = () => {
  const route = useRoute<CharacterDetailsRouteProp>();
  const {id} = route?.params;
  const {width: screenWidth} = useWindowDimensions();
  const width = screenWidth - VERTICAL_MARGINS;

  const [favorites, setFavorites] = useAtom(favoriteCharactersAtom);

  const liked = favorites.includes(id);

  const onLikePress = () => {
    setFavorites(prev =>
      liked ? prev.filter(favId => favId !== id) : [...prev, id],
    );
  };

  const {data: character, isLoading} = useSingleCharacter({id});

  if (isLoading) {
    return (
      <Card style={styles.card} contentStyle={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </Card>
    );
  }

  if (!character) {
    return (
      <Card style={styles.card} contentStyle={styles.content}>
        <Text>Character not found</Text>
      </Card>
    );
  }

  return (
    <>
      <ScrollView>
        <Card style={styles.card} contentStyle={styles.content}>
          <Image
            source={{uri: character.image}}
            style={[styles.image, {height: width, width}]}
          />
          <CategoryValueText
            category={'NAME'}
            value={character.name}
            valueTextStyle={styles.tile}
          />
          <View style={styles.row}>
            <CategoryValueText
              category={'STATUS'}
              value={character.status}
              style={styles.item}
            />
            <CategoryValueText
              category={'ORIGIN'}
              value={character.origin.name}
              style={styles.item}
            />
          </View>
          <View style={styles.row}>
            <CategoryValueText
              category={'SPECIES'}
              value={character.species}
              style={styles.item}
            />
            <CategoryValueText
              category={'GENDER'}
              value={character.gender}
              style={styles.item}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={liked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
              onPress={onLikePress}
              iconName={liked ? 'star' : 'staro'}
              iconColor={liked ? Colors.accent : Colors.white}
              mode={'primary'}
              style={styles.button}
            />
          </View>
        </Card>
      </ScrollView>
      <RickAndMortyFooter />
    </>
  );
};

export default CharacterDetailsScreen;
