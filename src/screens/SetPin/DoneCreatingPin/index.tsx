import { VerificationSuccessfulPage } from '@components';
import { theme } from '@constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { thereisuser, thereisnouser, useAppDispatch, useAppSelector } from '@state';

export const DoneCreatingPin = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <VerificationSuccessfulPage
        title="You’ve created your PIN"
        subTitle="Keep your account safe with your secret PIN. Do not share this PIN with anyone."
        onPress={() => dispatch(thereisuser())}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});
