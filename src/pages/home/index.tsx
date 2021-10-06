import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  Container,
  HomeGamesRow,
  HomeRecentGames,
  HomePadding,
  HomeFilterTitle,
  HomeGame,
} from './styles';

import HeaderAuth from '../../components/HeaderAuth/index';
import { BASE_URL } from '../../utils/index';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import axios from 'axios';
import CartRecentGames from '../../components/CartRecentGames/index';

const home: React.FC = () => {
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const [page, setPage]: any = useState(1);
  const [filter, setFilter]: any = useState(0);
  const [getallTheGames, setallTheGames] = useState([]);
  const [getHelperPagination, setHelperPagination]: any = useState([]);

  const url_pagination =
    BASE_URL +
    '/users/' +
    Number(user_id) +
    '/bets?page=' +
    page +
    '&filter=' +
    filter;

  function changeGameFilter(event: any) {
    let helper = 0;
    helper = Number(event.target.id);
    if (whichLoteriaIsVar === event.target.innerText) {
      setPage(1);
      setFilter(0);
      setWhichLoteriaIsVar('');
      return;
    } else if (whichLoteriaIsVar !== event.target.innerText) {
      setFilter(helper + 1);
      setPage(1);
      setWhichLoteriaIsVar(event.target.innerText);
    } else {
      alert('No games available');
    }
  }

  useEffect(() => {
    let url = BASE_URL + '/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          const gamesHelper = res.data;
          setallTheGames(gamesHelper.reverse());
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });

    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          setHelperPagination(res.data.meta);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_pagination]);

  /*    style={styles.whichLoteriaIsVar === item.type ? 'active' : ''} */
  const getGames = getallTheGames.map((item: any, index: any) => (
    <TouchableOpacity
      /* id={index} */ key={item.type}
      onPress={changeGameFilter}
    >
      <HomeGame color={item.color}>{item.type}</HomeGame>
    </TouchableOpacity>
  ));

  return (
    <Container>
      <View>
        <HeaderAuth />
        <HomePadding>
          <HomeRecentGames>recent games</HomeRecentGames>
          <HomeFilterTitle>Filters</HomeFilterTitle>
          <HomeGamesRow horizontal={true}>{getGames}</HomeGamesRow>
          <ScrollView>
            <CartRecentGames url_bets={url_pagination} />
          </ScrollView>
        </HomePadding>
      </View>
    </Container>
  );
};

export default home;
