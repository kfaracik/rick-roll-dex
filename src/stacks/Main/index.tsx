import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackRoutes} from './Main.routes';
import {CharacterDetailsScreen} from '../CharacterDetails/screens';
import {Header} from '../CharacterDetails/components';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsScreen}
        component={CharacterDetailsScreen}
        options={{
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  );
};
