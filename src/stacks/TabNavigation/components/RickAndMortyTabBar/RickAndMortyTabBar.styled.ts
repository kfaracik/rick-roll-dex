import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: Colors.primary,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 92,
  },
});
