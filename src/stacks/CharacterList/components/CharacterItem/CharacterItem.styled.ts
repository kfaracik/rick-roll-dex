import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  card: {
    height: 224,
    borderRadius: 24,
    borderColor: Colors.primary,
    borderWidth: 1,
    overflow: 'hidden',
    marginHorizontal: 16,
    padding: 12,
  },
  image: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 24,
    right: 0,
    minWidth: 200,
    minHeight: 200,
  },
  content: {
    height: '100%',
    padding: 0,
    margin: 0,
  },
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    borderRadius: 24,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
