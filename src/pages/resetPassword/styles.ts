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
    formTitle: {
      color: gray,
      fontSize: lxs,
      margin: baseMargin * 2,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    formContainer: {
      backgroundColor: white,
      width: 300,
      height: 300,
      borderRadius: 15,
      borderColor: borderGray,
      borderWidth: 1,
    },
    formInput: {
      color: smoothGray,
      padding: basePadding * 2,
      paddingLeft: basePadding * 2,
      fontSize: md,
      fontWeight: 'bold',
      fontStyle: 'italic',
      borderBottomWidth: 1,
      borderBottomColor: borderGray,
    },
    formForgetPassword: {
      fontSize: sm,
      fontStyle: 'italic',
      color: '#C1C1C1',
      textAlign: 'right',
      marginTop: baseMargin * 2,
      marginRight: baseMargin * 2,
    },
    formRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: basePadding * 2,
    },
    formErrors: {
      justifyContent: 'center',
      fontSize: 15,
      color: red,
      marginTop: baseMargin,
      marginLeft: baseMargin,
    },
    formLogIn: {
      color: greenYellow,
      fontSize: xxl,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    formSignUp: {
      color: gray,
      fontSize: xxl,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    formArrowRight: {
      marginLeft: baseMargin,
      marginTop: baseMargin * 0.4,
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
