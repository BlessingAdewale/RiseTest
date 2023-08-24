import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from './types';
import { theme } from '@constants';
import { images } from '@constants';
import { layout } from '@utils';
import { Account, Feed, Home, Plans, Wallet } from '@screens';
import { Avatar } from 'react-native-paper';

//SVGs

import HomeIcon from '@assets/svg/homerise.svg';
import PlansIcon from '@assets/svg/plansrise.svg';
import WalletIcon from '@assets/svg/walletrise.svg';
import FeedIcon from '@assets/svg/feedrise.svg';

import CircleIcon from '@assets/svg/circle.svg';
import { StyleSheet, Text } from 'react-native';

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();
export const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.teal1,
        tabBarInactiveTintColor: '#94A1AD',
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: '#E4E7EB',
          shadowColor: '#E4E7EB',
          // shadowOffset: {
          //   width: 0,
          //   height: 1
          // },
          elevation: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.90)',
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
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <HomeIcon width={layout.widthPixel(32)} height={layout.heightPixel(32)} />
            ) : (
              <HomeIcon width={layout.widthPixel(32)} height={layout.heightPixel(32)} />
            ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <CircleIcon width={layout.widthPixel(8.489)} height={layout.heightPixel(8.489)} />
            ) : (
              <Text style={styles.tabBarLabel}>Home</Text>
            ),
        }}
      />
      <MainBottomTab.Screen
        name="Plans"
        component={Plans}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <PlansIcon width={layout.widthPixel(32)} height={layout.heightPixel(32)} />
            ) : (
              <PlansIcon width={layout.widthPixel(32)} height={layout.heightPixel(32)} />
            ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <CircleIcon width={layout.widthPixel(8.489)} height={layout.heightPixel(8.489)} />
            ) : (
              <Text style={styles.tabBarLabel}>Plans</Text>
            ),
        }}
      />

      <MainBottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <WalletIcon width={layout.widthPixel(22)} height={layout.heightPixel(22)} />
            ) : (
              <WalletIcon width={layout.widthPixel(22)} height={layout.heightPixel(22)} />
            ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <CircleIcon width={layout.widthPixel(8.489)} height={layout.heightPixel(8.489)} />
            ) : (
              <Text style={styles.tabBarLabel}>Wallet</Text>
            ),
        }}
      />
      <MainBottomTab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FeedIcon width={layout.widthPixel(22)} height={layout.heightPixel(22)} />
            ) : (
              <FeedIcon width={layout.widthPixel(22)} height={layout.heightPixel(22)} />
            ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <CircleIcon width={layout.widthPixel(8.489)} height={layout.heightPixel(8.489)} />
            ) : (
              <Text style={styles.tabBarLabel}>Feed</Text>
            ),
          tabBarBadge: '9+',
          tabBarBadgeStyle: {
            backgroundColor: '#EB5757',
          },
        }}
      />
      <MainBottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Avatar.Image size={30} source={images.userImage} />
            ) : (
              <Avatar.Image
                size={30}
                source={images.userImage}
                theme={{ colors: { primary: theme.colors.teal1 } }}
              />
            ),
          tabBarLabel: ({ focused, color }) =>
            focused ? (
              <CircleIcon width={layout.widthPixel(8.489)} height={layout.heightPixel(8.489)} />
            ) : (
              <Text style={styles.tabBarLabel}>Account</Text>
            ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: layout.fontPixel(12),
    color: theme.colors.text004,
  },
});
