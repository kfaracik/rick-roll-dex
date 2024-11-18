import React from 'react';
import {StyleSheet, type StyleProp, type ViewStyle} from 'react-native';
import {TextInput as RNTextInput, TextInputProps} from 'react-native-paper';
import {Colors} from '../../utils';
import {styles} from './Input.styled';

type InputProps = TextInputProps & {
  hint: string;
  clearInput: () => void;
};

export const Input = ({hint, clearInput, ...rest}: InputProps) => {
  return (
    <RNTextInput
      {...rest}
      mode="outlined"
      placeholder={hint}
      outlineStyle={styles.outline}
      activeOutlineColor={Colors.primary}
      outlineColor={Colors.primary}
      placeholderTextColor={Colors.mediumGreen}
      cursorColor={Colors.primary}
    />
  );
};
