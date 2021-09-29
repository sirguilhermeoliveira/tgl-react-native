import React from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';

const home: React.FC = () => {
  const styles = createStyles();
  const {
    colors: { gray, ghostGray },
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.homeRow}>
        <Text style={styles.homeTitle}>TGL</Text>
        <Ionicons color={ghostGray} name='arrow-forward' size={35} />
      </View>
      <Text>recent games</Text>
      <Text>filters</Text>
      <View>
        <Text>Lotofácil</Text>
        <Text>Mega-Sena</Text>
        <Text>Lotomania</Text>
      </View>
      <View>
        <Text>
          01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21 ,22 ,23 ,24 ,25, 26, 27,
          28, 39, 31, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48, 50
        </Text>
        <Text>27/11/2020 - (R$ 2,50)</Text>
        <Text>Lotomania</Text>
        <Text>BOTTOM TAB É O NOME DA PARADA</Text>
      </View>
    </View>
  );
};

export default home;
