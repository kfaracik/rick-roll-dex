import React from 'react';
import {Alert, GestureResponderEvent, Image, View} from 'react-native';
import {styles} from './CharacterItem.styled';
import {CategoryValueText, Button, Card} from '../../../../shared/comopnents';
import {Character} from '../../../../shared/api';

// TODO: create and use API type
type CharacterItemProps = Pick<
  Character,
  'name' | 'status' | 'species' | 'image'
> & {
  onPress: () => void;
};

export const CharacterItem = ({
  onPress,
  name,
  status,
  species,
  image,
}: CharacterItemProps) => {
  const onLikePress = (event: GestureResponderEvent | undefined) => {
    event?.stopPropagation();
    Alert.alert('TODO implement like logic');
  };

  return (
    <Card onPress={onPress}>
      <View style={styles.textContainer}>
        <CategoryValueText category="NAME" value={name} />
        <CategoryValueText category="STATUS" value={status} />
        <CategoryValueText category="SPECIES" value={species} />
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
