import { SignUpHeader, SingleButton, TextInput, TextInputWithPassword } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView, Keyboard, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { theme, useSchemaHelper } from '@constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { layout } from '@utils';
import { LoginFormType } from 'constants/model';

export const SignIn = () => {
  const [loading, setLoading] = React.useState(false);

  //  const { passwordValidationSchema } = useSchemaHelper()
  const SubmitForm = (values: LoginFormType) => {};

  return (
    <SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
      <SignUpHeader
        title="Welcome back"
        subTitle="Let’s get you logged in to get back to building your dollar-denominated investment portfolio."
      />

      <Formik
        initialValues={{ email_address: '', password: '' }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.textInput}>
              <TextInput
                label="Email Address"
                value={values.email_address}
                keyboardType="email-address"
                onChangeText={handleChange('email_address')}
                onBlur={handleBlur('email')}
                errorText={errors.email_address}
              />
              <TextInputWithPassword
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.passwordTextinput}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => null}>
              <SingleButton
                mode="contained"
                children="Sign In"
                loading={loading}
                disabled={!isValid}
                onPress={handleSubmit}
                style={styles.button}
              />
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>

      <Text style={styles.forgotPassword} onPress={() => null}>
        I forgot my password
      </Text>
      <View>
        <Text style={styles.noAccount}>
          Don't have an account?{' '}
          <Text onPress={() => null} style={styles.colouredNoAccount}>
            Sign up{' '}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: layout.pixelSizeVertical(38),
  },
  button: {
    marginTop: layout.pixelSizeVertical(20),
  },
  passwordTextinput: {
    marginTop: layout.pixelSizeVertical(17),
  },
  forgotPassword: {
    textAlign: 'center',
    color: theme.colors.teal1,
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    marginTop: layout.pixelSizeVertical(32),
    marginBottom: layout.pixelSizeVertical(269),
    fontWeight: '600',
  },
  noAccount: {
    textAlign: 'center',
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    color: theme.colors.textSoft,
  },
  colouredNoAccount: {
    color: theme.colors.teal1,
  },
});
