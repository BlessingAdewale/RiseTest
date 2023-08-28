import { PlanQuestions, SingleButton, TextInput } from '@components';
import { layout } from '@utils';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useGaolNameHelper } from './useGameNameHelper';

export const GoalName = () => {
  const { navigateToTargetAmount } = useGaolNameHelper();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <PlanQuestions
        title="Goal name"
        questionNumber={1}
        question="What are you saving for"
        progress={0.33}
      />
      <View style={{ paddingHorizontal: layout.pixelSizeHorizontal(20) }}>
        <TextInput label="Reason For Saving" style={{ marginTop: layout.pixelSizeVertical(26) }} />
        <SingleButton
          mode="contained"
          children="Continue"
          onPress={navigateToTargetAmount}
          style={{ marginTop: layout.pixelSizeVertical(26) }}
        />
      </View>
    </SafeAreaView>
  );
};
