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

export type OnBoardingNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Onboarding'>;
export type CreateAnAccountNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'CreateAnAccount'
>;
export type DoneRegisteringNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'DoneRegistering'
>;
export type TellUsMoreAboutYouNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'TellUsMoreAboutYou'
>;
export type ConfirmPinNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ConfirmPin'>;
export type CreatePinNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'CreatePin'>;
export type DoneCreatingPinNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'DoneCreatingPin'
>;
export type SignInNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

export type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeStack'>;
export type HomeNavigationProp = NativeStackNavigationProp<MainBottomTabParamList, 'Home'>;
export type CreateAPlanNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateAPlan'
>;
export type DoneCreatingPlanNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DoneCreatingPlan'
>;
export type GoalNameNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GoalName'>;
export type ReviewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Review'>;
export type TargetAmountNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TargetAmount'
>;
export type TargetDateNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TargetDate'>;
export type ViewPlanNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ViewPlan'>;
export type ChooseFromPlansNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ChooseFromPlans'
>;
export type FundWalletNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FundWallet'>;
export type SelectBankNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectBank'>;
