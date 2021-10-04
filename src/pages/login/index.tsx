import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';
import { authActions } from '../../store/auth';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import axios from 'axios';
import * as Yup from 'yup';

const login: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const dispatch = useDispatch<AppDispatch>();

  const {
    colors: { gray, greenYellow },
  } = useTheme();

  const schema = Yup.object().shape({
    email: Yup.string()
      .max(50, 'Email Too Long')
      .email('Invalid email')
      .required('Email Required'),
    password: Yup.string()
      .min(6, 'Password Too Short')
      .max(50, 'Password Too Long')
      .required('Password Required'),
  });

  const submitHandler = (event: any) => {
    let url = 'http://127.0.0.1:3333/login';
    axios
      .post(url, {
        email: event.email,
        password: event.password,
      })
      .then((res: any) => {
        if (res.status === 200) {
          if (res.data.token) {
            alert('Logged In with sucess!');
            setTimeout(() => {
              dispatch(authActions.login(res.data.token));
              dispatch(authActions.loginEmail(res.data.user_id));
            }, 1000);
            return;
          }
        }
      })
      .catch((err: any) => {
        alert('Email or Password wrong.');
      });
  };

  function NavigateToSignUp() {
    navigation.navigate('Registration');
  }
  function NavigateToForgetPassword() {
    navigation.navigate('ResetPassword');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.formTitle}>Authentication</Text>
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => submitHandler(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
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
            {errors.email ? (
              <Text style={styles.formErrors}>{errors.email}</Text>
            ) : null}
            {errors.password ? (
              <Text style={styles.formErrors}>{errors.password}</Text>
            ) : null}
            <Text
              style={styles.formForgetPassword}
              onPress={NavigateToForgetPassword}
            >
              I forget my password
            </Text>
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
      <TouchableOpacity style={styles.formRow}>
        <Text style={styles.formSignUp} onPress={NavigateToSignUp}>
          Sign Up
        </Text>
        <Ionicons
          style={styles.formArrowRight}
          name='arrow-forward'
          color={gray}
          size={35}
        />
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

export default login;
