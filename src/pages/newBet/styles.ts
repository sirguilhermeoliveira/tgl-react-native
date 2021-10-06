import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';
import styled from 'styled-components/native';

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
const createStyles = () => {
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
      marginBottom: baseMargin,
    },
    drawerBetX: {
      marginTop: 1,
      marginLeft: 5,
    },
    drawerCartTotalBottom: {
      marginBottom: baseMargin * 9,
      flexDirection: 'row',
      paddingTop: baseMargin * 2,
    },
    drawerCartTotalText: {
      textTransform: 'uppercase',
      color: silverWhite,
      fontSize: md,
    },
    drawerCartTotalTextBoldCart: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    drawerCartTotalTextBoldCartPrice: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      color: gray,
      fontSize: md,
    },
    drawerBottomSaveContainer: {
      bottom: 0,
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: lightGray,
      width: 200,
      justifyContent: 'center',
    },
    drawerBottomSave: {
      color: greenYellow,
      fontSize: xxl,
      padding: basePadding * 2,
      fontWeight: 'bold',
      fontStyle: 'italic',
      justifyContent: 'center',
    },
    drawerBottomSaveArrow: {
      marginTop: baseMargin * 2.5,
      marginLeft: baseMargin * -1.5,
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
      marginTop: 10,
      marginBottom: 10,
    },
    newBetRowNumbers: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    newBetButtonsContainer: {
      flexDirection: 'row',
    },
    newBetButtonsLeft: {
      marginRight: baseMargin * 2,
    },
    newBetButtons: {
      backgroundColor: white,
      color: greenYellow,
      borderWidth: 1,
      borderColor: greenYellow,
      padding: basePadding * 0.5,
      marginBottom: baseMargin,
      borderRadius: 5,
      fontWeight: 'bold',
      fontSize: sm,
      flexGrow: 3,
    },
    newBetButtonsCart: {
      backgroundColor: greenYellow,
      color: white,
      borderWidth: 1,
      borderColor: greenYellow,
      padding: basePadding * 0.5,
      marginBottom: baseMargin,
      borderRadius: 5,
      fontWeight: 'bold',
      flexDirection: 'row',
      paddingLeft: basePadding,
      paddingRight: basePadding,
    },
    newBetButtonsAddCart: {
      fontWeight: 'bold',
      color: white,
      fontSize: sm,
      marginLeft: baseMargin,
    },
    newBetNumbers: {
      color: white,
      backgroundColor: almostGray,
      borderRadius: 50,
      fontSize: lg,
      fontWeight: 'bold',
      padding: basePadding * 2,
      margin: baseMargin * 0.6,
    },
    newBetNumbersNumber: {
      color: white,
      fontWeight: 'bold',
    },
    newBetX: {
      margin: -6,
    },
    newBetNumbersMin: {
      color: white,
      backgroundColor: almostGray,
      borderRadius: 50,
      fontSize: sm,
      fontWeight: 'bold',
      marginBottom: baseMargin,
      marginRight: baseMargin,
      paddingLeft: basePadding * 1.3,
      paddingRight: basePadding * 1.3,
      paddingTop: basePadding,
      paddingBottom: basePadding,
      flexDirection: 'row',
    },
    newBetGames: {
      backgroundColor: white,
      flexGrow: 3,
      fontSize: sm,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: black,
      marginRight: baseMargin,
    },
    newBetText: {
      color: black,
      paddingLeft: basePadding * 1.7,
      paddingRight: basePadding * 1.7,
      paddingTop: basePadding * 0.5,
      paddingBottom: basePadding * 0.5,
      flexGrow: 3,
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    homeRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: white,
      padding: basePadding,
    },
    homeRowIcons: {
      flexDirection: 'row',
    },
    homeArrow: {
      marginLeft: 20,
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
    pageText: {
      fontSize: 21,
      color: 'white',
    },
    rectButton: {
      height: 60,
      padding: 10,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      backgroundColor: 'white',
    },
    rectButtonText: {
      backgroundColor: 'transparent',
    },
    drawerRowXToEnd: {
      alignItems: 'flex-end',
    },
    drawerXToEnd: {
      fontWeight: 'bold',
    },
    drawerRow: {
      flexDirection: 'row',
      marginBottom: baseMargin * 2,
    },
    drawerX: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    drawerCart: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      fontSize: xxg,
      color: gray,
      marginLeft: baseMargin * 1.5,
      marginTop: -7,
    },
    drawerContainer: {
      flex: 1,
      padding: basePadding * 1.5,
      backgroundColor: white,
    },
    pageInput: {
      height: 60,
      padding: 10,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      backgroundColor: '#eee',
    },
    drawerText: {
      margin: 10,
      fontSize: 15,
      textAlign: 'left',
    },
    homeSideBar: {
      borderLeftWidth: 7,
      borderLeftColor: black,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      paddingLeft: basePadding,
      marginBottom: baseMargin * 2,
    },
    homeListGameNumbers: {
      color: silverWhite,
      fontSize: xs,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginBottom: baseMargin,
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

    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
  });
};

export default createStyles;

export const HomeGame = styled.Text<{ color: string }>`
  background-color: ${white};
  color: ${(props) => props.color || '#000'};
  flex-grow: 3;
  font-weight: bold;
  font-style: italic;
  font-size: ${sm};
  margin-right: ${baseMargin};
  padding-left: ${basePadding * 1.7}px;
  padding-right: ${basePadding * 1.7}px;
  padding-top: ${basePadding * 0.5}px;
  padding-bottom: ${basePadding * 0.5}px;
  border-radius: 15px;
  text-align: center;
  border-width: 1px;
  border-color: ${(props) => props.color || '#000'};
`;

export const HomeGamesRow = styled.ScrollView`
  flex-direction: row;
  margin-bottom: ${baseMargin}px;
`;
