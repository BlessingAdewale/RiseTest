import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { layout } from '@utils';
import { theme } from '@constants';

import MarkIcon from '@assets/svg/markicon.svg';
import { SingleButton } from '../SingleButton';
import { globalStyles } from '@globalStyles';

export const VerificationSuccessfulPage = ({ title, onPress, subTitle }: any) => {
  return (
    <View style={[globalStyles.container]}>
      <MarkIcon width={layout.widthPixel(90)} height={layout.heightPixel(90)} style={styles.svg} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <SingleButton children="Okay" style={styles.button} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: layout.fontPixel(20),
    fontFamily: 'SpaceGrotesk_400Regular',
    textAlign: 'center',
    paddingHorizontal: layout.pixelSizeHorizontal(89),
    marginTop: layout.pixelSizeVertical(36),
    color: theme.colors.textBlock,
    fontWeight: '400',
  },
  subTitle: {
    fontSize: layout.fontPixel(15),
    marginTop: layout.pixelSizeVertical(4),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
    textAlign: 'center',
  },
  svg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: layout.pixelSizeVertical(137),
    marginLeft: layout.pixelSizeHorizontal(124),
  },
  button: {
    marginTop: layout.pixelSizeVertical(297.3),
  },
});
