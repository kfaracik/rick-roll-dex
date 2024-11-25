import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/utils';
import {RickAndMortyHeader, RickAndMortyTabBar} from './components';
import {CharacterListScreen} from '../CharacterList/screens';
import {FavoriteCharactersScreen} from '../FavoriteCharacters/screens';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <RickAndMortyTabBar {...props} />}
      screenOptions={{
        headerStyle: styles.header,
        headerTitle: () => <RickAndMortyHeader />,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.greyshGreen,
        animation: 'shift',
      }}>
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color}) => (
            <IconFontAwesome name={'user'} size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color}) => (
            <Icon name={'star'} size={16} color={color} />
          ),
        }}
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
    fontFamily: 'DMMono-Regular',
  },
  tabBarIndicator: {
    backgroundColor: Colors.white,
    height: 4,
  },
});
