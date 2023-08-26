import { theme } from '@constants';
import { layout } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(34.5),
  },
  header2: {
    marginTop: layout.pixelSizeVertical(31),
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
    left: layout.widthPixel(8),
  },
  addMoney: {
    borderColor: 'rgba(113, 135, 156, 0.20)',
    marginTop: layout.pixelSizeVertical(24.5),
  },
  notificationBell: {
    marginRight: layout.pixelSizeHorizontal(7.5),
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
    color: '#000',
  },

  viewAllPlans: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: layout.fontPixel(14),
    marginRight: layout.pixelSizeHorizontal(19.5),
  },

  arrow: {
    position: 'absolute',
    left: layout.pixelSizeHorizontal(94.5),
    top: 8,
  },

  investmentPlan: {
    color: theme.colors.textSoft,
    fontFamily: 'DMSans_400Regular',
    fontSize: layout.fontPixel(14),
    marginTop: layout.pixelSizeVertical(12),
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
  shadowCard: {
    marginTop: layout.pixelSizeVertical(31),
    backgroundColor: '#FFF',
    width: layout.widthPixel(336),
    height: layout.heightPixel(66),
    borderRadius: layout.fontPixel(12),
    elevation: 1,
  },
  questionMarkButton: {
    padding: layout.fontPixel(12),
  },
  questionMarkSvg: {},
  needHelp: {
    fontFamily: 'DMSans_400Regular',
    color: '#171C22',
    fontSize: layout.fontPixel(15),
    marginLeft: layout.pixelSizeHorizontal(5),
  },

  qouteButton: {
    width: '100%',
    height: layout.heightPixel(261),
    backgroundColor: 'rgba(64, 187, 195, 0.15)',
    marginTop: layout.pixelSizeVertical(34),
    borderRadius: layout.fontPixel(15),
  },

  insideQouteButton: {
    // width: '97%',
    height: layout.heightPixel(250),
    backgroundColor: theme.colors.teal1,
    borderRadius: layout.fontPixel(15),
    marginVertical: layout.pixelSizeVertical(3),
    marginTop: layout.pixelSizeVertical(4.4),
    marginHorizontal: layout.pixelSizeHorizontal(2),
    marginLeft: layout.pixelSizeHorizontal(5),
    borderWidth: 2,
    borderColor: theme.colors.teal2,
    padding: layout.fontPixel(20),
  },
  qouteAuthor: {
    fontFamily: 'DMSans_700Bold',
    fontSize: layout.fontPixel(15),
    color: theme.colors.background,
  },
  qouteHeading: {
    fontFamily: 'DMSans_700Bold',
    fontSize: layout.fontPixel(14),
    color: theme.colors.background,
    marginTop: layout.pixelSizeVertical(20),
    paddingBottom: layout.pixelSizeVertical(10),
  },

  qoute: {
    textAlign: 'left',
    fontFamily: 'DMSans_400Regular',
    fontSize: layout.fontPixel(15),
    paddingTop: layout.pixelSizeVertical(10),
    paddingBottom: layout.pixelSizeVertical(10),
    color: theme.colors.background,
  },
  shareButtonContainer: {
    backgroundColor: theme.colors.teal2,
    width: layout.widthPixel(42),
    height: layout.heightPixel(42),
    borderRadius: layout.fontPixel(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dash: {
    color: theme.colors.background,
    width: layout.widthPixel(29.73),
  },
});
