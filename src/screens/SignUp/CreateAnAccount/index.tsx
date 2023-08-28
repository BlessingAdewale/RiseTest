import { SignUpHeader, SingleButton, TextInput, TextInputWithPassword } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { useSchemaHelper } from '@constants';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { layout } from '@utils';
import { getEmail, getPassword, useAppDispatch, useAppSelector } from '@state';
import Checked from '@assets/svg/check.svg';
import Unchecked from '@assets/svg/uncheck.svg';
import { SignUpFormType } from 'constants/model';
import { useCreateAnAccountHelper } from './useCreateAnAccountHelper';
import { useNavigation } from '@react-navigation/native';
import { CreateAnAccountNavigationProp } from 'navigation/types';

export const CreateAnAccount = () => {
  const navigation = useNavigation<CreateAnAccountNavigationProp>();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);

  const { navigateToTellUsMoreAboutYou } = useCreateAnAccountHelper();
  const { passwordValidationSchema } = useSchemaHelper();

  const SubmitForm = (values: SignUpFormType) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    // values.email_address = values.email_address.toLowerCase();
    dispatch(getEmail(values.email_address));
    dispatch(getPassword(values.password));
    navigation.navigate('TellUsMoreAboutYou');
    setLoading(true);
  };

  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Create an account"
        subTitle="Start building your dollar-denominated 
investment portfolio"
      />
      <Formik
        validationSchema={passwordValidationSchema}
        initialValues={{ email_address: '', password: '' }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                label="Email Address"
                value={values.email_address}
                keyboardType="email-address"
                onChangeText={handleChange('email_address')}
                onBlur={handleBlur('email_address')}
                errorText={errors.email_address}
                style={styles.textInput}
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
            <View style={[globalStyles.rowStart]}>
              {touched.password && !errors.password ? <Checked /> : <Unchecked />}
              <Text style={styles.aboveButtonText}>Minimum of 8 characters</Text>
            </View>
            <View style={[globalStyles.rowStart]}>
              {touched.password && !errors.password ? <Checked /> : <Unchecked />}
              <Text style={styles.aboveButtonText2}>One UPPERCASE character</Text>
            </View>
            <View style={[globalStyles.rowStart]}>
              {touched.password && !errors.password ? <Checked /> : <Unchecked />}
              <Text style={styles.aboveButtonText}>One unique character (e.g: !@#$%^&*?)</Text>
            </View>

            <TouchableWithoutFeedback onPress={() => null}>
              <SingleButton
                mode="contained"
                children="Sign Up"
                loading={loading}
                disabled={!touched.password && !errors.password ? isValid : !isValid}
                onPress={handleSubmit}
              />
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: layout.pixelSizeVertical(38),
  },
  passwordTextinput: {
    marginTop: layout.pixelSizeVertical(17),
    marginBottom: layout.pixelSizeVertical(17),
  },

  aboveButtonText: {
    color: '#000',
    fontSize: layout.fontPixel(13),
    fontFamily: 'DMSans_400Regular',
    paddingLeft: layout.pixelSizeHorizontal(8),
  },
  aboveButtonText2: {
    color: '#000',
    fontSize: layout.fontPixel(13),
    fontFamily: 'DMSans_400Regular',
    marginVertical: layout.pixelSizeVertical(12),
    paddingLeft: layout.pixelSizeHorizontal(8),
  },
});
