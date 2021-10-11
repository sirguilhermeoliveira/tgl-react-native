import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native';
import {} from './styles';
import { ActivityIndicator } from 'react-native-paper';
import {
  Container,
  HomeGamesRow,
  HomeRecentGames,
  HomePadding,
  HomeFilterTitle,
  HomeGame,
  HomeListGameData,
  HomeListGameNumbers,
  HomeListGame,
  HomeSideBar,
} from './styles';
import {
  formatNumberCart,
  formatNumberCartTotal,
  formatDate,
} from '../../utils/index';
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
  const [loading, setLoading] = useState(false);

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
      getOldBets();
      setWhichLoteriaIsVar('');
      setFilter(0);
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
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

  function getMoreBets() {
    setPage(page + 1);
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

  useEffect(() => {
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          setData(res.data.data);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [url_pagination]);

  const renderItem = ({ item }: any) => (
    <HomeSideBar color={item.game.color} key={Math.random()}>
      <HomeListGameNumbers color={item.game.color}>
        {formatNumberCart(item.game_numbers)}
      </HomeListGameNumbers>
      <HomeListGameData>
        {' '}
        {formatDate(item.created_at)} - (R${' '}
        {formatNumberCartTotal(Number(item.game.price))})
      </HomeListGameData>
      <HomeListGame color={item.game.color}>{item.game.type}</HomeListGame>
    </HomeSideBar>
  );

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

    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }, [url_pagination]);

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

  const [data, setData] = useState([]);

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
          <SafeAreaView>
            <FlatList
              onEndReached={getMoreBets}
              onEndReachedThreshold={0}
              data={data}
              keyExtractor={(item, index): any => String(Math.random())}
              renderItem={renderItem}
              ListFooterComponent={<FooterList Load={loading} />}
            />
          </SafeAreaView>
        </HomePadding>
      </View>
    </Container>
  );
};

export default home;
