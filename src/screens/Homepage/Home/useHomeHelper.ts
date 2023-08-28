import { useNavigation } from '@react-navigation/native';
import { HomeTabNavigationProp } from 'navigation/types';

export const useHomeHelper = () => {
  const navigation = useNavigation<HomeTabNavigationProp>();

  const navigateToCreateAPlan = () => {
    navigation.navigate('CreateAPlan');
  };

  return {
    navigateToCreateAPlan,
  };
};
