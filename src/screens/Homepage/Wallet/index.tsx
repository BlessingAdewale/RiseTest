import { globalStyles } from '@globalStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Wallet = () => {
  return (
    <View style={[globalStyles.container, globalStyles.wrapper, globalStyles.rowCenter]}>
      <Text>This is wallet</Text>
    </View>
  );
};
