import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray },
    fontSizes: { md },
    margins: { baseMargin },
  } = useTheme();

  return StyleSheet.create({
    footerContainer: {
      bottom: 0,
      position: 'absolute',
      marginBottom: baseMargin * 2,
    },
    footer: {
      color: gray,
      fontSize: md,
    },
    footerBlack: {
      color: gray,
      fontSize: md,
      opacity: 0.1,
    },
  });
};

export default createStyles;
