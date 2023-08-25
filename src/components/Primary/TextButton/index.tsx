import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

export const TextButton = ({
  mode,
  style,
  onPress,
  contentStyle,
  marginTop,
  borderRadius,
  backgroundColor,
  textColor,
  fontFamily,
  fontSize,
  fontWeight,
  width,
  height,
  ...props
}: any) => {
  return (
    <PaperButton
      style={[
        { marginTop: marginTop, borderRadius: borderRadius, width: width, height: height },
        style,
      ]}
      labelStyle={[
        styles.text,
        { fontFamily: fontFamily, fontSize: fontSize, color: textColor, fontWeight: fontWeight },
      ]}
      mode={mode}
      contentStyle={contentStyle}
      buttonColor={backgroundColor}
      onPress={onPress}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: layout.fontPixel(12),
  },
});
