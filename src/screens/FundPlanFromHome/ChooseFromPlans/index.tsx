import { AppBar, PlanCard } from '@components';
import { theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useChooseFromPlansHelper } from './useChooseFromPlansHelper';
import { getPlan } from '@hooks';

export const ChooseFromPlans = () => {
  const { navigateToSelectBank } = useChooseFromPlansHelper();
  getPlan()
    .then((result) => {})
    .catch((err) => {});
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Choose from plans" icon="arrow-left" />
      <Text style={styles.tap}>Tap on any of the plans to select</Text>
      <PlanCard onPress={() => null} onPress2={navigateToSelectBank} ShowFirstIndex={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tap: {
    textAlign: 'center',
    color: theme.colors.textSoft,
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
  },
});
