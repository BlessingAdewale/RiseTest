import { useNavigation } from '@react-navigation/native';
import { TargetDateNavigationProp } from 'navigation/types';

export const useTargetDateHelper = () => {
  const navigation = useNavigation<TargetDateNavigationProp>();

  const navigateToReview = () => {
    navigation.navigate('Review');
  };

  return {
    navigateToReview,
  };
};
