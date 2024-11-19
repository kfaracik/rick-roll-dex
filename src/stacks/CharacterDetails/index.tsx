import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import {Header} from './components';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};
