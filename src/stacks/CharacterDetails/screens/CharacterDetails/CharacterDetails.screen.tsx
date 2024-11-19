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
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {DATA} from '../../../../shared/api/mock';
import {RickAndMortyFooter} from '../../../TabNavigation/components';

type CharacterDetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const VERTICAL_MARGINS = 80;

const CharacterDetailsScreen = () => {
  const route = useRoute<CharacterDetailsRouteProp>();
  const {id} = route?.params;
  const {width: screenWidth} = useWindowDimensions();
  const width = screenWidth - VERTICAL_MARGINS;

  const onLikePress = () => {
    Alert.alert('TODO: implement');
  };

  const character = DATA.find(c => c.id === id); // TODO: mock add api

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
              title={'✩ ADD TO LIKED'}
              onPress={onLikePress}
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
