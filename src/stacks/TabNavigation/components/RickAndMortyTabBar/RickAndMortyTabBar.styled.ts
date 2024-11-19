import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
  },
  tabItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
});
