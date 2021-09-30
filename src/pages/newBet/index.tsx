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
        <Text>Choose a game</Text>
        <View>
          <Text>Lotofácil</Text>
          <Text>Mega-Sena</Text>
          <Text>Lotomania</Text>
        </View>
        <Text>Fill your bet</Text>
        <Text>Mark as many numbers as you want up to a maximum of 50</Text>
        <Text>
          Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn
        </Text>
        <Text>___</Text>
        <View>
          <Text>01</Text>
          <Text>02</Text>
          <Text>03</Text>
          <Text>04</Text>
          <Text>05</Text>
          <Text>06</Text>
          <Text>07</Text>
          <Text>08</Text>
          <Text>09</Text>
          <Text>10</Text>
        </View>
      </View>
    </View>
  );
};

export default newBet;
