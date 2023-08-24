import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

export const SingleButton = ({ mode, style, errorText, setErrorText, ...props }: any) => {
  return (
    <PaperButton
      style={[styles.button, mode === 'outlined']}
      labelStyle={styles.text}
      mode={mode}
      buttonColor={theme.colors.teal1}
      contentStyle={{
        paddingVertical: layout.pixelSizeVertical(8),
        width: layout.widthPixel(335),
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: layout.pixelSizeVertical(40),
    borderRadius: layout.fontPixel(5),
  },
  text: {
    color: theme.colors.background,
    textAlign: 'center',
    fontFamily: 'DMSans_400Regular',
    fontWeight: '700',
    fontSize: layout.fontPixel(14),
  },
});
