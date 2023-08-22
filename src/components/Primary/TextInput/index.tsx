import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput as Input } from 'react-native-paper';

export const TextInput = ({left, right, ...props }: any) => {

// const [generalInput, setGeneralInput ] = React.useState(false)
// const [passwordInput, setPasswordInput ] = React.useState(false)
// const [calendarInput, setCalendarInput ] = React.useState(false)

    return (
        <Input
        style={styles.input}
        outlineStyle={styles.outline}
        activeOutlineColor={theme.colors.teal1}
        selectionColor={theme.colors.teal1}
        // cursorColor={theme.colors.teal1}
        height={layout.heightPixel(55)}
        outlineColor="#D2D8D5"
        fontSize= {layout.fontPixel(15)}
        label={styles.label}
        onFocus={() => null}
        left={left}
        right={right}
        contentStyle={{ fontFamily: "Poppins_400Regular", height: layout.heightPixel(34) }}
        mode="outlined"
        {...props}
      />
    )
}



const styles = StyleSheet.create({
    input: {
        // height: layout.heightPixel(50),
        // fontWeight:'normal',
        // fontFamily: 'Poppins_400Regular',
        color: theme.colors.textInputText,
      },
      outline: {
        borderRadius: layout.fontPixel(5),
        borderStyle: 'solid'
      
      },
      label: {
        // color: '#454545',
      
      },
})
