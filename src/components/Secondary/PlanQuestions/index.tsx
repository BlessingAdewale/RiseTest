import { globalStyles } from '@globalStyles';
import { AppBar } from '../../Primary/AppBar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { theme } from '@constants';
import { TextInput } from '../../Primary/TextInput';
import { TextInputWithCalendar } from '../../Primary/TextInputWthCalendar';
import { SingleButton } from '../../Primary/SingleButton';
import { layout } from '@utils';

export const PlanQuestions = ({
  title,
  questionNumber,
  valueForBoth,
  valueForCalendar,
  progress,
  question,
}: any) => {
  return (
    <View style={[{ paddingHorizontal: layout.pixelSizeHorizontal(20) }]}>
      <AppBar icon="arrow-left" title={title} />
      <Text style={styles.questionNumber}>Question {questionNumber} of 3</Text>
      <ProgressBar progress={progress} color={theme.colors.teal1} style={styles.progressBar} />
      <Text style={styles.question}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionNumber: {
    color: theme.colors.textSoft,
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    marginTop: layout.pixelSizeVertical(37),
  },
  question: {
    color: '#222',
    fontSize: layout.fontPixel(17),
    fontFamily: 'DMSans_700Bold',
    marginTop: layout.pixelSizeVertical(54),
  },
  progressBar: {
    height: layout.heightPixel(9),
    borderRadius: layout.fontPixel(25),
    marginTop: layout.pixelSizeVertical(21),
  },
});
