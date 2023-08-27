import { theme } from '@constants';
import { layout } from '@utils';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { TextInput as Input } from 'react-native-paper';

import { Calendar, LocaleConfig } from 'react-native-calendars';

export const TextInputWithCalendar = ({ ...props }: any) => {
  const renderCalendar = () => {
    const [date, setDate] = useState('');

    return (
      <Calendar
        onDayPress={(day) => {
          setDate(day.dateString);
        }}
        style={styles.calendarContainer}
      />
    );
  };

  return (
    <Input
      style={styles.input}
      outlineStyle={styles.outline}
      activeOutlineColor={theme.colors.teal1}
      selectionColor={theme.colors.teal1}
      // cursorColor={theme.colors.teal1}
      height={layout.heightPixel(55)}
      // editable={false}
      outlineColor="#D2D8D5"
      fontSize={layout.fontPixel(15)}
      label={styles.label}
      placeholder="Choose date"
      onFocus={() => null}
      theme={{ colors: { background: theme.colors.background } }}
      contentStyle={{ fontFamily: 'DMSans_700Bold', height: layout.heightPixel(44) }}
      mode="outlined"
      right={
        <Input.Icon
          icon={'calendar-month'}
          size={23.67}
          color={(isTextInputFocused: boolean) =>
            isTextInputFocused ? theme.colors.teal1 : '#7A7A7A'
          }
          style={{ marginTop: layout.pixelSizeVertical(12) }}
          onPress={renderCalendar}
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
  calendarContainer: {
    borderWidth: 1,
    borderColor: theme.colors.teal1,
    height: layout.heightPixel(200),
  },
});
