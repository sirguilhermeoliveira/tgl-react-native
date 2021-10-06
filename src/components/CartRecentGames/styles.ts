import useTheme from '../../theme/index';
import styled from 'styled-components/native';

/* border-left-width: 7,
border-left-color: ${(props: any) => props.color},
border-top-left-radius: 4,
borderTopRightRadius: 4,
borderBottomLeftRadius: 4,
borderBottomRightRadius: 4,
paddingLeft: basePadding * 2,
marginTop: baseMargin * 3,
marginBottom: baseMargin * 3, */

const {
  fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
  margins: { baseMargin },
  paddings: { basePadding },
} = useTheme();

export const HomeListGameData = styled.Text`
  font-size: ${xs}px;
  color: #868686;
`;

export const HomeListGameNumbers = styled.Text<{ color: string }>`
  font-size: ${xs}px;
  font-weight: bold;
  font-style: italic;
  color: ${(props: any) => props.color || '#000'};
`;

export const HomeListGame = styled.Text<{ color: string }>`
  font-size: ${md}px;
  font-weight: bold;
  font-style: italic;
  font-color: ${(props: any) => props.color || '#000'};
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
  border-left-color: ${(props: any) => props.color || '#000'};
  padding-left: ${basePadding * 1.5}px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: ${baseMargin * 2}px;
`;
