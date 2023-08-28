import { VerificationSuccessfulPage } from '@components';
import { theme } from '@constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDoneRegisteringHelper } from './useDoneRegisteringHelper';

export const DoneRegistering = () => {
  const { navigateToSignIn } = useDoneRegisteringHelper();

  return (
    <SafeAreaView style={styles.container}>
      <VerificationSuccessfulPage
        title="You just created your Rise account"
        subTitle="Welcome to Rise, let’s take you home"
        onPress={navigateToSignIn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
