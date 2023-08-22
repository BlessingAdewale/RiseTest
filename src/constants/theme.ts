import { DefaultTheme, MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,

  dark: false,
  colors: {
    ...DefaultTheme.colors,
    teal1: '#0898A0',
    teal2: '#41BCC4',
    instructiveRed: '#EB5757',
    instructiveGreen: '#27BF41',
    text: '#FFFFFF',
    textInputText: '#292F33',
    textSoft: '#71879C',
    neutral: '#FFFFFF',
    white:'#FFFFFF',
    black: '#222222',
    indigo: '#B80074',
    orange: '#FE7122',
    text004: '#94A1AD'
  },
};
