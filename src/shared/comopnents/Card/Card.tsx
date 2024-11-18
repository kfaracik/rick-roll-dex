import React, {ReactNode} from 'react';
import {type StyleProp, type ViewStyle} from 'react-native';
import {Card as CardRNP} from 'react-native-paper';
import {styles} from './Card.styled';

type CardProps = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export const Card = ({onPress, style, children, contentStyle}: CardProps) => {
  return (
    <CardRNP onPress={onPress} style={[styles.card, style]}>
      <CardRNP.Content style={[styles.content, contentStyle]}>
        {children}
      </CardRNP.Content>
    </CardRNP>
  );
};
