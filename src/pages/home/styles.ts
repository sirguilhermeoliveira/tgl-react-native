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

export const Container = styled.ScrollView`
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
  padding-top: ${basePadding * 0.5}px;
  padding-bottom: ${basePadding * 0.5}px;
  border-radius: 15px;
  text-align: center;
  border-width: 1px;
  border-color: ${(props) => props.borderColor || '#000'};
`;
