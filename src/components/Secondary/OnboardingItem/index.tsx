import { globalStyles } from '@globalStyles';
import { DoubleButton  } from '../../Primary/DoubleButton';
import { TextButton } from '../../Primary/TextButton';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { onboardingData, theme } from '@constants';
import { layout } from '@utils';

export const OnboardingItem = ({ item, index }: any) => {
  return (
    <View>
      <Image source={item.image} resizeMode="contain" style={styles.image} />
      <View>
        <Text style={[styles.title, {color: `${item.titleColor}`}]}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        {onboardingData.data.length.toString=== index+1 ? (
          <DoubleButton children1="Sign Up" children2="Sign In" />
        ) : (
          <View style={[globalStyles.rowBetween]}>
            <TextButton
              mode="contained"
              disabled={index === 0 ? true : false}
              icon="arrow-left-thin"
            
            />
            <TextButton mode="contained" children="Next" iconRight="arrow-right-thin" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
  title: {
    fontSize: layout.fontPixel(20),
    fontFamily: 'SpaceGrotesk_500Medium',

  },
  subTitle: {
    color: theme.colors.textBlock,
    fontFamily: 'DMSans_400Regular',
fontWeight: '400',
marginTop: layout.pixelSizeVertical(12)
  },
});
