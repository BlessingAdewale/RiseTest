import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import {
  ConfirmPin,
  CreateAnAccount,
  CreatePin,
  DoneCreatingPin,
  DoneRegistering,
  Onboarding,
  SignIn,
  TellUsMoreAboutYou,
} from '@screens';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="CreatePin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="CreateAnAccount" component={CreateAnAccount} />
      <AuthStack.Screen name="DoneRegistering" component={DoneRegistering} />
      <AuthStack.Screen name="TellUsMoreAboutYou" component={TellUsMoreAboutYou} />
      <AuthStack.Screen name="ConfirmPin" component={ConfirmPin} />
      <AuthStack.Screen name="CreatePin" component={CreatePin} />
      <AuthStack.Screen name="DoneCreatingPin" component={DoneCreatingPin} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};
