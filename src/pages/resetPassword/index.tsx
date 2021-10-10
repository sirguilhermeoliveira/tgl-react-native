import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';
import axios from 'axios';
import { BASE_URL } from '../../utils/index';
import * as Yup from 'yup';

const resetPassword: React.FC = ({ navigation }: any) => {
  const styles = createStyles();
  const {
    colors: { gray, greenYellow },
  } = useTheme();

  const submitHandler = (event: any) => {
    let url = BASE_URL + '/passwords';

    axios
      .post(url, {
        email: event.email,
        redirect_url: `http://192.168.56.1:3000/recoveryPassword/`,
      })
      .then((res: any) => {
        alert('Email send to:' + event.email);
        navigation.navigate('Login');
        return;
      })
      .catch((err: any) => {
        alert('Email doesnt exist on our database');
      });
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .max(50, 'Email Too Long')
      .email('Invalid email')
      .required('Email Required'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header />
      <Text style={styles.formTitle}>Reset password</Text>
      <Formik
        validationSchema={schema}
        initialValues={{ email: '' }}
        onSubmit={(values) => submitHandler(values)}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }: any) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Email'
            />
            {errors.email ? (
              <Text style={styles.formErrors}>{errors.email}</Text>
            ) : null}
            <TouchableOpacity style={styles.formRow} onPress={handleSubmit}>
              <Text style={styles.formLogIn}>Send link</Text>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
        style={styles.formRow}
      >
        <Text style={styles.formSignUp}>Sign Up</Text>
        <Ionicons
          style={styles.formArrowRight}
          name='arrow-forward'
          color={gray}
          size={35}
        />
      </TouchableOpacity>
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default resetPassword;
