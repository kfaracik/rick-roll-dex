import React from 'react';
import {Alert, GestureResponderEvent, Image, View} from 'react-native';
import {styles} from './CharacterItem.styled';
import {CategoryValueText, Button, Card} from '../../../../shared/comopnents';
import {Character} from '../../../../shared/api';
import {Colors} from '../../../../shared/utils';

type CharacterItemProps = Pick<
  Character,
  'name' | 'status' | 'species' | 'image'
> & {
  liked: boolean;
  onPress: () => void;
};

export const CharacterItem = ({
  onPress,
  liked,
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
    <Card onPress={onPress} contentStyle={styles.cardContent}>
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
          iconName={liked ? 'star' : 'staro'}
          iconColor={liked ? Colors.accent : Colors.primary}
          style={styles.likeButton}
        />
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </Card>
  );
};
