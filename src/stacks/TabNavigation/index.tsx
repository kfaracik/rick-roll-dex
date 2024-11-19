import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListStack} from '../CharacterList';
import {FavoriteCharactersStack} from '../FavoriteCharacters';
import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/utils';
import {RickAndMortyHeader, RickAndMortyTabBar} from './components';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  const hideTabBar = false; // TODO: add hiding for details screen

  return (
    <Tab.Navigator
      tabBar={props => (
        <RickAndMortyTabBar {...props} hideTabBar={hideTabBar} />
      )}
      screenOptions={{
        headerStyle: styles.header,
        headerTitle: () => <RickAndMortyHeader />,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.greyshGreen,
      }}>
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListStack}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersStack}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: 80,
  },

  tabBar: {
    backgroundColor: Colors.primary,
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '400',
  },
  tabBarIndicator: {
    backgroundColor: Colors.white,
    height: 4,
  },
});
