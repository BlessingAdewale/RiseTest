import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiClient } from './useApiClient';
import { LoginFormType } from 'constants/model';

export const loginUser: (loginValues: LoginFormType) => Promise<any> = async (
  loginValues: LoginFormType,
) => {
  try {
    const result = await ApiClient('/sessions', {
      method: 'POST',
      data: loginValues,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const makeAxiosRequest = async (
  resource: string,
  method: string,
  payload: any,
  option: any = null,
) => {
  try {
    const token: string | null = await AsyncStorage.getItem('token');
    const result = await ApiClient(resource, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: payload,
    });
    return result;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
