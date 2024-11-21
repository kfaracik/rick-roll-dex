import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 24,
    backgroundColor: Colors.white,
  },
  content: {
    gap: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 64,
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  tile: {
    fontSize: 36,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
  },
  button: {
    width: '100%',
  },
});
