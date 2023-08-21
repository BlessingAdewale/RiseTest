import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const  RootStackNavigator = ()=> {

    return (
        <RootStack.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="HomeStack" component={MainBottomTabNavigator} />
          {/* <RootStack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
          <RootStack.Screen name="DeclineStatus" component={DeclineStatus} />
          <RootStack.Screen name="DeclineThisRequest" component={DeclineThisRequest} /> */}
         
        </RootStack.Navigator>
      );

}