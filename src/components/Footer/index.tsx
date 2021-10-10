import React from 'react';
import { Text, KeyboardAvoidingView, Platform } from 'react-native';
import createStyles from './styles';

const Footer: React.FC = () => {
  const styles = createStyles();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={500}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.footerContainer}
    >
      <Text style={styles.footer}>Copyright 2021 Luby Software</Text>
    </KeyboardAvoidingView>
  );
};

export default Footer;
