import React from 'react';
import { Text, KeyboardAvoidingView, Platform } from 'react-native';
import createStyles from './styles';

function Footer({ animation }: any) {
  const styles = createStyles();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={500}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.footerContainer}
    >
      <Text style={animation ? styles.footerBlack : styles.footer}>
        Copyright 2021 Luby Software
      </Text>
    </KeyboardAvoidingView>
  );
}

export default Footer;
