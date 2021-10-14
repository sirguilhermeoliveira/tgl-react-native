import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import createStyles from './styles';
import useTheme from '../../theme/index';
import { authActions } from '../../store/auth';
import type { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const HeaderAuth: React.FC = ({ beforeNavigation }: any) => {
  const styles = createStyles();
  const dispatch = useDispatch<AppDispatch>();
  const {
    colors: { ghostGray, greenYellow },
  } = useTheme();
  const { navigate } = useNavigation();

  function Loggout() {
    alert('Congratulations, Loggout with sucess');
    beforeNavigation.push('Login');
  }

  return (
    <View style={styles.homeRow}>
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitle}>TGL</Text>
        <View style={styles.homeTitleBottomBar} />
      </View>
      <TouchableOpacity onPress={Loggout} style={styles.homeRowIcons}>
        <MaterialIcons
          style={styles.homeArrow}
          color={ghostGray}
          name='logout'
          size={35}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderAuth;
