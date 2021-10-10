import { StyleSheet } from 'react-native';
import useTheme from '../../theme/index';
import styled from 'styled-components/native';

const {
  colors: { white, greenYellow, lightGray },
  fontSizes: { md },
  margins: { baseMargin },
  paddings: { basePadding },
} = useTheme();
const createStyles = () => {
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
    ImageNewBetCircleGreenYellow: {
      backgroundColor: greenYellow,
      borderWidth: 1,
      borderColor: greenYellow,
      borderRadius: 50,
      padding: 10,
      elevation: 5,
    },
  });
};

export const HouseTopBar = styled.View<{ color: string }>`
  border-top-width: 4px;
  border-color: ${(props) => props.color || '#000'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 5px;
  padding-right: 5px;
`;

export default createStyles;
