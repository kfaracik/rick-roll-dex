import React, {type ReactNode} from 'react';
import {type ViewProps} from 'react-native';
import Animated, {
  type AnimatedProps,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

type AnimatedViewBasicProps = {
  children: ReactNode;
  duration?: number;
  disableAnimation?: boolean;
} & AnimatedProps<ViewProps>;

export const BASIC_ANIMATION_DURATION_MS = 300;

export const AnimatedViewBasic = ({
  children,
  duration = BASIC_ANIMATION_DURATION_MS,
  disableAnimation = false,
  ...rest
}: AnimatedViewBasicProps) => {
  return (
    <Animated.View
      entering={disableAnimation ? undefined : FadeIn.duration(duration)}
      exiting={disableAnimation ? undefined : FadeOut.duration(duration)}
      {...rest}>
      {children}
    </Animated.View>
  );
};
