import { useNavigation } from '@react-navigation/native';
import { DoneCreatingPlanNavigationProp } from 'navigation/types';

export const useDoneCreatingPlanHelper = () => {
  const navigation = useNavigation<DoneCreatingPlanNavigationProp>();

  const navigateToViewPlan = () => {
    navigation.navigate('ViewPlan');
  };

  return {
    navigateToViewPlan,
  };
};
