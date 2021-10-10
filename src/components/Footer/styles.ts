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
      color: gray,
      fontSize: md,
      marginBottom: baseMargin * 2,
    },
    footer: {
      color: gray,
      fontSize: md,
    },
  });
};

export default createStyles;
