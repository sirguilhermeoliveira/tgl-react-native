import React from 'react';
import { Text } from 'react-native';
import createStyles from './styles';

const Header: React.FC = () => {
  const styles = createStyles();
  return <Text style={styles.header}>TGL</Text>;
};

export default Header;
