import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { layout } from '@utils';
import { theme } from '@constants';

import MarkIcon from '@assets/svg/markicon.svg';
// import { SingleButton } from '../SingleButton/Index'

export const VerificationSuccessfulPage = ({ Title, SubTitle }: any) => {
  return (
    <View>
      <MarkIcon width={layout.widthPixel(90)} height={layout.heightPixel(90)} />
      <Text style={styles.title}>{Title}</Text>
      <Text style={styles.subTitle}>{SubTitle}</Text>
      {/* <SingleButton /> */}
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
  },
  subTitle: {
    fontSize: layout.fontPixel(15),
    marginTop: layout.pixelSizeVertical(4),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
    textAlign: 'center',
  },
});
