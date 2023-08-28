import { NumberPad, OTPCode, SignUpHeader } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '@assets/svg/leftarrow.svg';
import { layout } from '@utils';
import { useAppDispatch, useAppSelector } from '@state';
import { ConfirmPinNavigationProp } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';

export const ConfirmPin = () => {
  const navigation = useNavigation<ConfirmPinNavigationProp>();
  const [value, setValue] = React.useState('');
  const { oldValue, newValue } = useAppSelector((state) => state.otp);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      {
        oldValue === newValue ? navigation.navigate('DoneCreatingPin') : null;
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [newValue]);

  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Confirm 6-digit PIN"
        subTitle="You’ll use this PIN to sign in and confirm transactions"
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftArrow}>
        <LeftArrow width={layout.widthPixel(13.328)} height={layout.heightPixel(13.328)} />
      </TouchableOpacity>

      <OTPCode firstOtp={false} value={value} setValue={setValue} />
      <NumberPad />
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
