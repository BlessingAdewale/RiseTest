import { OTPCode, SignUpHeader } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '@assets/svg/leftarrow.svg';
import { layout } from '@utils';

export const ConfirmPin = () => {

  const [value, setValue] = React.useState('')
  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Confirm 6-digit PIN"
        subTitle="You’ll use this PIN to sign in and confirm transactions"
      />
      <TouchableOpacity onPress={() => null} style={styles.leftArrow}>
        <LeftArrow width={layout.widthPixel(13.328)} height={layout.heightPixel(13.328)} />
      </TouchableOpacity>

      <OTPCode value={value} setValue={setValue} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  leftArrow: {
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    width: layout.widthPixel(35),
    height: layout.heightPixel(35),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: layout.heightPixel(745),
    left: layout.heightPixel(21),
    right: 0,
  },
  titleMarginTop: {
    marginTop: -29,
  },
});

