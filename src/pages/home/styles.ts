import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray, lightGray, greenYellow, white, borderGray, smoothGray },
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
      borderRadius: 5,
      top: 0,
      paddingLeft: basePadding,
      paddingRight: basePadding,
      margin: baseMargin,
    },
  });
};

export default createStyles;
