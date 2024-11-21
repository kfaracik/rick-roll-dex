import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    color: Colors.mediumGreen,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
