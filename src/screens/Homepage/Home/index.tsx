import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TextButton } from '@components';
import NotificationBell from '@assets/svg/notification.svg';
import { layout } from '@utils';
import { Badge } from 'react-native-paper';
import { theme } from '@constants';

export const Home = () => {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting: string;

  if (currentTime >= 0 && currentTime <= 12) {
    greeting = 'Good morning';
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <View style={[globalStyles.rowBetween, styles.container]}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>{greeting} ☀️</Text>
          <Text style={styles.username}>Deborah</Text>
        </View>
        <View style={[globalStyles.rowBetween]}>
          <TextButton
            children="Earn 3% bonus"
            style={styles.earn}
            width={layout.widthPixel(111)}
            onPress={() => null}
            buttonColor={theme.colors.teal1}
            borderRadius={layout.fontPixel(16)}
            height={layout.heightPixel(30)}
          />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <NotificationBell
              width={layout.widthPixel(19.895)}
              height={layout.heightPixel(21.512)}
            />
            <Badge style={styles.badge}>9+</Badge>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
