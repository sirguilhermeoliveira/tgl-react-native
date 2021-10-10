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
    containerHeader: {
      alignItems: 'center',
      marginBottom: baseMargin,
    },
    barHeader: {
      borderWidth: 3,
      borderColor: greenYellow,
      borderRadius: 2,
      paddingLeft: basePadding * 5,
      paddingRight: basePadding * 5,
    },
    header: {
      color: gray,
      fontSize: hl,
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginTop: baseMargin * 3,
      top: 0,
      paddingLeft: basePadding * 1.5,
      paddingRight: basePadding * 1.5,
    },
  });
};

export default createStyles;
