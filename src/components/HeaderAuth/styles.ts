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
  });
};

export default createStyles;
