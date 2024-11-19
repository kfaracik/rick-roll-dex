import React from 'react';
import {View, Animated, StyleProp, ViewStyle, Image} from 'react-native';
import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import rickAndMorty from '../../../../shared/assets/images/rickAndMorty/rickAndMorty@3.webp'; // TODO: automatically select quality
import {Colors} from '../../../../shared/utils';
import {styles} from './RickAndMortyTabBar.styled';

export const RickAndMortyTabBar = (
  props: React.JSX.IntrinsicAttributes &
    BottomTabBarProps & {
      style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
      hideTabBar?: boolean;
    },
) => {
  const {state, hideTabBar} = props;

  return (
    <View style={styles.container}>
      {!hideTabBar && (
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
      )}

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
