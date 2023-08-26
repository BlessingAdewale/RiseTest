import { AppBar } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export const SelectBank = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Select bank" icon="arrow-left" />
    </SafeAreaView>
  );
};
