import { AppBar } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export const ChooseFromPlans = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Choose from plans" icon="arrow-left" />
    </SafeAreaView>
  );
};
