import { useNavigation } from '@react-navigation/native';
import { DoneRegisteringNavigationProp } from 'navigation/types';

export const useDoneRegisteringHelper = () => {
  const navigation = useNavigation<DoneRegisteringNavigationProp>();

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return {
    navigateToSignIn,
  };
};
