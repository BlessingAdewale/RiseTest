import { SignUpHeader, SingleButton, TextInput, TextInputWithPassword } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { theme, useSchemaHelper } from '@constants';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { layout } from '@utils';
import { LoginFormType } from 'constants/model';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignInNavigationProp } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '@hooks';

export const SignIn = () => {
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation<SignInNavigationProp>();

  const SubmitForm = (values: LoginFormType) => {
    values.email_address = values.email_address.toLowerCase();
    setLoading(true);
    loginUser({ ...values })
      .then((result) => {
        console.log(result.data);
        setLoading(false);
        if (result?.status == 200) {
          navigation.replace('CreatePin');
          AsyncStorage.setItem('token', result.data.token);
        }
        if (result?.status == 'undefined') {
          Alert.alert('Erorr Message', result.data.message);
          setLoading(false);
        }
      })
      .catch((err) => setLoading(false));
  };

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
          <View style={styles.textInput}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                label="Email Address"
                value={values.email_address}
                keyboardType="email-address"
                onChangeText={handleChange('email_address')}
                onBlur={handleBlur('email_address')}
                errorText={errors.email_address}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInputWithPassword
                label="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={styles.passwordTextinput}
              />
            </TouchableWithoutFeedback>

            <SingleButton
              mode="contained"
              children="Sign In"
              loading={loading}
              disabled={!isValid}
              onPress={handleSubmit}
              style={styles.button}
            />
          </View>
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
