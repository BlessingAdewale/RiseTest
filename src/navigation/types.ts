import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  HomeStack: undefined;
  CreateAPlan: undefined;
  DoneCreatingPlan: undefined;
  GoalName: undefined;
  Review: undefined;
  TargetAmount: undefined;
  TargetDate: undefined;
  ViewPlan: undefined;
  ChooseFromPlans: undefined;
  FundWallet: undefined;
  SelectBank: undefined;
};
export type AuthStackParamList = {
  Onboarding: undefined;
  CreateAnAccount: undefined;
  DoneRegistering: undefined;
  TellUsMoreAboutYou: undefined;
  ConfirmPin: undefined;
  CreatePin: undefined;
  DoneCreatingPin: undefined;
  SignIn: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Account: undefined;
  Feed: undefined;
  Wallet: undefined;
  Plans: undefined;
};
