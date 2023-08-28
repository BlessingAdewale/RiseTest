import { useNavigation } from '@react-navigation/native';
import { TargetAmountNavigationProp } from 'navigation/types';

export const useTargetAmountHelper = () => {
  const navigation = useNavigation<TargetAmountNavigationProp>();

  const navigateToTargetDate = () => {
    navigation.navigate('TargetDate');
  };

  return {
    navigateToTargetDate,
  };
};
