import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {Card as CardRNP} from 'react-native-paper';
import {styles} from './Card.styled';

type CardProps = {
  onPress?: () => void;
  style?: ViewStyle;
  children: ReactNode;
};

export const Card = ({onPress, style, children}: CardProps) => {
  return (
    <CardRNP onPress={onPress} style={[styles.card, style]}>
      <CardRNP.Content style={styles.content}>{children}</CardRNP.Content>
    </CardRNP>
  );
};
