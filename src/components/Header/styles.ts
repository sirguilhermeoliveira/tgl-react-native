import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray, greenYellow },
    fontSizes: { hl },
    margins: { baseMargin },
    paddings: { basePadding },
  } = useTheme();

  return StyleSheet.create({
    header: {
      color: gray,
      fontSize: hl,
      fontStyle: 'italic',
      fontWeight: 'bold',
      borderBottomWidth: 6,
      borderBottomColor: greenYellow,
      borderRadius: 5,
      marginTop: baseMargin * 3,
      top: 0,
      paddingLeft: basePadding * 1.5,
      paddingRight: basePadding * 1.5,
    },
  });
};

export default createStyles;
