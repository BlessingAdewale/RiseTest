import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/',
});

import AsyncStorage from '@react-native-async-storage/async-storage';

export const request = ({ ...options }) => {
  apiClient.defaults.headers.common.Authorization = `Bearer Token`;
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error;
  };
  return apiClient(options).then(onSuccess).catch(onError);
};
