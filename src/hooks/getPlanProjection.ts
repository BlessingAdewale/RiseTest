import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiPrivate } from './useApiClient';

export const getPlanProjection = async () => {
  try {
    const token: string | null = await AsyncStorage.getItem('token');
    const result = await ApiPrivate(
      '/plans/projection?monthly_investment=<naira>&target_amount=<naira>',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
