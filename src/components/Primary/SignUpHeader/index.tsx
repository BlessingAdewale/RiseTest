import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SignUpHeader = ({ title, subTitle }: any) => {
  return (
    <View>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: layout.fontPixel(20),
    fontFamily: 'SpaceGrotesk_500Medium',
    marginTop: layout.pixelSizeVertical(75),
    color: theme.colors.textBlock,
  },
  subTitle: {
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    marginTop: layout.pixelSizeVertical(11),
    color: theme.colors.textSoft,
  },
});
