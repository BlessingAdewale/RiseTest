import React, { useRef } from 'react';
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { onboardingData } from '@constants';
import { globalStyles } from '@globalStyles';
import { OnboardingItem, Pagination } from '@components';

export const Onboarding = () => {


const handleOnViewableItemsChanged= useRef (({viewableItems}: any)=> {
console.log ('viewableItems', viewableItems)
}).current


  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event: any) => {
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
    )(event);
  };

  const renderItem = React.useCallback(
    ({ item, index }: any) => <OnboardingItem item={item} index={index} />,
    [],
  );
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={onboardingData.data}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
        />
      </View>
      <Pagination data={onboardingData.data} scrollX={scrollX} />
    </SafeAreaView>
  );
};
