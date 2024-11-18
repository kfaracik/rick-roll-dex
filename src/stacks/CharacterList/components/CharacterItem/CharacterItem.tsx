import React from 'react';
import {Alert, GestureResponderEvent, Image, View} from 'react-native';
import {styles} from './CharacterItem.styled';
import {CategoryValueText, Button, Card} from '../../../../shared/comopnents';

// TODO: create and use API type
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
    <Card onPress={onPress}>
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
    </Card>
  );
};
