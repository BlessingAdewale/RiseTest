import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { MainBottomTabNavigator } from './MainBottomTabNavigator';
import {
  ChooseFromPlans,
  CreateAPlan,
  DoneCreatingPlan,
  FundWallet,
  GoalName,
  Review,
  SelectBank,
  TargetAmount,
  TargetDate,
  ViewPlan,
} from '@screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Review"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="HomeStack" component={MainBottomTabNavigator} />
      <RootStack.Screen name="CreateAPlan" component={CreateAPlan} />
      <RootStack.Screen name="DoneCreatingPlan" component={DoneCreatingPlan} />
      <RootStack.Screen name="GoalName" component={GoalName} />
      <RootStack.Screen name="TargetAmount" component={TargetAmount} />
      <RootStack.Screen name="TargetDate" component={TargetDate} />
      <RootStack.Screen name="ViewPlan" component={ViewPlan} />
      <RootStack.Screen name="Review" component={Review} />
      <RootStack.Screen name="ChooseFromPlans" component={ChooseFromPlans} />
      <RootStack.Screen name="FundWallet" component={FundWallet} />
      <RootStack.Screen name="SelectBank" component={SelectBank} />
    </RootStack.Navigator>
  );
};
