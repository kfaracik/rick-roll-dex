import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  separator: {
    height: 24,
  },
  listHeader: {
    height: 16,
  },
  listFooter: {
    height: 32,
  },
  noDataContainer: {
    margin: 16,
    justifyContent: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    color: Colors.mediumGreen,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
