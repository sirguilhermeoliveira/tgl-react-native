import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/icons/Splash.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Image,
  Animated,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
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
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';
import { BASE_URL } from '../../utils/index';

const login: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, SetLoading]: any = useState(false);
  const {
    colors: { gray, greenYellow, borderGray },
  } = useTheme();

  const startAnimation = useRef(new Animated.Value(0)).current;
  const [animation, SetAnimation] = useState<any>(false);
  useEffect(() => {
    animationLogin();
    setTimeout(() => {
      SetAnimation(false);
    }, 3500);
  }, []);

  function animationLogin() {
    SetAnimation(true);
    Animated.sequence([
      Animated.timing(startAnimation, {
        toValue: -400,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(({ finished: done }) => {
      if (done) {
        Animated.timing(startAnimation, {
          toValue: -380,
          duration: 1000,
          useNativeDriver: true,
        }).start(({ finished: done }) => {
          if (done) {
            Animated.timing(startAnimation, {
              toValue: -2000,
              duration: 1500,
              useNativeDriver: true,
            }).start();
          }
        });
      }
    });
  }

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
    SetLoading(true);
    let url = BASE_URL + '/login';
    const emailInput = event.email;
    const passwordInput = event.password;

    axios
      .post(url, {
        email: emailInput,
        password: passwordInput,
      })
      .then((res: any) => {
        dispatch(authActions.loginEmail(res.data.user_id));
        alert('Logged in with sucess!');
        setTimeout(() => {
          navigation.navigate('LoggedStack');
          SetLoading(false);
        }, 500);
        return;
      })
      .catch((err: any) => {
        alert(err);
        SetLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={animation ? styles.containerBlack : styles.container}
    >
      {animation ? (
        <View
          style={{
            position: 'absolute',
            top: 845,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Animated.View
            style={{
              flex: 1,
              zIndex: 1,
              transform: [{ translateY: startAnimation }],
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image source={Logo}></Image>
            </Animated.View>
          </Animated.View>
        </View>
      ) : null}
      {!loading ? (
        <View style={animation ? styles.containerBlack : styles.container}>
          <Header animation={animation} />
          <Text style={animation ? styles.formTitleBlack : styles.formTitle}>
            Authentication
          </Text>
          <Formik
            validationSchema={schema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => submitHandler(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
            }: any) => (
              <View
                style={
                  animation ? styles.formContainerBlack : styles.formContainer
                }
              >
                <TextInput
                  style={styles.formInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Email'
                />
                <View style={styles.formInput}>
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
                  {errors.email ? (
                    <Text style={styles.formErrors}>{errors.email}</Text>
                  ) : null}
                  {errors.password ? (
                    <Text style={styles.formErrors}>{errors.password}</Text>
                  ) : null}
                </View>
                <TouchableOpacity>
                  <Text
                    style={styles.formForgetPassword}
                    onPress={() => navigation.navigate('ResetPassword')}
                  >
                    I forget my password
                  </Text>
                </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={styles.formRow}
          >
            <Text
              style={animation ? styles.formSignUpBlack : styles.formSignUp}
            >
              Sign Up
            </Text>
            <Ionicons
              style={
                animation ? styles.formArrowRightBlack : styles.formArrowRight
              }
              name='arrow-forward'
              color={gray}
              size={35}
            />
          </TouchableOpacity>
          <Footer animation={animation} />
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
    </KeyboardAvoidingView>
  );
};

export default login;
