import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray, white, black, lightGray },
    fontSizes: { md },
    margins: { baseMargin },
  } = useTheme();

  return StyleSheet.create({
    ImageNewBet: {
      borderRadius: 50,
    },
    ImageNewBetCircle: {
      backgroundColor: white,
      borderWidth: 1,
      borderColor: lightGray,
      borderRadius: 50,
      padding: 3,
      elevation: 5,
      marginBottom: baseMargin * 1.5,
    },
  });
};

export default createStyles;
