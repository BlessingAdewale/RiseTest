import { globalStyles } from '@globalStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Feed = () => {
  return (
    <View style={[globalStyles.container, globalStyles.wrapper, globalStyles.rowCenter]}>
      <Text>This is Feed</Text>
    </View>
  );
};
