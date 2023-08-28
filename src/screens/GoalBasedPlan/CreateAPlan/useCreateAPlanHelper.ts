import { useNavigation } from '@react-navigation/native';
import { CreateAPlanNavigationProp } from 'navigation/types';

export const useCreateAPlanHelper = () => {
  const navigation = useNavigation<CreateAPlanNavigationProp>();

  const navigateToGoalName = () => {
    navigation.navigate('GoalName');
  };

  return {
    navigateToGoalName,
  };
};
