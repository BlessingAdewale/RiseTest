import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from './src/navigation/NavigationContainer';
import { useFontsHelper } from '@hooks';
import { Provider as ReduxProvider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



import { store } from '@state';

import { StatusBar } from 'expo-status-bar';
const queryClient = new QueryClient()

function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
     <QueryClientProvider client={queryClient}>
       <ReduxProvider store={store}>
      <PaperProvider>
      <StatusBar style="auto" />
        <NavigationContainer />
      </PaperProvider>
      </ReduxProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
