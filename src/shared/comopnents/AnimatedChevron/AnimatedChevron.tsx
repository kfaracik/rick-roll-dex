import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {type IconButtonProps} from 'react-native-paper';
import {Colors} from '../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './AniamtedChevron.styled';

export type AnimatedChevronProps = {
  isOpen: boolean;
  accessibilityLabel: IconButtonProps['accessibilityLabel'];
  animationDuration?: number;
} & Partial<IconButtonProps>;

export const AnimatedChevron = memo(
  ({
    isOpen,
    accessibilityLabel,
    animationDuration = 150,
    ...rest
  }: AnimatedChevronProps) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    useEffect(() => {
      Animated.timing(spinValue, {
        toValue: isOpen ? 1 : 0,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, [animationDuration, isOpen, spinValue]);

    return (
      <Animated.View
        style={[styles.animationContainer, {transform: [{rotate: spin}]}]}>
        <Icon name={'down'} size={10} color={Colors.white} />
      </Animated.View>
    );
  },
);
