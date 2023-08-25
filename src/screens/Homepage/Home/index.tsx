import { globalStyles } from '@globalStyles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TextButton } from '@components';
import NotificationBell from '@assets/svg/notification.svg';
import { layout } from '@utils';
import { Badge } from 'react-native-paper';
import { theme } from '@constants';
import UncolouredArrow from '@assets/svg/smallrightarrow.svg';
import ColouredArrow from '@assets/svg/colouredsmallrightarrow.svg';

export const Home = () => {
  const [plan, setPlan] = React.useState(false);

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
            />
            <Badge style={styles.badge}>9+</Badge>
          </TouchableOpacity>
        </View>
      </View>
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
      <View style={[globalStyles.rowBetween]}>
        <Text style={styles.createAPlan}> {plan? "Your plans" : "Create a Plan"}</Text>
        <TouchableOpacity  style={[  globalStyles.rowBetween]}  onPress={ plan? ()=> null : ()=> null }   >
          <Text
            style={[
              styles.viewAllPlans,
              { color: plan ? '#0898A0' : '#94A1AD' },
            ]}
          >
            View all plans
          </Text>
          <View style ={styles.arrow} >
          {plan ? (
            <ColouredArrow width={layout.widthPixel(4)} height={layout.heightPixel(9)} />
          ) : (
            <UncolouredArrow width={layout.widthPixel(4)} height={layout.heightPixel(9)} />
          )}
          </View>
   
        </TouchableOpacity>
      </View>
      <Text style={styles.investmentPlan}  > { plan? null : "Start your investment journey by creating a plan"} </Text>
    </SafeAreaView>
  );
};
