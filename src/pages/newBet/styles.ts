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
  });
};

export default createStyles;
