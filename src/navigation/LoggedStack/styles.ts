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
      padding: 5,

      marginBottom: baseMargin * 1.5,
    },
    ImageNewBetCircleGreenYellow: {
      backgroundColor: greenYellow,
      borderWidth: 1,
      borderColor: greenYellow,
      borderRadius: 50,
      padding: 10,
    },
    HouseTopBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    HouseTopBarIcon: {
      marginBottom: 1,
      marginTop: 8,
    },
  });
};

export const HouseTopBar = styled.View<{ color: string }>`
  border-width: 2px;
  border-color: ${(props) => props.color || '#000'};
  border-radius: 2px;
  padding-left: 35px;
`;

export default createStyles;
