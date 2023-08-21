import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from './types';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();
export const MainBottomTabNavigator = ()=> {

    return (
        <MainBottomTab.Navigator
        backBehavior="history"
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: '#5F5F61',
          tabBarStyle: {
            position: 'absolute',
            borderTopColor: 'rgba(0, 0, 0, 0.048)',
            backgroundColor: '#FFFFFF',
            height: layout.heightPixel(90),
          },
          tabBarLabelStyle: {
            fontFamily: 'Poppins_500Medium',
            fontSize: layout.fontPixel(12),
            color: theme.colors.secondary,
          },
          tabBarItemStyle: {
            marginBottom: layout.pixelSizeVertical(20),
            marginTop: layout.pixelSizeVertical(17),
          },
        }}
      >
        <MainBottomTab.Screen
          name="Home"
          component={Activities}
          options={{
            tabBarIcon: ({ focused, color }) => (

            ),
          }}
        />
        <MainBottomTab.Screen
          name="Plans"
          component={Beneficiary}
          options={{
            tabBarIcon: ({ focused, color }) => (

            ),
          }}
        />

        <MainBottomTab.Screen
          name="Wallet"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
       
            ),
          }}
        />
        <MainBottomTab.Screen
          name="Feed"
          component={ReferAFriend}
          options={{
            tabBarIcon: ({ focused, color }) => (
        
            ),
          }}
        />
        <MainBottomTab.Screen
          name="Account"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color }) => (

            ),
          }}
        />
      </MainBottomTab.Navigator>

    )
}