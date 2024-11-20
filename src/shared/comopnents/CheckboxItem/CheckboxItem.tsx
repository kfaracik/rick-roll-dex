import React from 'react';
import {Checkbox} from 'react-native-paper';
import {Colors} from '../../utils';
import { Species, Status } from '../../api';

type CheckboxItemProps = {
  label: string;
  value: string;
  status: Status | Species | null;
  onPress: (value: string) => void;
};

export const CheckboxItem = ({
  label,
  value,
  status,
  onPress,
}: CheckboxItemProps) => {
  return (
    <Checkbox.Item
      label={label}
      color={Colors.primary}
      uncheckedColor={Colors.greyshGreen}
      style={{flexDirection: 'row-reverse'}}
      labelStyle={{color: Colors.primary}}
      status={status === value ? 'checked' : 'unchecked'}
      onPress={() => onPress(value)}
    />
  );
};
