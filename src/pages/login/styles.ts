import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: {
      gray,
      lightGray,
      greenYellow,
      white,
      borderGray,
      smoothGray,
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
      backgroundColor: lightGray,
    },
    containerBlack: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    containerLoading: {
      flex: 1,
      justifyContent: 'center',
    },
    formTitle: {
      color: gray,
      fontSize: lxs,
      margin: baseMargin * 2,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    formTitleBlack: {
      color: gray,
      fontSize: lxs,
      margin: baseMargin * 2,
      fontWeight: 'bold',
      fontStyle: 'italic',
      opacity: 0.1,
    },
    formContainer: {
      backgroundColor: white,
      width: 300,
      minHeight: 300,
      borderRadius: 15,
      borderColor: borderGray,
      borderWidth: 1,
    },
    formContainerBlack: {
      backgroundColor: white,
      width: 300,
      minHeight: 300,
      borderRadius: 15,
      borderColor: borderGray,
      borderWidth: 1,
      opacity: 0.1,
    },
    formInput: {
      display: 'flex',
      flexDirection: 'row',
      color: smoothGray,
      padding: basePadding * 2,
      paddingLeft: basePadding * 2,
      fontSize: md,
      fontWeight: 'bold',
      fontStyle: 'italic',
      borderBottomWidth: 1,
      borderBottomColor: borderGray,
    },
    formInputText: {
      color: smoothGray,
      fontSize: md,
      fontWeight: 'bold',
      fontStyle: 'italic',
      flex: 1,
    },

    formInputPassword: {
      flex: 1,
    },
    formForgetPassword: {
      fontSize: sm,
      fontStyle: 'italic',
      color: '#C1C1C1',
      textAlign: 'right',
      marginTop: baseMargin * 2,
      marginRight: baseMargin * 2,
    },
    formErrorsContainer: {
      alignItems: 'center',
    },
    formErrors: {
      justifyContent: 'center',
      fontSize: 10,
      color: red,
      marginTop: baseMargin,
      marginLeft: baseMargin,
    },
    formRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: basePadding * 2,
    },
    formLogIn: {
      color: greenYellow,
      fontSize: xxl,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginBottom: baseMargin * 2,
    },
    formSignUp: {
      color: gray,
      fontSize: xxl,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    formSignUpBlack: {
      color: gray,
      fontSize: xxl,
      fontWeight: 'bold',
      fontStyle: 'italic',
      opacity: 0.1,
    },
    formArrowRight: {
      marginLeft: baseMargin,
      marginTop: baseMargin * 0.4,
    },
    formArrowRightBlack: {
      marginLeft: baseMargin,
      marginTop: baseMargin * 0.4,
      opacity: 0.1,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      color: gray,
      fontSize: md,
      marginBottom: baseMargin * 2,
    },
  });
};

export default createStyles;
