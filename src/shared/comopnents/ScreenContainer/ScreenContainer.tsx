import React from 'react';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../utils';

type ScreenContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const ScreenContainer = ({children, style}: ScreenContainerProps) => {
  const {bottom} = useSafeAreaInsets();
  const BOTTOM_TAB_BAR_HEIGHT = 210;
  const paddingBottom = BOTTOM_TAB_BAR_HEIGHT + bottom;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingBottom: paddingBottom,
        },
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
