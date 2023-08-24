import { SignUpHeader, SingleButton, TextInput, TextInputWithPassword } from '@components';
import { globalStyles } from '@globalStyles';
import React from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import { useSchemaHelper } from '@constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { layout } from '@utils';
import Checked from '@assets/svg/check.svg';
import Unchecked from '@assets/svg/uncheck.svg';

interface ValuesType {
  email: string;
  password: string;
}

export const CreateAnAccount = () => {
  const { passwordValidationSchema } = useSchemaHelper();
  const [loading, setLoading] = React.useState(false);

  const SubmitForm = (values: ValuesType) => {};

  return (
    <SafeAreaView style={[globalStyles.wrapper, globalStyles.container]}>
      <SignUpHeader
        title="Create an account"
        subTitle="Start building your dollar-denominated 
investment portfolio"
      />
      <Formik
        validationSchema={passwordValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => SubmitForm(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors, touched }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.textInput}>
              <TextInput
                label="Email Address"
                value={values.email}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorText={errors.email}
              />
              <TextInputWithPassword
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.passwordTextinput}
              />

              <View style={[globalStyles.rowStart]}>
                {errors.password && touched.password ? <Checked /> : <Unchecked />}
                <Text style={styles.aboveButtonText}>Minimum of 8 characters</Text>
              </View>
              <View style={[globalStyles.rowStart]}>
                {errors.password && touched.password ? <Checked /> : <Unchecked />}
                <Text style={styles.aboveButtonText2}>One UPPERCASE character</Text>
              </View>
              <View style={[globalStyles.rowStart]}>
                {errors.password && touched.password ? <Checked /> : <Unchecked />}
                <Text style={styles.aboveButtonText}>One unique character (e.g: !@#$%^&*?)</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => null}>
              <SingleButton
                mode="contained"
                children="Sign Up"
                loading={loading}
                disabled={!isValid}
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
