import React, { useRef } from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from '../Card';
import { layout } from '@utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';
import { accountBalanceData, theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { accountBalanceDataType } from 'constants/model';
import { Pagination } from '../../Secondary';

export const AccountBalanceSlide = () => {
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
  const renderItem = React.useCallback(({ item }: accountBalanceDataType) => {
    return (
      <View>
        <Card
          disabled={true}
          viewStyle={styles.container}
          children={
            <View style={styles.contentContainer}>
              <View style={[globalStyles.rowCenter]}>
                <Text style={styles.title}>{item.title}</Text>
                <Ionicons name="eye-off" size={14} color={theme.colors.teal1} />
              </View>
              <Text style={styles.amount}>{item.amount}</Text>
              <Divider theme={{ colors: { outlineVariant: 'rgba(113, 135, 156, 0.20)' } }} />
              <View style={[globalStyles.rowCenter]}>
                <Text style={styles.totalGains}>Total Gains</Text>
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={14}
                  color="#27BF41"
                  style={styles.arrowTopRight}
                />
                <Text style={styles.percentage}>0.21%</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.grey1} />
              </View>
            </View>
          }
        />
      </View>
    );
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={accountBalanceData.data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        // bounces={false}
        snapToAlignment="center"
        onScroll={handleOnScroll}
      />
      <Pagination data={accountBalanceData.data} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(335),
    height: layout.heightPixel(175),
    borderRadius: layout.fontPixel(10),
  },
  contentContainer: {
    paddingVertical: layout.pixelSizeVertical(10),
    paddingLeft: layout.pixelSizeHorizontal(58),
    paddingRight: layout.pixelSizeVertical(52),
  },
  amount: {
    textAlign: 'center',
    color: '#333',
    fontSize: layout.fontPixel(32),
    fontFamily: 'SpaceGrotesk_400Regular',
    paddingVertical: layout.pixelSizeVertical(12),
  },
  percentage: {
    color: theme.colors.instructiveGreen,
    fontSize: layout.fontPixel(16),
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  title: {
    color: theme.colors.textSoft,
    fontSize: layout.fontPixel(15),
    paddingRight: layout.pixelSizeHorizontal(10),
    fontFamily: 'DMSans_400Regular',
  },
  totalGains: {
    paddingVertical: layout.pixelSizeVertical(12),
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },
  arrowTopRight: {
    paddingLeft: layout.pixelSizeHorizontal(3),
  },
});
