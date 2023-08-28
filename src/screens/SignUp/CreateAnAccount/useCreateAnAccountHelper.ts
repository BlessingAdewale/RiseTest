import { useNavigation } from '@react-navigation/native';
import { CreateAnAccountNavigationProp } from 'navigation/types';

export const useCreateAnAccountHelper = () => {
  const navigation = useNavigation<CreateAnAccountNavigationProp>();

  const navigateToTellUsMoreAboutYou = () => {
    navigation.navigate('TellUsMoreAboutYou');
  };

  return {
    navigateToTellUsMoreAboutYou,
  };
};
