import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiClient } from './useApiClient';

export const getPlans = async () => {
  try {
    const token: string | null = await AsyncStorage.getItem('token');
    const result = await ApiClient('/plans', {
      method: 'GET',
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
