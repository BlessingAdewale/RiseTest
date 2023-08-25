import { theme } from '@constants';
import { layout } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(34.5),
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
  addMoney: {
    borderColor: 'rgba(113, 135, 156, 0.20)',
    marginTop: layout.pixelSizeVertical(24.5),
  },

  earn: {
    marginRight: layout.pixelSizeHorizontal(10),
  },
  labelStyle: {
    fontFamily: 'DMSans_400Regular',
    marginVertical: layout.pixelSizeVertical(7),
    color: theme.colors.background,
    textAlign: 'center',
  },

  createAPlan: {
    fontSize: layout.fontPixel(18),
    fontFamily: 'SpaceGrotesk_400Regular',
    color: "#000",

  },

  viewAllPlans: {
   fontFamily: 'SpaceGrotesk_700Bold',
   fontSize: layout.fontPixel(14),
 marginRight: 20
  },

  arrow:{
    position: 'absolute',
    left: layout.pixelSizeHorizontal(94.5),
    top: 8,
    
  },

  investmentPlan:{
color: theme.colors.textSoft,
fontFamily: 'DMSans_400Regular',
fontSize: layout.fontPixel(14),
marginTop: layout.pixelSizeVertical(12),
  }
});
