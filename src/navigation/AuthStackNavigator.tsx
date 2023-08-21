import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {

    return (
        <AuthStack.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <AuthStack.Screen name="HomeStack" component={MainBottomTabNavigator} />
          <AuthStack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
          <AuthStack.Screen name="DeclineStatus" component={DeclineStatus} />
          <AuthStack.Screen name="DeclineThisRequest" component={DeclineThisRequest} />
          <AuthStack.Screen name="PaymentStatus" component={PaymentStatus} />
          <AuthStack.Screen name="RequestDetails" component={RequestDetails} /> */}
        </AuthStack.Navigator>
      );
}