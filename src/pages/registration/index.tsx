import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../utils/index';

const registration: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const [loading, setLoading]: any = useState(false);
  const {
    colors: { gray, greenYellow, borderGray },
  } = useTheme();

  const submitHandler = async (event: any) => {
    setLoading(true);
    let url = BASE_URL + '/users';
    const nameInput = event.name;
    const emailInput = event.email;
    const passwordInput = event.password;

    axios
      .post(url, {
        username: nameInput,
        email: emailInput,
        password: passwordInput,
      })
      .then((res: any) => {
        alert('Congratulations, you are registred!');
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Login');
        }, 500);
        return;
      })
      .catch((err: any) => {
        setLoading(false);
        alert(err);
      });
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Name Too Short, need 4 letters')
      .max(50, 'Name Too Long')
      .required('Name Required'),
    email: Yup.string()
      .max(50, 'Email Too Long')
      .email('Invalid email')
      .required('Email Required'),
    password: Yup.string()
      .min(6, 'Password Too Short')
      .max(50, 'Password Too Long')
      .required('Password Required'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {!loading ? (
        <View>
          <Header />
          <Text style={styles.formTitle}>Registration</Text>
          <Formik
            validationSchema={schema}
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => submitHandler(values)}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              handleSubmit,
            }: any) => (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder='Name'
                />
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Email'
                />
                <View style={styles.formInputContainer}>
                  <TextInput
                    style={styles.formInputText}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder='Password'
                  />
                  <View>
                    <Ionicons
                      style={styles.formInputPassword}
                      name='eye-outline'
                      color={borderGray}
                      size={30}
                    />
                  </View>
                </View>
                <View style={styles.formErrorsContainer}>
                  {errors.name ? (
                    <Text style={styles.formErrors}>{errors.name}</Text>
                  ) : null}
                  {errors.email ? (
                    <Text style={styles.formErrors}>{errors.email}</Text>
                  ) : null}
                  {errors.password ? (
                    <Text style={styles.formErrors}>{errors.password}</Text>
                  ) : null}
                </View>
                <TouchableOpacity style={styles.formRow} onPress={handleSubmit}>
                  <Text style={styles.formLogIn}>Register</Text>
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.formRow}
          >
            <Ionicons
              style={styles.formArrowRight}
              name='arrow-back'
              color={gray}
              size={35}
            />
            <Text style={styles.formSignUp}>Back</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}></View>
        </View>
      ) : (
        <View style={styles.containerLoading}>
          <ActivityIndicator
            animating={true}
            size='large'
            color={greenYellow}
          />
        </View>
      )}
      <Footer loading={loading} />
    </KeyboardAvoidingView>
  );
};

export default registration;
