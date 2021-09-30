import React from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import HeaderAuth from '../../components/HeaderAuth/index';

const newBet: React.FC = () => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderAuth />
      <View style={styles.newBetPadding}>
        <Text style={styles.newBetTitle}>new bet for lotomania</Text>
        <Text style={styles.newBetChooseGame}>Choose a game</Text>
        <View style={styles.newBetRow}>
          <Text style={styles.newBetGames}>Lotofácil</Text>
          <Text style={styles.newBetGames}>Mega-Sena</Text>
          <Text style={styles.newBetGames}>Lotomania</Text>
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
