import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import { Formik } from 'formik';
import {
  SignUpHeader,
  SingleButton,
  TextInput,
  TextInputWithCalendar,
  TextInputWithPhoneNumber,
} from '@components';
import { globalStyles } from '@globalStyles';
import { theme } from '@constants';
import { layout } from '@utils';
import { TellUsMoreAboutFormType } from 'constants/model';
import { useAppDispatch, useAppSelector } from '@state';
import { TellUsMoreAboutYouNavigationProp } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '@hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TellUsMoreAboutYou = () => {
  const navigation = useNavigation<TellUsMoreAboutYouNavigationProp>();
  const { email_address, password } = useAppSelector((state) => state.credentials);

  const [loading, setLoading] = React.useState(false);

  // const { mutate, isLoading, isError, error, isSuccess } = useCreateUserData();

  const SubmitForm = (values: TellUsMoreAboutFormType) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    email_address.toLowerCase();
    setLoading(true);
    registerUser({ ...values, email_address, password })
      .then((result) => {
        setLoading(false);
        console.log(result.data);
        if (result?.status == 200) {
          navigation.replace('DoneRegistering');
        }
        if (result?.status == 'error') {
          Alert.alert('Erorr Message', result.data.message);
          setLoading(false);
        }
      })
      .catch((err) => setLoading(false));
  };

  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Tell Us More About You"
        subTitle="Please use your name as it appears on your ID."
      />

      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          date_of_birth: '',
        }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                label="Legal First Name"
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                style={styles.firstname}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                label="Legal Last Name"
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                style={styles.lastname}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                label="Nick Name"
                onChangeText={handleChange('nick_name')}
                onBlur={handleBlur('nick_name')}
                style={styles.nickname}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInputWithPhoneNumber
                label="Phone Number"
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                style={styles.phoneNumber}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInputWithCalendar
                label="Date Of Birth"
                value={values.date_of_birth}
                onChangeText={handleChange('date_of_birth')}
                onBlur={handleBlur('date_of_birth')}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => null}>
              <SingleButton
                mode="contained"
                children="Continue"
                loading={loading}
                onPress={handleSubmit}
                style={styles.button}
              />
              {/* {isError && <Text>{error}</Text>} */}
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>

      <View style={styles.bottomText}>
        <Text>
          By clicking Continue, you agree to our
          <Text style={styles.colouredBottomText} onPress={() => null}>
            {' '}
            Terms of Service
          </Text>{' '}
          and
          <Text style={styles.colouredBottomText} onPress={() => null}>
            {' '}
            Privacy Policy.
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  bottomText: {
    marginTop: layout.pixelSizeVertical(27),
    color: theme.colors.darkText,
    fontSize: layout.fontPixel(12),
    fontFamily: 'DMSans_400Regular',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 55,
  },
  button: {
    marginTop: layout.pixelSizeVertical(12),
  },
  colouredBottomText: {
    color: theme.colors.teal1,
    fontSize: layout.fontPixel(12),
    fontFamily: 'DMSans_400Regular',
    textAlign: 'center',
  },
  firstname: {
    marginTop: layout.pixelSizeVertical(27),
    marginBottom: layout.pixelSizeVertical(18),
  },
  lastname: {
    marginBottom: layout.pixelSizeVertical(18),
  },
  nickname: {
    marginBottom: layout.pixelSizeVertical(18),
  },
  phoneNumber: {
    marginBottom: layout.pixelSizeVertical(18),
  },
});
