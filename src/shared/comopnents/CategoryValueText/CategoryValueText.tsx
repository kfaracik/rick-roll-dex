import {
  View,
  Text,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native';
import React from 'react';
import {styles} from './CategoryValueText.styled';

type CategoryValueTextProps = {
  category: string;
  value: string;
  style?: StyleProp<ViewStyle>;
  valueTextStyle?: StyleProp<TextStyle>;
};

export const CategoryValueText = ({
  category,
  value,
  style,
  valueTextStyle,
}: CategoryValueTextProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.categoryNameText}>{category}</Text>
      <Text style={[styles.valueText, valueTextStyle]}>{value}</Text>
    </View>
  );
};
