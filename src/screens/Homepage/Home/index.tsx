import { globalStyles } from '@globalStyles';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { AccountBalanceSlide, Card, PlanCard, TextButton } from '@components';
import NotificationBell from '@assets/svg/notification.svg';
import { layout } from '@utils';
import { Badge } from 'react-native-paper';
import { theme } from '@constants';
import UncolouredArrow from '@assets/svg/smallrightarrow.svg';
import ColouredArrow from '@assets/svg/colouredsmallrightarrow.svg';
import QuestionMark from '@assets/svg/questionMark.svg';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ShareLogo from '@assets/svg/share.svg';
import RiseLogo from '@assets/svg/riselogo.svg';
import { useAppDispatch, useAppSelector } from '@state';

export const Home = () => {
  const { plan } = useAppSelector((state) => state.theplan);

  const tabBarHeight = useBottomTabBarHeight();

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
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingHorizontal: layout.pixelSizeHorizontal(20),
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight + layout.pixelSizeVertical(36.67) }}
      >
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
              fontfaimily=""
              labelStyle={styles.labelStyle}
              onPress={() => null}
              textColor={theme.colors.background}
              buttonColor={theme.colors.teal1}
              borderRadius={layout.fontPixel(16)}
            />
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <NotificationBell
                width={layout.widthPixel(19.895)}
                height={layout.heightPixel(21.512)}
                style={styles.notificationBell}
              />
              <Badge style={styles.badge}>9+</Badge>
            </TouchableOpacity>
          </View>
        </View>

        <AccountBalanceSlide />
        <TextButton
          mode="outlined"
          children="Add money"
          icon="plus"
          buttonColor="#FFF"
          textColor={theme.colors.teal1}
          borderRadius={layout.fontPixel(5)}
          fontFamily="DMSans_700Bold"
          style={styles.addMoney}
          contentStyle={{
            height: layout.heightPixel(56),
          }}
          onPress={() => null}
        />
        <View style={[globalStyles.rowBetween, styles.header2]}>
          <Text style={styles.createAPlan}> {plan ? 'Your plans' : 'Create a Plan'}</Text>
          <TouchableOpacity
            style={[globalStyles.rowBetween]}
            disabled={plan ? false : true}
            onPress={() => null}
          >
            <Text style={[styles.viewAllPlans, { color: plan ? '#0898A0' : '#94A1AD' }]}>
              View all plans
            </Text>
            <View style={styles.arrow}>
              {plan ? (
                <ColouredArrow width={layout.widthPixel(4)} height={layout.heightPixel(9)} />
              ) : (
                <UncolouredArrow width={layout.widthPixel(4)} height={layout.heightPixel(9)} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.investmentPlan}>
          {' '}
          {plan ? null : 'Start your investment journey by creating a plan'}{' '}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <PlanCard ShowFirstIndex={true} />
        </View>
        <Card
          disabled={true}
          // viewStyle={styles.shadowCard}
          children={
            <View style={[styles.questionMarkButton, styles.shadowCard, globalStyles.rowBetween]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <QuestionMark width={layout.widthPixel(24)} height={layout.heightPixel(24)} />
                <Text style={styles.needHelp}>Need help?</Text>
              </View>
              <TextButton
                children="Contact us"
                mode="contained"
                buttonColor={theme.colors.teal1}
                borderRadius={layout.fontPixel(6)}
                textColor={theme.colors.background}
                onPress={() => null}
              />
            </View>
          }
        />
        <Card
          disabled={true}
          viewStyle={styles.qouteButton}
          children={
            <View style={styles.insideQouteButton}>
              <Text style={styles.qouteHeading}>TODAY’S QUOTE </Text>
              <Text style={styles.dash}>_</Text>
              <Text style={styles.qoute}>
                We have no intention of rotating capital out of strong multi-year investments
                because they’ve recently done well or because ‘growth’ has out performed ‘value’.
              </Text>
              <View style={[globalStyles.rowBetween]}>
                <Text style={styles.qouteAuthor}>Carl Sagan</Text>
                <TouchableOpacity style={styles.shareButtonContainer} onPress={() => null}>
                  <ShareLogo width={layout.widthPixel(18)} height={layout.heightPixel(19.91)} />
                </TouchableOpacity>
              </View>
            </View>
          }
        />

        <View style={[globalStyles.rowCenter, { marginTop: layout.pixelSizeVertical(32) }]}>
          <RiseLogo width={layout.widthPixel(80.56)} height={layout.heightPixel(24.317)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
