import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  card: {
    minHeight: 224,
    borderRadius: 24,
    borderColor: Colors.primary,
    borderWidth: 1,
    overflow: 'hidden',
    marginHorizontal: 16,
    padding: 12,
    margin: 0,
    borderBottomWidth: 5, // TODO: tmp shadow
    borderRightWidth: 5, // TODO: tmp shadow
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
    paddingHorizontal: 0,
    paddingVertical: 0,
    margin: 0,
  },
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
