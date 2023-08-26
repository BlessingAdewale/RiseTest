import { VerificationSuccessfulPage } from '@components';
import { theme } from '@constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const DoneCreatingPlan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VerificationSuccessfulPage
        title="You just created your plan."
        subTitle="Well done, Deborah"
        change={true}
        children="View plan"
        onPress={() => null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
