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
      blue,
      red,
    },
    fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
    margins: { baseMargin },
    paddings: { basePadding },
  } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    containerBackgroundBlack: {
      flex: 1,
      alignItems: 'center',
      opacity: 0.2,
    },
    formErrors: {
      justifyContent: 'center',
      fontSize: 15,
      color: red,
      marginTop: baseMargin,
      marginLeft: baseMargin,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: greenYellow,
      alignSelf: 'flex-end',
      marginBottom: baseMargin * 0.2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      borderWidth: 1,
      borderColor: greenYellow,
      borderRadius: 5,
      paddingLeft: basePadding,
      paddingRight: basePadding,
      marginTop: baseMargin,
    },
    accountCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    accountCenterTitle: {
      color: greenYellow,
      fontWeight: 'bold',
      fontSize: xxl,
      marginTop: baseMargin * 3,
    },
    accountCenterSubtitle: {
      marginBottom: baseMargin * 7,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: blue,
      fontSize: xg,
    },
    accountCenterUnderline: {
      textDecorationLine: 'underline',
    },
  });
};

export default createStyles;
