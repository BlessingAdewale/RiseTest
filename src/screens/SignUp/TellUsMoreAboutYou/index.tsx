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
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />

              <TextInput
                label="Legal Last Name"
                value={values.lastname}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />

              <TextInput
                label="Nick Name"
                value={values.nickname}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />

              <TextInputWithPhoneNumber
                label="Phone Number"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
              />
              <TextInputWithCalendar
                label="DateOfBirth"
                value={values.dateofbirth}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => null}>
              <SingleButton
                mode="contained"
                children="Continue"
                loading={loading}
                onPress={handleSubmit}
              />
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>

      <View style={styles.bottomText}>
        <Text>
          By clicking Continue, you agree to our
          <Text style={styles.colouredBottomText}>Terms of Service</Text> and
          <Text style={styles.colouredBottomText}>Privacy Policy.</Text>
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
    textAlign: 'center',
  },
  colouredBottomText: {
    color: theme.colors.teal1,
    fontSize: layout.fontPixel(12),
    fontFamily: 'DMSans_400Regular',
    textAlign: 'center',
  },
});
