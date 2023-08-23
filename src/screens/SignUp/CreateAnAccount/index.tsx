import { SignUpHeader, TextInput, TextInputWithPassword } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const CreateAnAccount = () => {
  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Create an account"
        subTitle="Start building your dollar-denominated 
investment portfolio"
      />
      <TextInput
      
      />
      <TextInputWithPassword />
      
    </SafeAreaView>
  );
};
