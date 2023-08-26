import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card as CardPaper } from 'react-native-paper';

export const Card = ({
  mode,
  viewStyle,
  children,
  contentStyle,
  disabled,
  onPress,
  style,
  ...props
}: any) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} onPress={onPress} style={viewStyle}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
