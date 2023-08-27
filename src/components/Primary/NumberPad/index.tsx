import { theme } from '@constants';
import { layout } from '@utils';
import { numberPadType } from 'constants/model';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const data = [
  {
    id: '1',
    number: '1',
  },
  {
    id: '2',
    number: '2',
  },
  {
    id: '3',
    number: '3',
  },
  {
    id: '4',
    number: '4',
  },
  {
    id: '5',
    number: '5',
  },
  {
    id: '6',
    number: '6',
  },
  {
    id: '7',
    number: '7',
  },
  {
    id: '8',
    number: '8',
  },
  {
    id: '9',
    number: '9',
  },
  {
    id: '10',
    number: '.',
  },
  {
    id: '11',
    number: '0',
  },
  {
    id: '12',
    number: 'backspace-outline',
  },
];

export const NumberPad = () => {
  const [value, setValue] = React.useState('');

  const renderItem = React.useCallback(({ item, index }: numberPadType) => {
    return (
      <TouchableOpacity
        onPress={
          data.length === index + 1
            ? () => setValue(value.slice(0, -1))
            : () => setValue(item.number)
        }
        style={styles.numberContainer}
      >
        {index === 11 ? (
          <Avatar.Icon
            size={72}
            style={styles.circleButton}
            color={theme.colors.teal1}
            icon={item.number}
          />
        ) : (
          <Avatar.Text
            size={74}
            label={item.number}
            color={theme.colors.teal1}
            labelStyle={styles.labelStyle}
            style={styles.circleButton}
          />
        )}
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: layout.pixelSizeHorizontal(34.98),
    marginRight: layout.pixelSizeHorizontal(4.02),
    marginTop: layout.pixelSizeVertical(129),
    height: layout.heightPixel(812),
  },
  circleButton: {
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  labelStyle: {
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: layout.fontPixel(30),
  },
  numberContainer: {
    margin: layout.fontPixel(12),
    //    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
