import React from 'react';
import {Text} from 'react-native';

type CharacterItemProps = {
  title: string;
};

export const CharacterItem = ({title}: CharacterItemProps) => {
  return <Text>{title}</Text>;
};
