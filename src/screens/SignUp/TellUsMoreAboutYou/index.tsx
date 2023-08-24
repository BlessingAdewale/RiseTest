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

interface ValuesType {
  firstname: string;
  lastname: string;
  nickname: string;
  phoneNumber: string;
  dateofbirth: string;
}

export const TellUsMoreAboutYou = () => {
  const [loading, setLoading] = React.useState(false);

  const SubmitForm = (values: ValuesType) => {};

  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Tell Us More About You"
        subTitle="Please use your name as it appears on your ID."
      />

      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          nickname: '',
          dateofbirth: '',
          phoneNumber: '',
        }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
              <TextInput
                label="Legal First Name"
                value={values.firstname}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                style={styles.firstname}
              />

              <TextInput
                label="Legal Last Name"
                value={values.lastname}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                style={styles.lastname}
              />

              <TextInput
                label="Nick Name"
                value={values.nickname}
                onChangeText={handleChange('nickname')}
                onBlur={handleBlur('nickname')}
                style={styles.nickname}
              />

              <TextInputWithPhoneNumber
                label="Phone Number"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                style={styles.phoneNumber}
              />
              <TextInputWithCalendar
                label="Date Of Birth"
                value={values.dateofbirth}
                onChangeText={handleChange('dateofbirth')}
                onBlur={handleBlur('dateofbirth')}
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
