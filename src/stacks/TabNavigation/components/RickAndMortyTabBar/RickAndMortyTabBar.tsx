import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import rickAndMorty from '../../../../shared/assets/images/rickAndMorty/rickAndMorty@3.webp'; // TODO: automatically select quality
import {Colors} from '../../../../shared/utils';
import {styles} from './RickAndMortyTabBar.styled';

export const RickAndMortyTabBar = (
  props: React.JSX.IntrinsicAttributes &
    BottomTabBarProps & {
      style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    },
) => {
  return (
    <View style={styles.container}>
      <BottomTabBar {...props} />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={rickAndMorty}
          style={styles.image}
        />
      </View>
    </View>
  );
};
