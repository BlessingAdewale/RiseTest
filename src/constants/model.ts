import { ImageProps } from 'react-native';

export interface LoginFormType {
  email_address: string;
  password: string;
}

export interface SignUpFormType {
  email_address: string;
  password: string;
}

export interface axiosSignUpFormType {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email_address: string;
  password: string;
}

export interface TellUsMoreAboutFormType {
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface OnboardingDataType {
  item: {
    id: string;
    image: number;
    title: string;
    subTitle: string;
    backgroundColor: string;
  };
  index: number;
}

export interface bankDataType {
  item: {
    id: string;
    bankDetails: string;
    accountName: string;
  };
}

export interface fundWalletDataType {
  item: {
    id: string;
    title: string;
    rate: string;
    fee: string;
    logo: any;
  };
}
export interface numberPadType {
  item: {
    id: string;
    number: string;
  };
  index: number;
}
export interface accountBalanceDataType {
  item: {
    id: string;
    title: string;
    amount: string;
    TotalGains: string;
  };
}

export interface planDataType {
  item: {
    id: string;
    image: ImageProps;
    title: string;
  };
  index: number;
}
