import React from 'react';
import {Text, Button as ButtonRNP} from 'react-native-paper';
import {GestureResponderEvent, type StyleProp, type ViewStyle} from 'react-native';
import {Colors} from '../../utils';
import {styles} from './Button.styled';

type ButtonMode = 'primary' | 'white';

type ButtonProps = {
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
  mode: ButtonMode;
  showStarIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  onPress,
  title,
  mode,
  showStarIcon = false,
  style,
}: ButtonProps) => {
  const buttonStyle =
    mode === 'primary'
      ? {
          backgroundColor: Colors.primary,
          rippleColor: Colors.darkGreen,
        }
      : {
          backgroundColor: Colors.white,
          rippleColor: Colors.greyshGreen,
        };

  return (
    <ButtonRNP
      onPress={onPress}
      icon={showStarIcon ? 'star' : undefined} // TODO: fix icon
      mode="contained"
      style={[styles.button, buttonStyle, style]}
      uppercase={true}
      rippleColor={buttonStyle.rippleColor}>
      <Text style={mode === 'primary' ? styles.textPrimary : styles.textWhite}>
        {title}
      </Text>
    </ButtonRNP>
  );
};
