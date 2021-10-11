import React from 'react';
import { Text, View } from 'react-native';
import createStyles from './styles';

function Header({ animation }: any) {
  const styles = createStyles();
  return (
    <View
      style={animation ? styles.containerHeaderBlack : styles.containerHeader}
    >
      <Text style={styles.header}>TGL</Text>
      <View style={styles.barHeader} />
    </View>
  );
}

export default Header;
