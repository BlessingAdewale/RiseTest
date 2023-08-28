import { useNavigation } from '@react-navigation/native';
import { GoalNameNavigationProp } from 'navigation/types';

export const useGaolNameHelper = () => {
  const navigation = useNavigation<GoalNameNavigationProp>();

  const navigateToTargetAmount = () => {
    navigation.navigate('TargetAmount');
  };

  return {
    navigateToTargetAmount,
  };
};
