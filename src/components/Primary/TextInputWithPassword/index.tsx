import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { TextInput as Input } from 'react-native-paper';

export const TextInputWithPassword = ({ ...props }: any) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <Input
      style={styles.input}
      outlineStyle={styles.outline}
      activeOutlineColor={theme.colors.teal1}
      selectionColor={theme.colors.teal1}
      // cursorColor={theme.colors.teal1}
      height={layout.heightPixel(55)}
      outlineColor="#D2D8D5"
      fontSize={layout.fontPixel(15)}
      label={styles.label}
      onFocus={() => null}
      contentStyle={{ fontFamily: 'DMSans_700Bold', height: layout.heightPixel(34) }}
      mode="outlined"
      autoCorrect={false}
      textContentType="password"
      secureTextEntry={!showPassword}
      keyboardShouldPersistTaps="handled"
      right={
        <Input.Icon
          icon={showPassword ? 'eye-outline' : 'eye-off-outline'}
          size={16.67}
          color={(isTextInputFocused: boolean) =>
            isTextInputFocused ? theme.colors.teal1 : '#7A7A7A'
          }
          style={{ marginTop: layout.pixelSizeVertical(12) }}
          onPress={() => {
            setShowPassword(!showPassword), () => Keyboard.dismiss();
          }}
        />
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // height: layout.heightPixel(50),
    // fontWeight:'normal',
    // fontFamily: 'Poppins_400Regular',
    color: theme.colors.textInputText,
  },
  outline: {
    borderRadius: layout.fontPixel(5),
    borderStyle: 'solid',
  },
  label: {
    // color: '#454545',
  },
});
