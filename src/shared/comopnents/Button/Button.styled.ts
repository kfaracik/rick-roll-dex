import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignSelf: 'flex-start',
    height: 34,
  },
  buttonContent: {
    margin: -6,
  },
  textPrimary: {
    color: Colors.white,
    fontSize: 14,
  },
  textWhite: {
    color: Colors.primary,
    fontSize: 14,
  },
});
