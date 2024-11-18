import React from 'react';
import {Alert, GestureResponderEvent, Image, View} from 'react-native';
import {Card} from 'react-native-paper';
import {styles} from './CharacterItem.styled';
import {CategoryValueText, Button} from '../../../../shared/comopnents';

type CharacterItemProps = {
  onPress: () => void;
  name: string;
  status: string;
  species: string;
  image: string;
};

export const CharacterItem = ({
  onPress,
  name,
  status,
  species,
  image,
}: CharacterItemProps) => {
  const onLikePress = (event: GestureResponderEvent) => {
    event.stopPropagation();
    Alert.alert('TODO implement');
  };

  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.textContainer}>
          <CategoryValueText category="Name" value={name} />
          <CategoryValueText category="Status" value={status} />
          <CategoryValueText category="Species" value={species} />
        </View>
        <View>
          <Button
            title="Like"
            onPress={onLikePress}
            mode="white"
            showStarIcon
            style={styles.likeButton}
          />
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </Card.Content>
    </Card>
  );
};
