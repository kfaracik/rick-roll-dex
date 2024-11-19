import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../utils';

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const ScreenContainer = ({children, style}: ScreenContainerProps) => {
  const insets = useSafeAreaInsets(); // TODO: fix

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
