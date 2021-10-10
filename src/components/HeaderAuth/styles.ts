import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray, greenYellow, white },
    fontSizes: { xxl },
    margins: { baseMargin },
    paddings: { basePadding },
  } = useTheme();

  return StyleSheet.create({
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
    homeTitleBottomBar: {
      borderWidth: 3,
      borderColor: greenYellow,
      borderRadius: 2,
    },
  });
};

export default createStyles;
