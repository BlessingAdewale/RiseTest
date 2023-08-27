import React from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
import { useCreateUserData } from '@hooks';
import { useAppDispatch, useAppSelector } from '@state';

export const TellUsMoreAboutYou = () => {
  
  const { email_address, password } = useAppSelector((state) => state.credentials);

  const { mutate, isLoading, isError, error, isSuccess } = useCreateUserData();

  const SubmitForm = (values: TellUsMoreAboutFormType) => {
    const registrationData = {  email_address, password, ...values };
    mutate(registrationData);
  };

//  {isSuccess &&  }
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
          nick_name: '',
          date_of_birth: '',
          phone_number: '',
        }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
              <TextInput
                label="Legal First Name"
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                style={styles.firstname}
              />

              <TextInput
                label="Legal Last Name"
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                style={styles.lastname}
              />

              <TextInput
                label="Nick Name"
                value={values.nick_name}
                onChangeText={handleChange('nick_name')}
                onBlur={handleBlur('nick_name')}
                style={styles.nickname}
              />

              <TextInputWithPhoneNumber
                label="Phone Number"
                value={values.phone_number}
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                style={styles.phoneNumber}
              />
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
                loading={isLoading}
                onPress={handleSubmit}
                style={styles.button}
              />
              {/* {isError && <Text>{error}</Text>} */}
            </TouchableWithoutFeedback>
          </>
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
