import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export const AppBar = ({ title, icon, navigation }: any) => {
  return (
    <Appbar.Header mode="center-aligned" theme={{ colors: { surface: theme.colors.background } }}>
      <View style={styles.container}>
        <Appbar.Action
          style={styles.backAction}
          size={24}
          rippleColor="rgba(113, 135, 156, 0.10)"
          icon={icon}
          color={theme.colors.teal1}
          onPress={() => navigation.goBack()}
        />
      </View>

      <Appbar.Content
        style={styles.center}
        color="#000"
        title={title}
        titleStyle={styles.titleStyle}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: layout.fontPixel(24),
    color: '#000',
  },
  center: {},
  backAction: {
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
  },
  container: {
    // position: 'absolute',
    left: -8,
  },
});
