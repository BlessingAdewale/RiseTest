import React, { useRef, useState } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { onboardingData } from '@constants';
import { globalStyles } from '@globalStyles';
import { OnboardingItem, Pagination } from '@components';

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef: any = useRef(null);

  const scrollTo = () => {
    if (currentIndex < onboardingData.data.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('last item');
    }
  };

  const goBack = () => {
    if (currentIndex < onboardingData.data.length - 1) {
      slidesRef.current.scrollToIndex({ index: 0 });
    } else {
      console.log('other items');
    }
  };

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
    ({ item, index }: any) => (
      <OnboardingItem scrollTo={scrollTo} goBack={goBack} item={item} index={index} />
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
          // viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Pagination data={onboardingData.data} scrollX={scrollX} />
    </SafeAreaView>
  );
};
