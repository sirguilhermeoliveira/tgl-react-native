import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
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
import type { RootState } from '../../store';
import axios from 'axios';
import CartRecentGames from '../../components/CartRecentGames/index';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { gameActions } from '../../store/games';
import { useSelector } from 'react-redux';
import useTheme from '../../theme/index';

interface IGame {
  id: string;
  type: string;
  color: string;
}

const home: React.FC = () => {
  const {
    colors: { greenYellow },
  } = useTheme();
  const getallTheGames: any = useSelector(
    (state: RootState) => state.games.games
  );
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState('');
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const [page, setPage]: any = useState(1);
  const [filter, setFilter]: any = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const [getHelperPagination, setHelperPagination]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [urlPagination, setUrlPagination]: any = useState(
    BASE_URL +
      '/users/' +
      Number(user_id) +
      '/bets?page=' +
      page +
      '&filter=' +
      filter
  );

  const url_pagination =
    BASE_URL +
    '/users/' +
    Number(user_id) +
    '/bets?page=' +
    page +
    '&filter=' +
    filter;

  function changeGameFilter(id_game: any, type_game: any) {
    let helper = 0;
    helper = id_game;
    if (whichLoteriaIsVar === type_game) {
      setFilter(0);
      setWhichLoteriaIsVar('');
      getOldBets();
      return;
    }
    setFilter(helper);
    setWhichLoteriaIsVar(type_game);
    getOldBets();
  }

  function getOldBets() {
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          setHelperPagination(res.data.meta);
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

  function getMoreBets() {
    setHelperPagination(getHelperPagination + 1);
    setLoading(true);
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          setHelperPagination(res.data.meta);
          setLoading(false);
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

  useEffect(() => {
    let url = BASE_URL + '/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(gameActions.getGames(res.data));
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });

    getOldBets();
  }, []);

  const getGames = getallTheGames.map((item: any) => (
    <TouchableOpacity key={Math.random()}>
      <HomeGame
        id={item.id}
        onPress={changeGameFilter.bind(null, item.id, item.type)}
        backgroundColor={whichLoteriaIsVar === item.type ? '#FFF' : item.color}
        borderColor={whichLoteriaIsVar === item.type ? item.color : item.color}
        color={whichLoteriaIsVar === item.type ? item.color : '#FFF'}
      >
        {item.type}
      </HomeGame>
    </TouchableOpacity>
  ));

  const [data, setData] = useState([{ id: 1, full_name: 'Sujeito' }]);

  function FooterList({ Load }: any) {
    if (!Load) return null;
    return (
      <View>
        <ActivityIndicator animating={true} size={25} color={greenYellow} />
      </View>
    );
  }

  return (
    <Container>
      <View>
        <HeaderAuth />
        <HomePadding>
          <HomeRecentGames>recent games</HomeRecentGames>
          <HomeFilterTitle>Filters</HomeFilterTitle>
          <HomeGamesRow horizontal={true}>{getGames}</HomeGamesRow>
          <ScrollView horizontal={true}>
            <FlatList
              data={data}
              keyExtractor={(item) => String(Math.random())}
              renderItem={({ item }: any) => (
                <CartRecentGames url_bets={url_pagination} />
              )}
              onEndReached={getMoreBets}
              onEndReachedThreshold={0.1}
              ListFooterComponent={<FooterList Load={loading} />}
            />
          </ScrollView>
        </HomePadding>
      </View>
    </Container>
  );
};

export default home;
