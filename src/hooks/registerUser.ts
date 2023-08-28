import { axiosSignUpFormType } from 'constants/model';
import { ApiClient } from './useApiClient';

export const registerUser: (data: axiosSignUpFormType) => Promise<any> = async (
  registrationValues: axiosSignUpFormType,
) => {
  try {
    const result = await ApiClient('/users', {
      method: 'POST',
      data: registrationValues,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
