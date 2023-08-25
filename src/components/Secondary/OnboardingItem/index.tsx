import { globalStyles } from '@globalStyles';
import { DoubleButton } from '../../Primary/DoubleButton';
import { TextButton } from '../../Primary/TextButton';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { onboardingData, theme } from '@constants';
import { layout } from '@utils';

export const OnboardingItem = ({ item, index, scrollTo, goBack }: any) => {
  return (
    <View style={{ backgroundColor: `${item.backgroundColor}`, width: layout.width }}>
      <View style={[styles.container]}>
        <Image source={item.image} resizeMode="contain" style={[styles.image]} />
        <View style={[styles.content, { flex: index === 2 ? 0.53 : 0 }]}>
          <Text style={[styles.title, { color: `${item.titleColor}` }]}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          {index === 2 ? (
            <DoubleButton
              onPress1={() => null}
              onPress2={() => null}
              style={styles.doubleButton}
              children1="Sign Up"
              children2="Sign In"
            />
          ) : (
            <View style={[globalStyles.rowBetween, styles.textButton]}>
              <TextButton
                mode="contained"
                disabled={index === 0 ? true : false}
                onPress={goBack}
                icon="arrow-left-thin"
                textColor={index === 0 ? 'rgba(113, 135, 156, 0.10)' : item.titleColor}
                borderRadius={layout.fontPixel(5)}
                backgroundColor="rgba(113, 135, 156, 0.10)"
              />
              <TextButton
                onPress={scrollTo}
                mode="contained"
                borderRadius={layout.fontPixel(5)}
                backgroundColor="rgba(113, 135, 156, 0.10)"
                textColor={item.titleColor}
                children="Next"
                contentStyle={{ flexDirection: 'row-reverse' }}
                icon={{ source: 'arrow-right-thin', direction: 'ltr' }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: layout.pixelSizeHorizontal(16),
    marginRight: layout.pixelSizeHorizontal(24),
    height: layout.height,
    alignItems: 'center',
  },
  content: {},
  image: {
    flex: 0.8,
    width: '100%',
    marginTop: layout.pixelSizeVertical(55),
  },
  textButton: {
    marginTop: layout.pixelSizeVertical(57),
  },
  doubleButton: {
    marginTop: layout.pixelSizeVertical(37),
  },
  title: {
    fontSize: layout.fontPixel(20),
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  subTitle: {
    color: theme.colors.textBlock,
    fontFamily: 'DMSans_400Regular',
    fontWeight: '400',
    marginTop: layout.pixelSizeVertical(12),
  },
});
