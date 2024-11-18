import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 24,
    width: 200,
    height: 200,
  },
  textContainer: {
    flex: 1,
  },
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    zIndex: 1,
  },
});
