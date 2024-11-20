import React, {ReactNode} from 'react';
import {Text, Button as ButtonRNP} from 'react-native-paper';
import {
  GestureResponderEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {Colors} from '../../utils';
import {styles} from './Button.styled';
import Icon from 'react-native-vector-icons/AntDesign';
import {ColorValue} from 'react-native';

type ButtonMode = 'primary' | 'white';

type ButtonProps = {
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
  mode: ButtonMode;
  children?: ReactNode;
  iconName?: string;
  iconColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  onPress,
  title,
  children,
  mode,
  iconName,
  iconColor = Colors.primary,
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
      icon={
        iconName
          ? () => <Icon name={iconName} size={16} color={iconColor} />
          : undefined
      }
      mode="contained"
      style={[styles.button, buttonStyle, style]}
      uppercase={true}
      contentStyle={styles.buttonContent}
      rippleColor={buttonStyle.rippleColor}>
      <Text style={mode === 'primary' ? styles.textPrimary : styles.textWhite}>
        {title}
        {children}
      </Text>
    </ButtonRNP>
  );
};
