import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import createStyles from './styles';
import useTheme from '../../theme/index';
import { authActions } from '../../store/auth';
import type { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const HeaderAuth: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const dispatch = useDispatch<AppDispatch>();
  const {
    colors: { ghostGray, greenYellow },
  } = useTheme();
  const { navigate } = useNavigation();

  function Loggout() {
    alert('Congratulations, Loggout with sucess');
    navigation.push('Login');
  }

  return (
    <View style={styles.homeRow}>
      <Text style={styles.homeTitle}>TGL</Text>
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
