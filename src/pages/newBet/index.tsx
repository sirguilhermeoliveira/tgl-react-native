import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerLayoutAndroid } from 'react-native';
import createStyles from './styles';
import useTheme from '../../theme/index';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import type { AppDispatch, RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { cartActions } from '../../store/cart';
import { HomeGame, HomeGamesRow } from './styles';
import {
  formatNumber,
  formatNumberCartTotal,
  formatLineBreak,
} from '../../utils/index';
import CartBet from '../../components/CartBet/index';
import { NewBetNumbers, NewBetNumbersMin } from './styles';

const newBet: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const allBets = useSelector((state: RootState) => state.cart.games);
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const styles = createStyles();
  const drawer = useRef<DrawerLayoutAndroid | null>(null);
  const [totalNumbers, setTotalNumbers] = useState([] as Number[]);
  const [getallTheGames, setallTheGames]: any = useState([]);
  const [gamesJson, setGamesJson]: any = useState([]);
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState<any>();
  const [getDescription, setGetDescription] = useState('ue');
  const [getFor, setGetFor] = useState();
  const [range, setRange] = useState();
  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);
  const {
    colors: { greenYellow, white, ghostGray },
  } = useTheme();

  const changeButtonColor = (id_game: number) => {
    if (
      totalNumbers.length === gamesJson[whichLoteriaIsVar - 1].max_number &&
      totalNumbers.indexOf(id_game) === -1
    ) {
      return alert('This is the limit of numbers you can choose.');
    }
    if (totalNumbers.indexOf(id_game) === -1) {
      totalNumbers.push(id_game);
      setTotalNumbers([...totalNumbers]);
    } else {
      totalNumbers.splice(totalNumbers.indexOf(Number(id_game)), 1);
      setTotalNumbers([...totalNumbers]);
    }
  };

  useEffect(() => {
    let url = 'http://192.168.56.1:3333/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          const gamesHelper = res.data;
          setGamesJson(gamesHelper);
          setallTheGames(gamesHelper.reverse());
          changeGameColor(Number(gamesJson.length) - 1);
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  function Loggout() {
    alert('Congratulations, Loggout with sucess');
    navigation.push('Login');
  }

  function saveCart() {
    let bets: any = [];
    for (let i = 0; i < allBets.length; i++) {
      bets.push({
        game_id: allBets[i].game_id,
        game_numbers: allBets[i].bet.toString(),
      });
    }
    if (totalPrice < 30) {
      alert('The minimum in cart has to be R$ 30,00');
      return;
    } else {
      let url = 'http://192.168.56.1:3333/users/' + user_id + '/bets';
      axios
        .post(url, {
          bets,
        })
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          alert('Something is Wrong:' + err);
        });
    }
    dispatch(cartActions.removeAllGames([]));
    alert('Bet Saved!!');
  }

  const completeGame = () => {
    let randomNumber = 1;
    let maxNumberJSON = gamesJson[whichLoteriaIsVar - 1]['max-number'];
    let helperTotalNumbers = totalNumbers;
    if (maxNumberJSON === helperTotalNumbers.length) {
      helperTotalNumbers = [];
    }
    for (let i = 1; helperTotalNumbers.length <= maxNumberJSON - 1; i++) {
      do {
        console.log('C');
        randomNumber = Math.floor(
          Math.floor(
            Math.random() * (gamesJson[whichLoteriaIsVar].range - 1 + 1)
          ) + 1
        );
      } while (helperTotalNumbers.indexOf(randomNumber) !== -1);
      helperTotalNumbers.push(randomNumber);
      console.log('D');
      setTotalNumbers([...helperTotalNumbers]);
    }
  };

  const addCart = () => {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar].max_number) {
      alert(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar].max_number +
          ' numbers selected.'
      );
      return;
    }
    dispatch(
      cartActions.addGame({
        id: Math.random(),
        bet: totalNumbers,
        game: gamesJson[whichLoteriaIsVar].type,
        game_id: Number(whichLoteriaIsVar) + 1,
        price: gamesJson[whichLoteriaIsVar].price,
        color: gamesJson[whichLoteriaIsVar].color,
        date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
      })
    );
    clearGame();
    alert('New Game Added');
  };

  const clearGame = () => {
    setTotalNumbers([]);
  };

  const changeGameColor = (id_game: any) => {
    const newGame = id_game - 1;
    console.log(gamesJson[newGame].description);
    console.log(typeof gamesJson[newGame].description);
    setWhichLoteriaIsVar(newGame + 1);
    setGetDescription(gamesJson[newGame].description);
    setGetFor(gamesJson[newGame].type);
    setRange(gamesJson[newGame].range);
    setTotalNumbers([]);
  };

  const getGames = getallTheGames.map((item: any) => (
    <TouchableOpacity key={Math.random()}>
      <HomeGame
        id={item.id}
        onPress={changeGameColor.bind(null, item.id, item.type)}
        backgroundColor={whichLoteriaIsVar === item.id ? '#FFF' : item.color}
        borderColor={whichLoteriaIsVar === item.id ? item.color : item.color}
        color={whichLoteriaIsVar === item.id ? item.color : '#FFF'}
      >
        {item.type}
      </HomeGame>
    </TouchableOpacity>
  ));

  const navigationView = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        onPress={() => drawer.current!.closeDrawer()}
        style={styles.drawerRowXToEnd}
      >
        <Ionicons
          style={styles.drawerXToEnd}
          color={greenYellow}
          name='close'
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.drawerRow}>
        <Ionicons
          color={greenYellow}
          style={styles.cartCart}
          name='cart-outline'
          size={35}
        />
        <Text style={styles.drawerCart}>cart</Text>
      </View>
      <ScrollView>
        <CartBet />
      </ScrollView>
      <View style={styles.drawerContainerPrice}>
        <View style={styles.drawerContainerRow}>
          <Text style={styles.drawerPriceLeft}>cart</Text>
          <Text style={styles.drawerPriceLeftRight}> total:</Text>
        </View>
        <Text style={styles.drawerPriceRight}>
          r$ {formatNumberCartTotal(totalPrice)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={saveCart}
        style={styles.drawerBottomSaveContainer}
      >
        <Text style={styles.drawerBottomSave}>Save</Text>
        <Ionicons
          style={styles.drawerBottomSaveArrow}
          color={greenYellow}
          name='arrow-forward-outline'
          size={35}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='right'
      renderNavigationView={navigationView}
    >
      <ScrollView style={styles.drawerContainerNumbersBackgroundColor}>
        <View style={styles.container}>
          <View style={styles.homeRow}>
            <View style={styles.homeTitleContainer}>
              <Text style={styles.homeTitle}>TGL</Text>
              <View style={styles.homeTitleBar} />
            </View>
            <View style={styles.homeRowIcons}>
              <TouchableOpacity onPress={() => drawer.current!.openDrawer()}>
                <Ionicons color={greenYellow} name='cart-outline' size={35} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  onPress={Loggout}
                  style={styles.homeArrow}
                  color={ghostGray}
                  name='logout'
                  size={35}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.newBetPadding}>
            <Text style={styles.newBetTitle}>new bet for {getFor}</Text>
            <Text style={styles.newBetChooseGame}>Choose a game</Text>
            <HomeGamesRow horizontal={true}>{getGames}</HomeGamesRow>
            <View style={styles.newBetRowNumbers}>
              {totalNumbers.map((num: any) => (
                <View key={Math.random()}>
                  <NewBetNumbersMin
                    id={num.id}
                    backgroundColor={gamesJson[whichLoteriaIsVar - 1].color}
                  >
                    {formatNumber(num)}
                  </NewBetNumbersMin>
                  <Ionicons
                    style={styles.newBetX}
                    color={white}
                    name='close-outline'
                    size={12}
                  />
                </View>
              ))}
            </View>
            <View>
              <Text style={styles.newBetFill}>Fill your bet</Text>
              <Text style={styles.newBetFillDescription}>
                {formatLineBreak(getDescription)}
              </Text>
            </View>
            <View style={styles.newBetButtonsContainer}>
              <TouchableOpacity
                onPress={completeGame}
                style={styles.newBetButtonsLeft}
              >
                <Text style={styles.newBetButtons}>Complete game</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={clearGame}
                style={styles.newBetButtonsLeft}
              >
                <Text style={styles.newBetButtons}>Clear game</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addCart}>
                <View style={styles.newBetButtonsCart}>
                  <Ionicons color={white} name='cart-outline' size={18} />
                  <Text style={styles.newBetButtonsAddCart}>Add to cart</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.newBetBottomLineCenter}>
              <View style={styles.newBetBottomLine}></View>
            </View>
            {whichLoteriaIsVar === -1 ? null : (
              <View style={styles.newBetRowNumbers}>
                {numbersList.map((num: any) => (
                  <TouchableOpacity key={Math.random()}>
                    <NewBetNumbers
                      onPress={changeButtonColor.bind(null, num)}
                      backgroundColor={
                        totalNumbers.indexOf(num) === -1
                          ? num.color
                          : gamesJson[whichLoteriaIsVar - 1].color
                      }
                      id={num.id}
                    >
                      {formatNumber(num)}
                    </NewBetNumbers>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default newBet;
