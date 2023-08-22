import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SignUpHeader = ({Title, SubTitle}: any) => {
    return (
        <View>
            <Text style={styles.Title}>{Title}</Text>
            <Text style={styles.SubTitle}>{SubTitle}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Title:{},
    SubTitle:{}
})
