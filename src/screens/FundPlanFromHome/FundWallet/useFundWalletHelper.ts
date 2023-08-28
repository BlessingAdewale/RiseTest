import { useNavigation } from '@react-navigation/native';
import { FundWalletNavigationProp } from 'navigation/types';

export const useFundWalletHelper = () => {
  const navigation = useNavigation<FundWalletNavigationProp>();

  const navigateToChooseFromPlans = () => {
    navigation.navigate('ChooseFromPlans');
  };

  return {
    navigateToChooseFromPlans,
  };
};
