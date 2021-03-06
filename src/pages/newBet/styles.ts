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
    smoothGray,
    silverWhite,
    ghostGray,
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
      marginTop: baseMargin,
      marginBottom: baseMargin,
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
    drawerContainerPrice: {
      marginBottom: baseMargin * 10,
      flexDirection: 'row',
      paddingTop: baseMargin * 2,
      flex: 1,
      alignItems: 'flex-end',
    },
    drawerPriceLeft: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: md,
      color: gray,
      fontStyle: 'italic',
    },
    drawerPriceLeftRight: {
      color: silverWhite,
      fontSize: md,
      flex: 1,
      textTransform: 'uppercase',
      alignItems: 'flex-end',
    },
    drawerPriceRight: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: silverWhite,
      fontSize: md,
      marginLeft: baseMargin * -6,
    },
    drawerContainerRow: {
      flexDirection: 'row',
    },
    cartCart: {
      marginTop: -7,
    },
    flexOne: {
      flex: 1,
    },
    drawerBottomSaveContainer: {
      bottom: 0,
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: lightGray,
      width: 300,
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
      marginTop: baseMargin * 0.5,
    },
    newBetFillDescription: {
      color: silverWhite,
      fontSize: sm,
      fontStyle: 'italic',
      paddingRight: basePadding * 5,
      marginBottom: baseMargin,
      marginTop: baseMargin * 0.5,
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
      marginBottom: 10,
    },
    containerLoading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    newBetRowNumbers: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    drawerContainerNumbersBackgroundColor: {
      backgroundColor: lightGray,
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
    newBetX: {
      color: white,
      position: 'absolute',
      marginLeft: baseMargin * 1.9,
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
    homeTitleContainer: {
      margin: baseMargin,
    },
    homeTitle: {
      color: gray,
      fontSize: xxl,
      fontStyle: 'italic',
      fontWeight: 'bold',
      top: 0,
      paddingLeft: 10,
      paddingRight: 10,
    },
    homeTitleBar: {
      borderWidth: 3,
      borderColor: greenYellow,
      borderRadius: 2,
    },

    pageText: {
      fontSize: 21,
      color: 'white',
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

export const HomeGame = styled.Text<{
  color: string;
  id: number;
  borderColor: string;
  backgroundColor: string;
}>`
  background-color: ${(props) => props.color || '#000'};
  color: ${(props) => props.backgroundColor || '#000'};
  flex-grow: 3;
  font-weight: bold;
  font-style: italic;
  font-size: ${sm}px;
  margin-right: ${baseMargin}px;
  padding-left: ${basePadding * 1.7}px;
  padding-right: ${basePadding * 1.7}px;
  padding-top: ${basePadding * 0.3}px;
  padding-bottom: ${basePadding * 0.3}px;
  border-radius: 15px;
  text-align: center;
  border-width: 1.7px;
  border-color: ${(props) => props.borderColor || '#000'};
`;

export const HomeGamesRow = styled.ScrollView`
  flex-direction: row;
  margin-bottom: ${baseMargin}px;
`;

export const NewBetNumbers = styled.Text<{
  id: string;
  backgroundColor: string;
}>`
  color: ${white};
  background-color: ${(props) => props.backgroundColor || '#ADC0C4'};
  border-radius: 50px;
  font-size: ${lg}px;
  font-weight: bold;
  padding: ${basePadding * 2}px;
  margin: ${baseMargin * 0.6}px;
`;

export const NewBetNumbersMin = styled.Text<{
  id: string;
  backgroundColor: string;
}>`
  color: ${white};
  background-color: ${(props) => props.backgroundColor || '#ADC0C4'};
  border-radius: 50px;
  font-size: ${sm}px;
  font-weight: bold;
  margin-bottom: ${baseMargin}px;
  margin-right: ${baseMargin}px;
  padding-left: ${basePadding * 1.2}px;
  padding-right: ${basePadding * 1.2}px;
  padding-top: ${basePadding}px;
  padding-bottom: ${basePadding}px;
  flex-direction: row;
`;
