import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import createStyles from './styles';
import Header from '../../components/Header/index';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../theme/index';
import Footer from '../../components/Footer/index';

const resetPassword: React.FC = () => {
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
      <Text style={styles.formTitle}>Reset password</Text>
      <Formik
        initialValues={{ email: '' }}
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
      <View style={styles.formRow}>
        <Ionicons
          style={styles.formArrowRight}
          name='arrow-back'
          color={gray}
          size={35}
        />
        <Text style={styles.formSignUp}>Back</Text>
      </View>
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
    </View>
  );
};

export default resetPassword;
