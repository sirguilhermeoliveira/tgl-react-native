import {
  HomeListGameData,
  HomeListGameNumbers,
  HomeListGame,
  EmptyCart,
  NewBetRow,
  HomeSideBar,
} from './styles';
import React from 'react';
import { View } from 'react-native';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import type { AppDispatch, RootState } from '../../store';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';

const CartBet: React.FC = () => {
  const cartGame = useSelector((state: RootState) => state.cart.games);
  const dispatch = useDispatch<AppDispatch>();
  const deleteItem = (event: React.MouseEvent<HTMLElement>) => {
    const gameId = +event.currentTarget.id;
    const filter = cartGame.filter((game) => {
      return game.id !== gameId;
    });
    dispatch(cartActions.removeGame(filter));
  };
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
      ghostGray,
      almostGray,
    },
    fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
    margins: { baseMargin },
    paddings: { basePadding },
  } = useTheme();

  let games: JSX.Element | JSX.Element[] = <EmptyCart>Empty Cart</EmptyCart>;

  interface GameObject {
    id: any;
    bet: any;
    game: string;
    game_id: number;
    price: number;
    color: string;
  }

  if (cartGame.length > 0) {
    games = cartGame.map((game: GameObject) => {
      return (
        <HomeSideBar>
          <HomeListGameNumbers>
            01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25, 27, 28,
            29, 31, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48, 50
          </HomeListGameNumbers>
          <NewBetRow>
            <HomeListGameData>28/11/2020 - (R$ 2,50)</HomeListGameData>
            <Ionicons color={gray} name='trash-outline' size={15} />
          </NewBetRow>
          <HomeListGame>Lotomania</HomeListGame>
        </HomeSideBar>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
};

export default CartBet;
