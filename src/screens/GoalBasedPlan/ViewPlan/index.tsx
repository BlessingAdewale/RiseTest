import { TextButton } from '@components';
import { theme } from '@constants';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { layout } from '@utils';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useViewPlanHelper } from './useViewPlanHelper';
import { getPlanProjection } from '@hooks';

export const ViewPlan = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { navigateToFundWallet } = useViewPlanHelper();

  getPlanProjection()
    .then(() => {})
    .catch(() => {});

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingHorizontal: layout.pixelSizeHorizontal(20),
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight + layout.pixelSizeVertical(36.67) }}
      >
        <TextButton
          mode="outlined"
          children="Fund Plan"
          icon="plus"
          buttonColor="#FFF"
          textColor={theme.colors.teal1}
          borderRadius={layout.fontPixel(5)}
          fontFamily="DMSans_700Bold"
          style={styles.fundPlan}
          contentStyle={{
            height: layout.heightPixel(56),
          }}
          onPress={navigateToFundWallet}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fundPlan: {
    borderColor: 'rgba(113, 135, 156, 0.20)',
    marginTop: layout.pixelSizeVertical(24.5),
  },
});
