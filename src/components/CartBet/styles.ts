import useTheme from '../../theme/index';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const {
  fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
  margins: { baseMargin },
  paddings: { basePadding },
  colors: {
    gray,
    lightGray,
    greenYellow,
    white,
    black,
    borderGray,
    smoothGray,
    silverWhite,
    ghostGray,
    almostGray,
  },
} = useTheme();

export const createStyles = () => {
  return StyleSheet.create({
    DrawerBetX: {
      marginTop: 1,
      marginLeft: 5,
    },
  });
};

export const HomeListGameNumbers = styled.Text`
  color: ${silverWhite};
  font-size: ${xs}px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: ${baseMargin}px;
`;

export const HomeSideBar = styled.View<{ color: string }>`
  border-left-width: 7px;
  border-color: ${(props) => props.color || '#000'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: ${basePadding}px;
  margin-bottom: ${baseMargin * 2}px;
`;

export const HomeListGame = styled.Text<{ color: string }>`
  font-size: ${md}px;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.color || '#000'};
`;

export const NewBetRow = styled.View`
  flex-direction: row;
  margin-bottom: ${baseMargin}px;
`;

export const HomeListGameData = styled.Text`
  font-size: ${xs}px;
  color: ${silverWhite};
`;

export const EmptyCart = styled.Text`
  font-size: ${md}px;
  font-weight: bold;
  font-style: italic;
  color: #ff0000;
  margin-top: 20px;
`;
