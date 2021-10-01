import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyles from './styles';
import HeaderAuth from '../../components/HeaderAuth/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';

const newBet: React.FC = () => {
  const styles = createStyles();
  const {
    colors: { white, greenYellow },
  } = useTheme();
  return (
    <View style={styles.container}>
      <HeaderAuth />
      <Text>Tab Navigator faltando e modal de lado direito</Text>
      <View style={styles.newBetPadding}>
        <Text style={styles.newBetTitle}>new bet for lotomania</Text>
        <Text style={styles.newBetChooseGame}>Choose a game</Text>
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
          <TouchableOpacity style={styles.newBetButtonsLeft}>
            <Text style={styles.newBetButtons}>Complete game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetButtonsLeft}>
            <Text style={styles.newBetButtons}>Clear game</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.newBetButtonsCart}>
              <Ionicons color={white} name='cart-outline' size={18} />
              <Text style={styles.newBetButtonsAddCart}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.newBetRow}>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotofácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Mega-Sena</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotomania</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newBetFill}>Fill your bet</Text>
        <Text style={styles.newBetFillDescription}>
          Mark as{' '}
          <Text style={styles.newBetFillDescriptionBold}>many numbers</Text> as
          you want up to a{' '}
          <Text style={styles.newBetFillDescriptionBold}>maximum of 50</Text>
        </Text>
        <Text style={styles.newBetFillDescription}>
          Win by hitting{' '}
          <Text style={styles.newBetFillDescriptionBold}>
            15, 16, 17, 18, 19, 20
          </Text>{' '}
          or <Text style={styles.newBetFillDescriptionBold}>none</Text> of the{' '}
          <Text style={styles.newBetFillDescriptionBold}>
            20 numbers drawn.
          </Text>
        </Text>
        <View style={styles.newBetBottomLineCenter}>
          <View style={styles.newBetBottomLine}></View>
        </View>
        <View style={styles.newBetRowNumbers}>
          <Text style={styles.newBetNumbers}>01</Text>
          <Text style={styles.newBetNumbers}>02</Text>
          <Text style={styles.newBetNumbers}>03</Text>
          <Text style={styles.newBetNumbers}>04</Text>
          <Text style={styles.newBetNumbers}>05</Text>
          <Text style={styles.newBetNumbers}>06</Text>
          <Text style={styles.newBetNumbers}>07</Text>
          <Text style={styles.newBetNumbers}>08</Text>
          <Text style={styles.newBetNumbers}>09</Text>
          <Text style={styles.newBetNumbers}>10</Text>
        </View>
      </View>
    </View>
  );
};

export default newBet;
