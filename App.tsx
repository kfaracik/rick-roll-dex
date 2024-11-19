import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MainStack} from './src/stacks/Main';

function App() {
  const queryClient = new QueryClient(); // TODO: config

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
