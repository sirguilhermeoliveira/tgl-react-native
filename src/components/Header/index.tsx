import React from 'react';
import { Text, View } from 'react-native';
import createStyles from './styles';

const Header: React.FC = () => {
  const styles = createStyles();
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.header}>TGL</Text>
      <View style={styles.barHeader} />
    </View>
  );
};

export default Header;
