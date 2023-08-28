import { AppBar, SingleButton } from '@components';
import { fundWalletData, theme } from '@constants';
import { globalStyles } from '@globalStyles';
import React, { useCallback, useMemo, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { layout } from '@utils';
import { Divider } from 'react-native-paper';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { fundWalletDataType } from 'constants/model';
import { useFundWalletHelper } from './useFundWalletHelper';
import { getRate } from '@hooks';

export const FundWallet = () => {
  getRate()
    .then(() => {})
    .catch(() => {});

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const { navigateToChooseFromPlans } = useFundWalletHelper();

  const renderItem = React.useCallback(({ item }: fundWalletDataType) => {
    return (
      <View>
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={[globalStyles.rowBetween, styles.container]}
        >
          <View style={[globalStyles.rowBetween]}>
            <View style={[styles.icon]}>
              <MaterialCommunityIcons name={item.logo} size={19} color={theme.colors.teal1} />
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.timeline}>Timeline - 15 mins</Text>
            </View>
          </View>

          <View>
            <Text style={styles.timeline}>{item.rate}</Text>
            <Text style={styles.timeline}>{item.fee}</Text>
          </View>
        </TouchableOpacity>
        <Divider theme={{ colors: { outlineVariant: 'rgba(113, 135, 156, 0.20)' } }} />
      </View>
    );
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
        <AppBar title="Fund Wallet" icon="arrow-left" />

        <FlatList
          data={fundWalletData.data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backgroundStyle={{ borderRadius: layout.fontPixel(50) }}
        >
          <View style={styles.bottomSheet}>
            {/* <AppBar title="AboutExchangeRate" icon="arrow-left" /> */}
            <View style={[globalStyles.rowBetween]}>
              <View>
                <Text>USD Buy Rate</Text>
                <Text>We buy US dollars at this rate</Text>
              </View>
              <Text>₦490</Text>
            </View>
            <View style={[globalStyles.rowBetween]}>
              <View>
                <Text>USD Sell Rate</Text>
                <Text>The current value of your investments in Naira</Text>
              </View>
              <Text>₦490</Text>
            </View>
            <Text>
              These exhange rates are provided by independent third parties who handle fund
              conversions at the prevailing parallel rates and are not set, or controlled or by
              Rise. They are subject to change based on market trends.
            </Text>
            <SingleButton children="Accept & Continue" onPress={navigateToChooseFromPlans} />
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(22),
    marginBottom: layout.pixelSizeVertical(12),
  },
  icon: {
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    width: layout.widthPixel(40),
    height: layout.heightPixel(40),
    left: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: layout.fontPixel(20),
    marginRight: layout.pixelSizeHorizontal(15),
  },
  title: {
    color: '#000',
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
  },
  timeline: {
    fontSize: layout.fontPixel(12),
    color: theme.colors.textSoft,
    fontFamily: 'DMSans_400Regular',
  },
  bottomSheet: {
    flex: 1,
    borderRadius: layout.fontPixel(15),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
});
