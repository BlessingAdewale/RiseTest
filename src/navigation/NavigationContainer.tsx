import React from 'react';

import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

export const NavigationContainer = () => {
  return (
    <BaseNavigationContainer>
      {/* <RootStackNavigator /> */}
      <AuthStackNavigator />
    </BaseNavigationContainer>
  );
};
