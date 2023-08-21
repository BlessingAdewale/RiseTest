import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from './src/navigation/NavigationContainer';
import { useFontsHelper } from '@hooks';

import { StatusBar } from 'expo-status-bar';

function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <PaperProvider>
      <StatusBar style="auto" />
        <NavigationContainer />
      </PaperProvider>
    </>
  );
}

export default App;
