import {
  HomeListGameData,
  HomeListGameNumbers,
  HomeListGame,
  EmptyCart,
  NewBetRow,
  HomeSideBar,
  HomeCartThrashCan,
} from './styles';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import type { AppDispatch, RootState } from '../../store';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import { formatNumberCart, formatNumberCartTotal } from '../../utils/index';

const CartBet: React.FC = () => {
  const cartGame = useSelector((state: RootState) => state.cart.games);
  const dispatch = useDispatch<AppDispatch>();
  const deleteItem = (game_id: number) => {
    const gameId = +game_id;
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
        <HomeSideBar id={game.id} color={game.color} key={Math.random()}>
          <HomeListGameNumbers>
            {formatNumberCart(game.bet)}
          </HomeListGameNumbers>
          <NewBetRow>
            {/*           {new Intl.DateTimeFormat('pt-BR').format(new Date())} */}
            <HomeListGameData>
              13/10/2021 - ({formatNumberCartTotal(game.price)})
            </HomeListGameData>
            <HomeCartThrashCan>
              <Ionicons
                onPress={deleteItem.bind(null, game.id)}
                color={gray}
                name='trash-outline'
                size={15}
              />
            </HomeCartThrashCan>
          </NewBetRow>
          <HomeListGame color={game.color}>{game.game}</HomeListGame>
        </HomeSideBar>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
};

export default CartBet;
