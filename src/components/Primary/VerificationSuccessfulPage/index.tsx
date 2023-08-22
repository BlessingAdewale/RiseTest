import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SingleButton } from '../SIngleButton/Index'

// import MarkIcon from '@assets/svg/markicon'

export const VerificationSuccessfulPage = ({Title, SubTitle}: any) => {
    return (
        <View>
          {/* <MarkIcon /> */}
          <Text>{Title}</Text>
          <Text>{SubTitle}</Text>
          <SingleButton />
        </View>
    )
}


const styles = StyleSheet.create({})
