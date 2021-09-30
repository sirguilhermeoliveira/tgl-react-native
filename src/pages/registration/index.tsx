import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';

const registration: React.FC = () => {
  const styles = createStyles();
  const {
    colors: { gray, greenYellow },
  } = useTheme();
  function handleSubmit(event: any) {
    console.log(event);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.formTitle}>Registration</Text>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, values }: any) => (
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
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder='Password'
            />
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
      <View style={styles.formRow}>
        <Ionicons
          style={styles.formArrowRight}
          name='arrow-back'
          color={gray}
          size={35}
        />
        <Text style={styles.formSignUp}>Back</Text>
      </View>
      <Footer />
      <Footer />
    </View>
  );
};

export default registration;
