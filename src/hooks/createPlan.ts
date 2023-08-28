import { axiosSignUpFormType } from 'constants/model';
import { ApiClient } from './useApiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createPlan: (data: any) => Promise<any> = async (planValues: any) => {
  try {
    const token: string | null = await AsyncStorage.getItem('token');
    const result = await ApiClient('/plans', {
      method: 'POST',
      data: planValues,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
