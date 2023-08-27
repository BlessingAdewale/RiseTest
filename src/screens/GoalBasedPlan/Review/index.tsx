import { AppBar, Card, DoubleButton } from '@components';
import { theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { Divider } from 'react-native-paper';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Information from '@assets/svg/information.svg';

export const Review = () => {
  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Review" icon="arrow-left" />
      <Text style={styles.company}>Kate Ventures </Text>
      <Text style={styles.amount}>$10,930.75</Text>
      <Text style={styles.time}>by 20 June 2021</Text>
      <View style={[globalStyles.rowBetween, styles.investmentAndReturns]}>
        <View style={[globalStyles.rowStart]}>
          <Text style={styles.greyDot}></Text>
          <Text>Investments • $50,400</Text>
        </View>
        <View style={[globalStyles.rowStart]}>
          <Text style={styles.colouredDot}></Text>
          <Text>Returns • $20,803</Text>
        </View>
      </View>
      <View style={[globalStyles.rowBetween, styles.estimatedWrapper]}>
        <Text style={styles.estimated}>Estimated monthly investment</Text>
        <Text style={styles.estimatedAmount}>$120</Text>
      </View>
      <Divider theme={{ colors: { outlineVariant: 'rgba(113, 135, 156, 0.20)' } }} />
      <Card
        viewStyle={styles.viewStyle}
        disabled={true}
        children={
          <View style={[globalStyles.rowBetween, { padding: layout.fontPixel(10) }]}>
            <Information
              width={layout.widthPixel(24)}
              height={layout.heightPixel(24)}
              style={styles.svg}
            />
            <Text style={styles.returns}>
              Returns not guaranteed. Investing involves risk. Read our Disclosures.
            </Text>
          </View>
        }
      />
      <Text style={styles.settings}>
        These are your starting settings, they can always be updated.
      </Text>
      <DoubleButton
        onPress1={() => null}
        onPress2={() => null}
        style={styles.doubleButton}
        children1="Agree & Continue"
        children2="Start over"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  company: {
    textAlign: 'center',
    fontSize: layout.fontPixel(12),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },

  amount: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: layout.fontPixel(24),
    textAlign: 'center',
    marginVertical: layout.pixelSizeVertical(4),
  },
  time: {
    textAlign: 'center',
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: '#333',
    marginBottom: layout.pixelSizeVertical(20),
  },
  investmentAndReturns: {
    paddingHorizontal: layout.pixelSizeHorizontal(25),
    marginBottom: layout.pixelSizeVertical(30.47),
  },

  greyDot: {
    width: layout.widthPixel(9),
    height: layout.heightPixel(9),
    backgroundColor: '#94A1AD',
    borderRadius: layout.fontPixel(15),
    marginRight: layout.pixelSizeHorizontal(6),
  },
  colouredDot: {
    width: layout.widthPixel(9),
    height: layout.heightPixel(9),
    backgroundColor: theme.colors.teal1,
    borderRadius: layout.fontPixel(15),
    marginRight: layout.pixelSizeHorizontal(6),
  },

  estimatedWrapper: {
    marginTop: layout.pixelSizeVertical(31.41),
    marginBottom: layout.pixelSizeVertical(27.87),
  },

  estimated: {
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },

  estimatedAmount: {
    color: '#333',
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: layout.fontPixel(14),
  },

  viewStyle: {
    width: layout.widthPixel(335),
    marginTop: layout.pixelSizeVertical(27.62),
    backgroundColor: 'rgba(113, 135, 156, 0.05)',
    height: layout.heightPixel(64),
    borderRadius: layout.fontPixel(8),
    marginBottom: layout.pixelSizeVertical(27.59),
  },

  returns: {
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
    width: layout.widthPixel(263),
  },
  svg: {
    marginRight: layout.pixelSizeHorizontal(17),
  },
  doubleButton: {
    // marginTop: layout.pixelSizeVertical(27.62),
  },
  settings: {
    textAlign: 'center',
    fontSize: layout.fontPixel(12),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },
});
