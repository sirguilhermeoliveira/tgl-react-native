import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import {} from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
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
  EmptyCart,
  HomeRow,
  HomeTitle,
  HomeTitleBottomBar,
  HomeTitleContainer,
  HomeRowIcons,
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
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { gameActions } from '../../store/games';
import { useSelector } from 'react-redux';
import useTheme from '../../theme/index';

interface GameObject {
  id: number;
  type: string;
  description: string;
  range: number;
  price: string;
  color: string;
  max_number: number;
  min_cart_value: number;
  created_at: string;
  updated_at: string;
}

const home: React.FC = ({ navigation }: any) => {
  const {
    colors: { greenYellow, ghostGray },
  } = useTheme();
  const getallTheGames: any = useSelector(
    (state: RootState) => state.games.games
  );
  const [data, setData] = useState<GameObject | any>([]);
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
    if (String(whichLoteriaIsVar) === type_game) {
      getOldBets();
      setFilter(0);
      setWhichLoteriaIsVar('');
      return;
    } else {
      console.log(id_game);
      console.log(type_game);
      setFilter(id_game);
      setWhichLoteriaIsVar(type_game);
      getOldBets();
    }
  }

  function getOldBets() {
    setLoading(true);
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (res.status === 200) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

  function Loggout() {
    alert('Congratulations, Loggout with sucess');
    navigation.push('Login');
  }

  function getMoreBets() {
    axios
      .get(url_pagination)
      .then((res: any) => {
        if (data.indexOf(res.data.data) === -1) {
          return;
        }
        if (res.status === 200) {
          data.push(...res.data.data);
          setData(data);
          return;
        }
      })
      .catch((err: any) => {
        alert(err);
      });
  }

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
          setData(res.data.data);
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
      <HomeRow>
        <HomeTitleContainer>
          <HomeTitle>TGL</HomeTitle>
          <HomeTitleBottomBar />
        </HomeTitleContainer>
        <HomeRowIcons onPress={Loggout}>
          <MaterialIcons
            styles={{ color: { ghostGray } }}
            color={ghostGray}
            name='logout'
            size={35}
          />
        </HomeRowIcons>
      </HomeRow>
      <HomePadding>
        <View>
          <HomeRecentGames>recent games</HomeRecentGames>
          <HomeFilterTitle>Filters</HomeFilterTitle>
          <HomeGamesRow horizontal={true}>{getGames}</HomeGamesRow>
        </View>
        {data.length ? (
          <FlatList
            style={{ marginBottom: 210 }}
            onEndReached={getMoreBets}
            onEndReachedThreshold={0.8}
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            ListFooterComponent={<FooterList Load={loading} />}
          />
        ) : (
          <EmptyCart>Empt Cart</EmptyCart>
        )}
      </HomePadding>
    </Container>
  );
};

export default home;
