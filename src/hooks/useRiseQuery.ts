import { axiosSignUpFormType, LoginFormType } from '../constants/model';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from './useAxiosInstance';
const createUser = (registrationData: axiosSignUpFormType) => {
  return request({ url: 'users', method: 'post', data: registrationData });
};


const loginUser = ( loginData: LoginFormType) =>{
  return  request ({
url: "sessions", method: 'post', data: loginData
  })
}


export const useCreateUserData = () => {
  return useMutation(createUser);
};


export const useLoginUserData =()=>{

return useMutation(loginUser)

}