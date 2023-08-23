import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
export const TextInputWithPhoneNumber: React.FC = () => {
  const [value, setValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <PhoneInput
      ref={phoneInput}
      defaultValue={value}
      defaultCode="IN"
      onChangeFormattedText={(text) => {
        setValue(text);
      }}
      withDarkTheme
      withShadow
      autoFocus
    />
  );
};
