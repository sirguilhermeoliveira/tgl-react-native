import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';

const createStyles = () => {
  const {
    colors: { gray },
    fontSizes: { md },
    margins: { baseMargin },
  } = useTheme();

  return StyleSheet.create({
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
