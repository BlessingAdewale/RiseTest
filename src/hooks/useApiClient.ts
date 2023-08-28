import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL: string = 'https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1';

const token: Promise<string | null> = AsyncStorage.getItem('token');

// export const getAuthorizationHeader: () => string = () => `Bearer ${token}`;

export const ApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
