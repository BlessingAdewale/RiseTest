import { useNavigation } from '@react-navigation/native';
import { ReviewNavigationProp } from 'navigation/types';

export const useReviewHelper = () => {
  const navigation = useNavigation<ReviewNavigationProp>();

  const navigateToDoneCreatingPlan = () => {
    navigation.navigate('DoneCreatingPlan');
  };
  const navigateToCreateAPlan = () => {
    navigation.navigate('CreateAPlan');
  };

  return {
    navigateToDoneCreatingPlan,
    navigateToCreateAPlan,
  };
};
