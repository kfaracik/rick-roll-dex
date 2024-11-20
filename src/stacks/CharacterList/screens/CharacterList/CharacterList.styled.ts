import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    margin: 16,
    gap: 16,
  },
  title: {
    fontSize: 36,
  },
  filterCard: {
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
  },
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
  }
});
