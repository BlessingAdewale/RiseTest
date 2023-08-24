import { SignUpHeader } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '@assets/svg/leftarrow.svg'
import { layout } from '@utils';

export const CreatePin = () => {
  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]} >
    
<SignUpHeader
title="Create a 6-digit PIN"
subTitle="You’ll use this PIN to sign in and confirm transactions"
/>
<TouchableOpacity>
      <LeftArrow width={layout.widthPixel(36)} height={layout.heightPixel(36)}  />
      </TouchableOpacity>


    </SafeAreaView>
  );
};
