import { AppBar } from '@components';
import { bankData, theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { getBank } from '@hooks';
import { layout } from '@utils';
import { bankDataType } from 'constants/model';
import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

export const SelectBank = () => {
  getBank()
    .then((result) => {})
    .catch((err) => {});

  const renderItem = React.useCallback(({ item }: bankDataType) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.container}>
          <View>
            <Text style={styles.bankDetails}>{item.bankDetails}</Text>
            <Text style={styles.accountName}>{item.accountName}</Text>
          </View>
        </View>
        <Divider theme={{ colors: { outlineVariant: 'rgba(113, 135, 156, 0.20)' } }} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <AppBar title="Select bank" icon="arrow-left" />
      <FlatList data={bankData.data} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.pixelSizeVertical(15),
  },
  bankDetails: {
    color: theme.colors.textSoft,
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
  },
  accountName: {
    color: '#222',
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
  },
});
