import { AppBar } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export const FundWallet = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Fund Wallet" icon="arrow-left" />
    </SafeAreaView>
  );
};
