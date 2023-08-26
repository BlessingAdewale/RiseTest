import { PlanQuestions, SingleButton, TextInputWithCalendar } from '@components';
import { layout } from '@utils';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const TargetDate = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <PlanQuestions
        title="Target Date"
        questionNumber={3}
        question="When do you want to withdraw?"
        progress={1}
      />
      <View style={{ paddingHorizontal: layout.pixelSizeHorizontal(20) }}>
        <TextInputWithCalendar
          label="Your withdrawal time"
          style={{ marginTop: layout.pixelSizeVertical(26) }}
        />
        <SingleButton
          mode="contained"
          children="Continue"
          style={{ marginTop: layout.pixelSizeVertical(26) }}
        />
      </View>
    </SafeAreaView>
  );
};
