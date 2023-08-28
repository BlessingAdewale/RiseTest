import React, { useRef, useState } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { onboardingData } from '@constants';
import { globalStyles } from '@globalStyles';
import { OnboardingItem, Pagination } from '@components';
import { useOnBoardingHelper } from './useOnboardingHelper';
import { OnboardingDataType } from 'constants/model';

export const Onboarding = () => {
  const { navigateToCreateAnAccount, navigateToSignIn } = useOnBoardingHelper();

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef: any = useRef(null);

  const scrollTo = React.useCallback(() => {
    if (currentIndex < onboardingData.data.length) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // console.log('last item');
    }
  }, []);

  const goBack = React.useCallback(() => {
    if (currentIndex < onboardingData.data.length - 1) {
      slidesRef.current.scrollToIndex({ index: 0 });
    } else {
      // console.log('other items');
    }
  }, []);

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = () => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffSet: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    );
  };

  const renderItem = React.useCallback(
    ({ item, index }: OnboardingDataType) => (
      <OnboardingItem
        scrollTo={scrollTo}
        goBack={goBack}
        // navigateToCreateAnAccount={navigateToCreateAnAccount}
        // navigateToSignIn={navigateToSignIn}
        item={item}
        index={index}
      />
    ),
    [],
  );

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={onboardingData.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          // bounces={false}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Pagination data={onboardingData.data} scrollX={scrollX} />
    </SafeAreaView>
  );
};
