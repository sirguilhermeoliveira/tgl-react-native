import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import createStyles from './styles';
import HeaderAuth from '../../components/HeaderAuth/index';

const home: React.FC = () => {
  const styles = createStyles();
  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderAuth />
        <View style={styles.homePadding}>
          <Text style={styles.homeRecentGames}>recent games</Text>
          <Text style={styles.homeFilterTitle}>Filters</Text>
          <ScrollView horizontal={true} style={styles.homeGamesRow}>
            <TouchableOpacity>
              <Text style={styles.homeGame}>Lotofácil</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.homeGame}>Mega-Sena</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.homeGame}>Lotomania</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.homeSideBar}>
            <Text style={styles.homeListGameNumbers}>
              01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21 ,22 ,23 ,24 ,25, 26,
              27, 28, 39, 31, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48, 50
            </Text>
            <Text style={styles.homeListGameData}>27/11/2020 - (R$ 2,50)</Text>
            <Text style={styles.homeListGame}>Lotomania</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default home;
