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
      ghostGray,
      almostGray,
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
    newBetTitle: {
      marginTop: baseMargin * 2,
      marginBottom: baseMargin * 2,
      color: gray,
      fontSize: xl,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    newBetPadding: {
      padding: basePadding * 2,
    },
    newBetChooseGame: {
      marginBottom: baseMargin,
      fontStyle: 'italic',
      color: silverWhite,
      fontSize: lg,
    },
    newBetRow: {
      flexDirection: 'row',
    },
    newBetFill: {
      color: silverWhite,
      fontSize: lg,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginTop: baseMargin * 2,
    },
    newBetFillDescription: {
      color: silverWhite,
      fontSize: sm,
      fontStyle: 'italic',
      paddingRight: basePadding * 5,
    },
    newBetFillDescriptionBold: {
      color: gray,
      fontSize: sm,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    newBetBottomLine: {
      borderBottomWidth: 6,
      borderBottomColor: ghostGray,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      width: 36,
    },
    newBetBottomLineCenter: {
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    newBetRowNumbers: {
      flexDirection: 'row',
    },
    newBetNumbers: {
      color: white,
      backgroundColor: almostGray,
      padding: basePadding * 2,
      borderRadius: 50,
      fontSize: lg,
      fontWeight: 'bold',
      marginRight: baseMargin,
    },
    newBetGames: {
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
  });
};

export default createStyles;
