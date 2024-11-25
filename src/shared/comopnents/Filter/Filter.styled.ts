import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    marginTop: 8,
  },
  filterButton: {
    marginHorizontal: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  categoryName: {
    fontFamily: 'DMMono-Regular',
    color: Colors.mediumGreen,
    fontSize: 14,
  },
});
