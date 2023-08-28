import { useNavigation } from '@react-navigation/native';
import { ChooseFromPlansNavigationProp } from 'navigation/types';

export const useChooseFromPlansHelper = () => {
  const navigation = useNavigation<ChooseFromPlansNavigationProp>();

  const navigateToSelectBank = () => {
    navigation.navigate('SelectBank');
  };

  return {
    navigateToSelectBank,
  };
};
