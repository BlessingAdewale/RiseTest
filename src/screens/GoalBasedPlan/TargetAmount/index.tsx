import { PlanQuestions, SingleButton, TextInput } from '@components';
import { layout } from '@utils';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const TargetAmount = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <PlanQuestions
        title="Target Amount"
        questionNumber={2}
        question="How much do you need?"
        progress={0.66}
      />
      <View style={{ paddingHorizontal: layout.pixelSizeHorizontal(20) }}>
        <TextInput label="Your need" style={{ marginTop: layout.pixelSizeVertical(26) }} />
        <SingleButton
          mode="contained"
          children="Continue"
          style={{ marginTop: layout.pixelSizeVertical(26) }}
        />
      </View>
    </SafeAreaView>
  );
};
