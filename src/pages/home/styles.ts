import useTheme from '../../theme/index';
import styled from 'styled-components/native';

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

export const Container = styled.View`
  flex: 1;
  background-color: ${lightGray};
`;
export const HomeGamesRow = styled.ScrollView`
  flex-direction: row;
`;

export const HomeRecentGames = styled.Text`
  color: ${gray};
  font-size: ${xl}px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
`;
export const HomePadding = styled.View`
  padding: ${basePadding * 2}px;
`;
export const HomeFilterTitle = styled.Text`
  color: ${silverWhite};
  font-size: ${lg}px;
  margin-top: ${baseMargin}px;
  margin-bottom: ${baseMargin}px;
  font-style: italic;
`;
export const HomeGame = styled.Text<{
  color: string;
  id: string;
  backgroundColor: string;
  borderColor: string;
}>`
  background-color: ${(props) => props.color || '#000'};
  color: ${(props) => props.backgroundColor || '#000'};
  flex-grow: 3;
  font-weight: bold;
  font-style: italic;
  font-size: ${sm}px;
  margin-right: ${baseMargin}px;
  padding-left: ${basePadding * 1.7}px;
  padding-right: ${basePadding * 1.7}px;
  padding-top: ${basePadding * 0.3}px;
  padding-bottom: ${basePadding * 0.3}px;
  border-radius: 15px;
  text-align: center;
  border-width: 1.7px;
  border-color: ${(props) => props.borderColor || '#000'};
`;

export const HomeListGameData = styled.Text`
  font-size: ${xs}px;
  color: #868686;
  margin-left: -5px;
  margin-top: ${baseMargin}px;
  margin-bottom: ${baseMargin}px;
`;

export const HomeListGameNumbers = styled.Text<{ color: string }>`
  font-size: ${xs}px;
  font-weight: bold;
  font-style: italic;
  width: 275px;
  color: ${(props: any) => props.color || '#000'};
`;

export const HomeListGame = styled.Text<{ color: string }>`
  font-size: ${md}px;
  font-weight: bold;
  font-style: italic;
  color: ${(props: any) => props.color || '#000'};
`;

export const EmptyCart = styled.Text`
  font-size: ${md}px;
  font-weight: bold;
  font-style: italic;
  color: #ff0000;
  margin-top: 20px;
`;

export const HomeSideBar = styled.View<{ color: string }>`
  border-left-width: 7px;
  border-color: ${(props) => props.color || '#000'};
  padding-left: ${basePadding * 1.5}px;
  margin-top: ${baseMargin * 2}px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
