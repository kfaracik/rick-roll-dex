import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
  },
  headerContainer: {
    paddingLeft: 16,
    paddingVertical: 24,
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: 12,
    color: Colors.mediumGreen,
    textDecorationLine: 'underline',
  },
});
