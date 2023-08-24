import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

export const DoubleButton = ({
  children1,
  children2,
  onPress1,
  onPress2,
  style,
  ...props
}: any) => {
  return (
    <View style={[styles.container, style]}>
      <PaperButton
        style={[styles.button]}
        labelStyle={styles.text}
        children={children1}
        mode="contained"
        buttonColor={theme.colors.teal1}
        onPress={onPress1}
        contentStyle={{
          paddingVertical: layout.pixelSizeVertical(8),
          width: layout.widthPixel(335),
        }}
        {...props}
      />

      <PaperButton
        style={[styles.button2, { borderColor: '#FFFFFF' }]}
        children={children2}
        labelStyle={styles.text2}
        mode="outlined"
        buttonColor="rgba(113, 135, 156, 0.10))"
        textColor={theme.colors.teal1}
        onPress={onPress2}
        contentStyle={{
          paddingVertical: layout.pixelSizeVertical(8),
          width: layout.widthPixel(335),
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    marginTop: layout.pixelSizeVertical(34),
    borderRadius: layout.fontPixel(5),
  },
  button2: {
    marginTop: layout.pixelSizeVertical(10),
    borderRadius: layout.fontPixel(5),
  },
  text: {
    color: theme.colors.background,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: layout.fontPixel(14),
    fontWeight: '700',
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: layout.fontPixel(14),
    fontWeight: '700',
  },
});
