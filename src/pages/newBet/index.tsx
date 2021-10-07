import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerLayoutAndroid } from 'react-native';
import createStyles from './styles';
import useTheme from '../../theme/index';
import { Ionicons } from '@expo/vector-icons';
import type { AppDispatch, RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { cartActions } from '../../store/cart';
import { HomeGame, HomeGamesRow } from './styles';
import { types as gamesJson } from '../../database/games.json';
import { formatNumber, formatNumberCartTotal } from '../../utils/index';
import CartBet from '../../components/CartBet/index';

const newBet: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const drawer = useRef<DrawerLayoutAndroid | null>(null);
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

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const allBets = useSelector((state: RootState) => state.cart.games);
  const dispatch = useDispatch<AppDispatch>();
  const [whichLoteriaIsVar, setWhichLoteriaIsVar] = useState<any>(0);
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const color = gamesJson[whichLoteriaIsVar].color;
  const [getDescription, setGetDescription] = useState(
    gamesJson[whichLoteriaIsVar].description
  );

  const [getFor, setGetFor] = useState(gamesJson[whichLoteriaIsVar].type);
  const [range, setRange] = useState(gamesJson[whichLoteriaIsVar].range);
  const numbersList = Array.from(Array(range).keys()).map((num) => num + 1);
  const changeGameColor = (event: any) => {
    const newGame = event.target.id;
    setWhichLoteriaIsVar(newGame);
    setGetDescription(gamesJson[newGame].description);
    setGetFor(gamesJson[newGame].type);
    setRange(gamesJson[newGame].range);
    setTotalNumbers([]);
  };

  useEffect(() => {
    let url = 'http://192.168.56.1:3333/games';
    axios
      .get(url)
      .then((res: any) => {
        if (res.status === 200) {
          const gamesHelper = res.data;
          console.log(res.data);
          setallTheGames(gamesHelper.reverse());
          return;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  const [getallTheGames, setallTheGames]: any = useState([]);

  /*    style={styles.whichLoteriaIsVar === item.type ? 'active' : ''} */

  const getGames: any = getallTheGames.map((item: any, index: any) => (
    <HomeGame
      id={index}
      key={item.type}
      onPress={changeGameColor}
      color={item.color}
    >
      {item.type}
    </HomeGame>
  ));

  const completeGame = () => {
    let randomNumber = 1;
    let maxNumberJSON = gamesJson[whichLoteriaIsVar]['max-number'];
    let helperTotalNumbers = totalNumbers;
    if (maxNumberJSON === helperTotalNumbers.length) {
      helperTotalNumbers = [];
    }
    for (let i = 1; helperTotalNumbers.length <= maxNumberJSON - 1; i++) {
      do {
        randomNumber = Math.floor(
          Math.random() * gamesJson[whichLoteriaIsVar].range + 1
        );
      } while (helperTotalNumbers.indexOf(randomNumber) !== -1);
      helperTotalNumbers.push(randomNumber);
      setTotalNumbers([...helperTotalNumbers]);
    }
  };

  const addCart = () => {
    if (totalNumbers.length !== gamesJson[whichLoteriaIsVar]['max-number']) {
      alert(
        'Error, you cant add to cart without all ' +
          gamesJson[whichLoteriaIsVar]['max-number'] +
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

  function saveCart() {
    console.log(allBets[0].game_id);
    let bets: any = [];
    for (let i = 0; i < allBets.length; i++) {
      bets.push({
        game_id: allBets[i].game_id,
        game_numbers: allBets[i].bet.toString(),
      });
    }
    if (totalPrice < 30) {
      alert('The minimum in cart has to be R$ 30,00');
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

  const clearGame = () => {
    setTotalNumbers([]);
  };

  const [totalNumbers, setTotalNumbers] = useState([] as Number[]);
  const changeButtonColor = (event: any) => {
    if (
      totalNumbers.length === gamesJson[whichLoteriaIsVar]['max-number'] &&
      totalNumbers.indexOf(Number(event.currentTarget.id)) === -1
    ) {
      return alert('This is the limit of numbers you can choose.');
    }
    if (totalNumbers.indexOf(Number(event.currentTarget.id)) === -1) {
      totalNumbers.push(Number(event.currentTarget.id));
      setTotalNumbers([...totalNumbers]);
    } else {
      totalNumbers.splice(
        totalNumbers.indexOf(Number(event.currentTarget.id)),
        1
      );
      setTotalNumbers([...totalNumbers]);
    }
  };

  const navigationView = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        onPress={() => drawer.current!.closeDrawer()}
        style={styles.drawerRowXToEnd}
      >
        <Ionicons
          style={styles.drawerXToEnd}
          color={greenYellow}
          name='close-outline'
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.drawerRow}>
        <Ionicons
          style={styles.newBetX}
          color={greenYellow}
          name='cart-outline'
          size={35}
        />
        <Text style={styles.drawerCart}>cart</Text>
      </View>
      <ScrollView>
        <CartBet />
      </ScrollView>
      <View style={styles.drawerCartTotalBottom}>
        <Text style={styles.drawerCartTotalText}>
          <Text style={styles.drawerCartTotalTextBoldCart}>cart</Text> total:{' '}
        </Text>
        <Text style={styles.drawerCartTotalTextBoldCartPrice}>r$ 7,50</Text>
      </View>
      <View style={styles.drawerBottomSaveContainer}>
        <Text style={styles.drawerBottomSave}>Save</Text>
        <Ionicons
          style={styles.drawerBottomSaveArrow}
          color={greenYellow}
          name='arrow-forward-outline'
          size={35}
        />
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='right'
      renderNavigationView={navigationView}
    >
      <View style={styles.homeRow}>
        <Text style={styles.homeTitle}>TGL</Text>
        <View style={styles.homeRowIcons}>
          <TouchableOpacity onPress={() => drawer.current!.openDrawer()}>
            <Ionicons color={greenYellow} name='cart-outline' size={35} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.replace('Login')}
              style={styles.homeArrow}
              color={ghostGray}
              name='arrow-forward'
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.newBetPadding}>
            <Text style={styles.newBetTitle}>new bet for {getFor}</Text>
            <Text style={styles.newBetChooseGame}>Choose a game</Text>
            <HomeGamesRow horizontal={true}>{getGames}</HomeGamesRow>
            <View style={styles.newBetRowNumbers}>
              <TouchableOpacity style={styles.newBetNumbersMin}>
                <Text style={styles.newBetNumbersNumber}>01</Text>
                <Ionicons
                  style={styles.newBetX}
                  color={white}
                  name='close-outline'
                  size={12}
                />
              </TouchableOpacity>
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
            <Text style={styles.newBetFill}>Fill your bet</Text>
            <Text style={styles.newBetFillDescription}>{getDescription}</Text>

            <View style={styles.newBetBottomLineCenter}>
              <View style={styles.newBetBottomLine}></View>
            </View>
            <View style={styles.newBetRowNumbers}>
              {numbersList.map((num: any) => (
                <TouchableOpacity onPress={changeButtonColor}>
                  <Text
                    style={styles.newBetNumbers}
                    /*                     id={num.toString()} */
                    /*                     className={
                      totalNumbers.indexOf(num) === -1 ? 'desactive' : 'active'
                    } */
                    /*                     color={color} */
                    key={num}
                  >
                    {formatNumber(num)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default newBet;
