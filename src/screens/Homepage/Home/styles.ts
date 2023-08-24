import { theme } from '@constants';
import { layout } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(24.5),
  },
  greetingContainer: {},
  greeting: {
    fontSize: layout.fontPixel(15),
    fontFamily: 'DMSans_400Regular',
    fontWeight: '400',
    color: theme.colors.grey1,
  },
  username: {
    fontSize: layout.fontPixel(20),
    fontFamily: 'DMSans_400Regular',
    fontWeight: '400',
    color: theme.colors.grey1,
  },
  badge: {
    backgroundColor: theme.colors.instructiveRed,
    color: theme.colors.white,
    fontSize: layout.fontPixel(12),
    fontFamily: 'SpaceGrotesk_600SemiBold',
    position: 'absolute',
    bottom: layout.heightPixel(12),
    left: layout.widthPixel(10),
  },
  earn: {
    marginRight: layout.pixelSizeHorizontal(10),
  },
  labelStyle:{  fontFamily: 'DMSans_400Regular', marginBottom: layout.pixelSizeVertical(8), color: theme.colors.background, textAlign: 'center'}
});
