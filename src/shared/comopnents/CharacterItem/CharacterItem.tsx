import React from 'react';
import {GestureResponderEvent, Image, View} from 'react-native';
import {useAtom} from 'jotai';
import {styles} from './CharacterItem.styled';
import {CategoryValueText, Button, Card} from '..';
import {Character} from '../../api';
import {Colors} from '../../utils';
import {favoriteCharactersAtom} from '../../store/favoriteCharactersStore';

type CharacterItemProps = Pick<
  Character,
  'id' | 'name' | 'status' | 'species' | 'image'
> & {
  onPress: () => void;
};

export const CharacterItem = ({
  id,
  name,
  status,
  species,
  image,
  onPress,
}: CharacterItemProps) => {
  const [favorites, setFavorites] = useAtom(favoriteCharactersAtom);

  const liked = favorites.includes(id);

  const onLikePress = (event: GestureResponderEvent | undefined) => {
    event?.stopPropagation();
    setFavorites(prev =>
      liked ? prev.filter(favId => favId !== id) : [...prev, id],
    );
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
          title={'Like'}
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
