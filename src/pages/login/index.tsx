import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';

const login: React.FC = () => {
  const styles = createStyles();
  const {
    colors: { gray, greenYellow },
  } = useTheme();
  function handleSubmit() {
    console.log('batatinhafrita?');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.formTitle}>Authentication</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, values }: any) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Email'
            />
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder='Password'
            />
            <Text style={styles.formForgetPassword}>I forget my password</Text>
            <TouchableOpacity style={styles.formRow} onPress={handleSubmit}>
              <Text style={styles.formLogIn}>Log In</Text>
              <Ionicons
                style={styles.formArrowRight}
                name='arrow-forward'
                color={greenYellow}
                size={35}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.formRow}>
        <Text style={styles.formSignUp}>Sign Up</Text>
        <Ionicons
          style={styles.formArrowRight}
          name='arrow-forward'
          color={gray}
          size={35}
        />
      </View>
      <Footer />
      <Footer />
    </View>
  );
};

export default login;
