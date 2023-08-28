import { VerificationSuccessfulPage } from '@components';
import { theme } from '@constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDoneCreatingPlanHelper } from './useDoneCreatingPlanHelper';
import { thereisplan, useAppDispatch, useAppSelector } from '@state';

export const DoneCreatingPlan = () => {
  const dispatch = useAppDispatch();
  const { plan } = useAppSelector((state) => state.theplan);
  const { navigateToViewPlan } = useDoneCreatingPlanHelper();

  const Submit = () => {
    dispatch(thereisplan());
    navigateToViewPlan;
  };

  return (
    <SafeAreaView style={styles.container}>
      <VerificationSuccessfulPage
        title="You just created your plan."
        subTitle="Well done, Deborah"
        change={true}
        children="View plan"
        onPress={Submit()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
