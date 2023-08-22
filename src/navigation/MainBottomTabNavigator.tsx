import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from './types';
import { theme } from '@constants';
import { layout } from '@utils';
import { Account, Feed, Home, Plans, Wallet } from '@screens';

//SVGs

import HomeIcon from '@assets/svg/homerise.svg';
import PlansIcon from '@assets/svg/plansrise.svg';
import WalletIcon from '@assets/svg/walletrise.svg';
// import AccountIcon from '@assets/svg/accountrise.svg';
import FeedIcon from '@assets/svg/feedrise.svg';

import CircleIcon from '@assets/svg/circle.svg'
import { StyleSheet, Text } from 'react-native';


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
            // fontFamily: 'Poppins_500Medium',
            fontSize: layout.fontPixel(12),
            color: theme.colors.text004,
          },
          tabBarItemStyle: {
            marginBottom: layout.pixelSizeVertical(20),
            marginTop: layout.pixelSizeVertical(17),
          },
        }}
      >
        <MainBottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => focused? <HomeIcon /> : <HomeIcon />,
            tabBarLabel: ({focused, color}) => focused? <CircleIcon /> : <Text style={styles.tabBarLabel} >Home</Text>
          }}
        />
        <MainBottomTab.Screen
          name="Plans"
          component={Plans}
          options={{
            tabBarIcon: ({ focused, color }) => 
            focused? <PlansIcon /> : <PlansIcon />,
            tabBarLabel: ({focused, color}) => focused? <CircleIcon /> : <Text style={styles.tabBarLabel}  >Plans</Text>
          }}
        />

        <MainBottomTab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ focused, color }) => 
            focused? <WalletIcon /> : <WalletIcon />,
            tabBarLabel: ({focused, color}) => focused? <CircleIcon /> : <Text  style={styles.tabBarLabel} >Wallet</Text>
          }}
        />
        <MainBottomTab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ focused, color }) => 
            focused? <FeedIcon /> : <FeedIcon />,
            tabBarLabel: ({focused, color}) => focused? <CircleIcon /> : <Text style={styles.tabBarLabel} >Feed</Text>
          }}
        />
        <MainBottomTab.Screen
          name="Account"
          component={Account}
        //   options={{
        //     tabBarIcon: ({ focused, color }) => 
        //     focused? <AccountIcon /> : <AccountIcon />,
        //  tabBarLabel: ({focused, color}) => focused? <CircleIcon /> : null
        //   }}
        />
      </MainBottomTab.Navigator>

    )
}


const styles = StyleSheet.create({
  tabBarLabel:{
    fontSize: layout.fontPixel(12),
    color: theme.colors.text004,
  }
})