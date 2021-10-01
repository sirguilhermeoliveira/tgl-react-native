import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import createStyles from './styles';
import useTheme from '../../theme/index';

const HeaderAuth: React.FC = () => {
  const styles = createStyles();
  const {
    colors: { ghostGray, greenYellow },
  } = useTheme();
  return (
    <View style={styles.homeRow}>
      <Text style={styles.homeTitle}>TGL</Text>
      <View style={styles.homeRowIcons}>
        <Ionicons color={greenYellow} name='cart-outline' size={35} />
        <Ionicons
          style={styles.homeArrow}
          color={ghostGray}
          name='arrow-forward'
          size={35}
        />
      </View>
    </View>
  );
};

export default HeaderAuth;
