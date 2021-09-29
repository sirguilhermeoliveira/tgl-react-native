import React from 'react';
import { Text } from 'react-native';
import createStyles from './styles';

const Footer: React.FC = () => {
  const styles = createStyles();
  return <Text style={styles.footer}>Copyright 2021 Luby Software</Text>;
};

export default Footer;
