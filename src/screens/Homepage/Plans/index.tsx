import { globalStyles } from '@globalStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Plans = () => {
  return (
    <View style={[globalStyles.container, globalStyles.wrapper, globalStyles.rowCenter]}>
      <Text>This is plans</Text>
    </View>
  );
};
