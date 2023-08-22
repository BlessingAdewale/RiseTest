import * as yup from 'yup';

export const useSchemaHelper = () => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email Address or password is Incorrect')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const signUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least two of your names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/\+\d{13}/, 'Enter a valid phone number, e.g +234')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email address')
      .required('Email address is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const passwordValidationSchema = yup.object().shape({
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return {
    loginValidationSchema,
    signUpValidationSchema,
    passwordValidationSchema,
  };
};
