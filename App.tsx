import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TabNavigationStack} from './src/stacks/TabNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';

function App() {
  const queryClient = new QueryClient(); // TODO: config

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <TabNavigationStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
