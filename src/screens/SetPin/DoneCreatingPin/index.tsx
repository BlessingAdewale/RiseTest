import { VerificationSuccessfulPage } from '@components';
import { theme } from '@constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const DoneCreatingPin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VerificationSuccessfulPage
        title="You’ve created your PIN"
        subTitle="Keep your account safe with your secret PIN. Do not share this PIN with anyone."
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
