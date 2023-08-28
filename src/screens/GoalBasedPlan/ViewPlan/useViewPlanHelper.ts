import { useNavigation } from '@react-navigation/native';
import { ViewPlanNavigationProp } from 'navigation/types';

export const useViewPlanHelper = () => {
  const navigation = useNavigation<ViewPlanNavigationProp>();

  const navigateToFundWallet = () => {
    navigation.navigate('FundWallet');
  };

  return {
    navigateToFundWallet,
  };
};
