import { Card } from '../../Primary/Card';
import { planData } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, FlatList, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import PlusSign from '@assets/svg/plussign.svg';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '@globalStyles';
import { useAppDispatch, useAppSelector } from '@state';

export const PlanCard = ({
  ShowFirstIndex,
  onPress,
  onPress2,
}: {
  ShowFirstIndex: boolean;
  onPress: () => void;
  onPress2: () => void;
}) => {
  const { plan } = useAppSelector((state) => state.theplan);

  const renderItem = React.useCallback(({ item, index }: any) => {
    return (
      <View>
        {index === 0
          ? ShowFirstIndex && (
              <Card
                onPress={onPress}
                viewStyle={styles.defaultCard}
                children={
                  <View>
                    <PlusSign
                      width={layout.widthPixel(42.64)}
                      height={layout.heightPixel(42.64)}
                      style={styles.svgPlusSign}
                    />
                    <Text style={[styles.createAnInvestment]}>Create an</Text>
                    <Text style={styles.createAnInvestment}>investment plan</Text>
                  </View>
                }
              />
            )
          : plan && (
              <Card
                onPress={onPress2}
                viewStyle={styles.container}
                children={
                  <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                    <View style={[globalStyles.rowBetween]}>
                      <View
                        style={[
                          {
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            paddingHorizontal: layout.pixelSizeHorizontal(13.22),
                            marginTop: layout.pixelSizeVertical(166),
                          },
                        ]}
                      >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title2}>{item.amount}</Text>
                        <Text style={styles.title}>{item.asset}</Text>
                      </View>
                      <AntDesign
                        name="arrowright"
                        size={24}
                        color="#FFF"
                        style={{
                          marginTop: layout.pixelSizeVertical(174),
                          marginRight: layout.pixelSizeHorizontal(13.2),
                        }}
                      />
                    </View>
                  </ImageBackground>
                }
              />
            )}
      </View>
    );
  }, []);

  return (
    <TouchableOpacity>
      <FlatList
        data={planData.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(20),
    marginLeft: layout.pixelSizeHorizontal(20),
    borderRadius: layout.fontPixel(12),
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    // backgroundColor: '#110',
    width: layout.widthPixel(188),
    height: layout.heightPixel(243),
    flexDirection: 'row',
  },
  defaultCard: {
    marginTop: layout.pixelSizeVertical(20),
    borderRadius: layout.fontPixel(12),
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    // backgroundColor: '#110',
    width: layout.widthPixel(188),
    height: layout.heightPixel(243),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  createAnInvestment: {
    color: '#000',
    fontSize: layout.fontPixel(14),
    fontFamily: 'DMSans_700Bold',
    textAlign: 'center',
  },
  svgPlusSign: {
    marginBottom: layout.pixelSizeVertical(7.59),
    marginLeft: layout.pixelSizeHorizontal(30.5),
  },
  image: {
    overflow: 'hidden',
    width: layout.widthPixel(188),
    height: layout.heightPixel(243),
    borderRadius: layout.fontPixel(12),
  },
  title: {
    fontSize: layout.fontPixel(15),
    color: '#FFF',

    fontFamily: 'DMSans_400Regular',
  },
  title2: {
    fontSize: layout.fontPixel(18),
    color: '#FFF',
  },
});
