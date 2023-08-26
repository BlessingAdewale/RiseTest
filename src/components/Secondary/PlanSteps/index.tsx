import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@constants';

export const PlanSteps = ({ iconName, title, subTitle }: any) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          marginRight: layout.pixelSizeHorizontal(80),
          marginTop: layout.pixelSizeVertical(24),
        },
      ]}
    >
      <View style={[styles.container, globalStyles.rowCenter]}>
        <MaterialCommunityIcons name={iconName} size={21} color={theme.colors.teal1} />
      </View>
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(40),
    height: layout.heightPixel(40),
    borderRadius: layout.fontPixel(35),
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    marginRight: layout.pixelSizeHorizontal(28),
  },
  titleStyle: {
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_700Bold',
    color: '#222',
  },
  subTitleStyle: {
    color: theme.colors.textSoft,
    fontSize: layout.fontPixel(13),
    fontFamily: 'DMSans_400Regular',
  },
});
