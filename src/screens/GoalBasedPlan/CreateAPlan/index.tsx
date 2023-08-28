import { AppBar, PlanSteps, SingleButton } from '@components';
import { images, theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useCreateAPlanHelper } from './useCreateAPlanHelper';

export const CreateAPlan = () => {
  const { navigateToGoalName } = useCreateAPlanHelper();

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Create a plan" icon="close" />
      <Text style={[styles.reach]}>Reach your goals faster</Text>
      <View style={[globalStyles.rowCenter]}>
        <Avatar.Image
          size={100}
          source={images.startABusiness}
          theme={{ colors: { primary: theme.colors.teal1 } }}
        />
        {/* <Image source={images.startABusiness} resizeMode='cover'  style={[styles.image]} /> */}
      </View>
      <PlanSteps
        iconName="help"
        title="Give us a few details"
        subTitle="Tell us what you want to achieve and we will help you get there"
      />
      <PlanSteps
        iconName="calendar-month"
        title="Turn on auto-invest"
        subTitle="The easiest way to get your investment working for you is to fund to periodically."
      />
      <PlanSteps
        iconName="calendar"
        title="Modify as you progress"
        subTitle="You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more."
      />

      <SingleButton
        mode="contained"
        onPress={navigateToGoalName}
        children="Continue"
        style={styles.button}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  reach: {
    marginTop: layout.pixelSizeVertical(25.17),
    marginBottom: layout.pixelSizeVertical(61.66),
    textAlign: 'center',
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },

  image: {
    marginBottom: layout.pixelSizeVertical(33.34),
  },
  button: {
    marginTop: layout.pixelSizeVertical(96),
  },
});
