import { useNavigation } from '@react-navigation/native';
import { OnBoardingNavigationProp } from 'navigation/types';

export const useOnBoardingHelper = () => {
  const navigation = useNavigation<OnBoardingNavigationProp>();

  const navigateToCreateAnAccount = () => {
    navigation.navigate('CreateAnAccount');
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return {
    navigateToCreateAnAccount,
    navigateToSignIn,
  };
};
