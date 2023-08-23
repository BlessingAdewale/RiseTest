import { theme } from '@constants';
import { layout } from '@utils';
import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

export const TextButton = ({ mode, style, onPress, marginTop, borderRadius, fontFamily, fontSize, width, height, ...props }: any) => {
  return (
    <PaperButton
      style={[{ marginTop: marginTop, borderRadius: borderRadius,  width: width, height: height }, style ]}
      labelStyle={[styles.text, {fontFamily: fontFamily, fontSize: fontSize }]}
      mode={mode}
      contentStyle={{
        // padding: layout.pixelSizeVertical(8),
   
      }}
      onPress={onPress}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.background,
    textAlign: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: layout.fontPixel(12),
  },
});
