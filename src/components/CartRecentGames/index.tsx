import {
  HomeListGameData,
  HomeListGameNumbers,
  HomeListGame,
  EmptyCart,
  HomeSideBar,
} from './styles';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import {
  formatNumberCart,
  formatNumberCartTotal,
  formatDate,
} from '../../utils/index';
interface UrlObject {
  url_bets: string;
}

interface IGame {
  game: any;
  id: number;
  color: string;
  game_numbers: number;
  created_at: string;
  price: number;
  type: string;
}

function CartRecentGames({ url_bets }: UrlObject) {
  let games: JSX.Element = <EmptyCart>Empty Cart</EmptyCart>;
  const [getallTheBets, setallTheBets]: any = useState([]);
  useEffect(() => {
    axios
      .get(url_bets)
      .then((res: any) => {
        if (res.status === 200) {
          setallTheBets(res.data.data);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_bets]);
  if (getallTheBets.length > 0) {
    games = getallTheBets.map((recentGames: IGame) => {
      return (
        <HomeSideBar color={recentGames.color} key={recentGames.id}>
          <HomeListGameNumbers color={recentGames.color}>
            {formatNumberCart(recentGames.game_numbers)}
          </HomeListGameNumbers>
          <HomeListGameData>
            {' '}
            {formatDate(recentGames.created_at)} - R${' '}
            {formatNumberCartTotal(Number(recentGames.game.price))}
          </HomeListGameData>
          <HomeListGame color={recentGames.color}>
            {recentGames.game.type}
          </HomeListGame>
        </HomeSideBar>
      );
    });
  }
  return <Fragment>{games}</Fragment>;
}

export default CartRecentGames;
