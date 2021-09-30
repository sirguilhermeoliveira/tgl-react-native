import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: {
      gray,
      lightGray,
      greenYellow,
      white,
      black,
      borderGray,
      smoothGray,
      silverWhite,
    },
    fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
    margins: { baseMargin },
    paddings: { basePadding },
  } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: lightGray,
    },
    homeRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: white,
      padding: basePadding,
    },
    homeTitle: {
      color: gray,
      fontSize: xxl,
      fontStyle: 'italic',
      fontWeight: 'bold',
      borderBottomWidth: 6,
      borderBottomColor: greenYellow,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      top: 0,
      paddingLeft: basePadding,
      paddingRight: basePadding,
      margin: baseMargin,
    },
    homeRecentGames: {
      color: gray,
      fontSize: xl,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textTransform: 'uppercase',
    },
    homePadding: {
      padding: basePadding * 2,
    },
    homeFilterTitle: {
      color: silverWhite,
      fontSize: lg,
      marginTop: baseMargin,
      marginBottom: baseMargin,
      fontStyle: 'italic',
    },
    homeGamesRow: {
      flexDirection: 'row',
    },
    homeGame: {
      backgroundColor: white,
      color: black,
      flexGrow: 3,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: sm,
      marginRight: baseMargin,
      paddingLeft: basePadding * 1.7,
      paddingRight: basePadding * 1.7,
      paddingTop: basePadding * 0.5,
      paddingBottom: basePadding * 0.5,
      borderRadius: 15,
      textAlign: 'center',
      borderWidth: 1,
      borderColor: black,
    },
    homeSideBar: {
      borderLeftWidth: 7,
      borderLeftColor: black,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      paddingLeft: basePadding * 2,
      marginTop: baseMargin * 3,
      marginBottom: baseMargin * 3,
    },
    homeListGameNumbers: {
      color: silverWhite,
      fontSize: xs,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    homeListGameData: {
      fontSize: xs,
      color: silverWhite,
    },
    homeListGame: {
      fontSize: md,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });
};

export default createStyles;
