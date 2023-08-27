import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Card as CardPaper } from 'react-native-paper';

type ContainerProps = ScrollView['props'] & {
  children: Element;
  viewStyle?: StyleProp<ViewStyle> | { width: number; height: number; borderRadius: number };

  disabled: boolean;
  onPress: () => void;
};

export const Card = ({
  viewStyle,
  children,

  disabled,
  onPress,

  ...props
}: any) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} onPress={onPress} style={viewStyle}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
