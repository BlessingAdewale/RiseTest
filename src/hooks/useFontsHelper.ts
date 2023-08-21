import { useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export const useFontsHelper = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
        
        
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function removeSplashScreen() {
      if (appIsReady) await SplashScreen.hideAsync();
    }
    removeSplashScreen();
  }, [appIsReady]);

  return { appIsReady };
};
