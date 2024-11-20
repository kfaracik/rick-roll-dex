import React from 'react';
import {
  TextInput as RNTextInput,
  TextInput,
  TextInputProps,
} from 'react-native-paper';
import {Colors} from '../../utils';
import {styles} from './Input.styled';
import Icon from 'react-native-vector-icons/AntDesign';

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
      autoCorrect={false}
      inputMode="search"
      style={styles.input}
      left={
        <TextInput.Icon
          disabled
          icon={() => <Icon name="search1" size={20} color={Colors.primary} />}
        />
      }
      right={
        rest?.value ? (
          <TextInput.Icon
            icon={() => (
              <Icon
                name="close"
                size={20}
                color={Colors.primary}
                onPress={clearInput}
              />
            )}
          />
        ) : null
      }
    />
  );
};
