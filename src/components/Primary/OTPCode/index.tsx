import { layout } from '@utils';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { theme } from '@constants';
import { oldValue, newValue, useAppDispatch, useAppSelector } from '@state';

const CELL_COUNT = 6;

export function OTPCode({ firstOtp, value, setValue }: any) {
  const dispatch = useAppDispatch();

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      {
        firstOtp ? dispatch(oldValue(value)) : dispatch(newValue(value));
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [value, setValue]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        secureTextEntry={true}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: layout.pixelSizeVertical(20) },
  title: { textAlign: 'center', fontSize: layout.fontPixel(30) },
  codeFieldRoot: {
    marginTop: layout.pixelSizeVertical(20),
    paddingHorizontal: layout.pixelSizeHorizontal(10.5),
  },
  cell: {
    color: '#454545',
    width: layout.widthPixel(43),
    height: layout.heightPixel(46),
    lineHeight: layout.heightPixel(38),
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: layout.fontPixel(24),
    borderWidth: layout.fontPixel(1),
    borderRadius: layout.fontPixel(5),
    borderColor: '#0898A0',
    textAlign: 'center',
    paddingTop: layout.pixelSizeVertical(5),
  },
  focusCell: {
    borderColor: theme.colors.teal1,
  },
});
