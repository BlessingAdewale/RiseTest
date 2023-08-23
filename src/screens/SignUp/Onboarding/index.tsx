import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { onboardingData } from '@constants';
import { globalStyles } from '@globalStyles';
import { OnboardingItem } from '@components';

export const Onboarding = () => {
  const renderItem = React.useCallback(
    ({ item, index }: any) => <OnboardingItem item={item} index={index} />,
    [],
  );
  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <View>
        <FlatList data={onboardingData.data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};
