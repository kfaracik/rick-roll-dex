import React from 'react';
import {View, Animated, StyleProp, ViewStyle} from 'react-native';
import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Colors} from '../../../../shared/utils';
import {styles} from './RickAndMortyTabBar.styled';
import {RickAndMortyFooter} from '../RickAndMortyFooter';
import {useKeyboard} from '../../../../shared/hooks';

export const RickAndMortyTabBar = (
  props: React.JSX.IntrinsicAttributes &
    BottomTabBarProps & {
      style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    },
) => {
  const {state} = props;
  const {keyboardShown} = useKeyboard();

  return (
    <View style={[styles.container, {height: keyboardShown ? 0 : 210}]}>
      <View>
        <BottomTabBar {...props} />
        <View style={styles.tabBarContainer}>
          {state.routes.map((route, index) => {
            const focused = state.index === index;
            return (
              <View
                key={route.key}
                style={[
                  styles.tabItem,
                  {
                    borderBottomColor: focused
                      ? Colors.white
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
      <RickAndMortyFooter />
    </View>
  );
};
