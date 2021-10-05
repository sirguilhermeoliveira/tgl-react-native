import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import createStyles from './styles';
import HeaderAuth from '../../components/HeaderAuth/index';
import useTheme from '../../theme/index';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Account: React.FC = () => {
  const styles = createStyles();
  const userId = useSelector((state: RootState) => state.auth.user_id);
  const [modalVisible, setModalVisible] = useState(false);
  const [whichUpdate, setWhichUpdate] = useState(false);

  const {
    colors: { greenYellow },
  } = useTheme();
  const schema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Name Too Long')
      .min(4, 'Name Too Short')
      .required('Name Required'),
  });

  function openModalFunctionName() {
    setWhichUpdate(true);
    setModalVisible(!modalVisible);
  }

  function openModalFunctionPassword() {
    setWhichUpdate(false);
    setModalVisible(!modalVisible);
  }

  const submitNameHandler = (event: any) => {
    let url = 'http://192.168.56.1:3333/users/' + userId;

    axios
      .put(url, {
        username: event.name,
      })
      .then((res: any) => {
        if (res.status === 200) {
          alert('Username changed with sucess!!');
          setModalVisible(false);
          return;
        }
      })
      .catch((err: any) => {
        alert('Something is wrong.');
      });
  };

  const submitPasswordHandler = (event: any) => {
    let url = 'http://192.168.56.1:3333/users/' + userId;

    axios
      .put(url, {
        username: event.name,
      })
      .then((res: any) => {
        if (res.status === 200) {
          alert('Username changed with sucess!!');
          setModalVisible(false);
          return;
        }
      })
      .catch((err: any) => {
        alert('Something is wrong.');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={modalVisible ? styles.containerBackgroundBlack : styles.container}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {whichUpdate ? (
          <Formik
            validationSchema={schema}
            initialValues={{ name: '' }}
            onSubmit={(values) => submitNameHandler(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
            }: any) => (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.modalText}
                    placeholder='New Username'
                    placeholderTextColor={greenYellow}
                  />
                  {errors.name ? (
                    <Text style={styles.formErrors}>{errors.name}</Text>
                  ) : null}
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.textStyle}>Send New Username</Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        ) : (
          <Formik
            validationSchema={schema}
            initialValues={{ password: '' }}
            onSubmit={(values) => submitPasswordHandler(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
            }: any) => (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.modalText}
                    placeholder='New Password'
                    placeholderTextColor={greenYellow}
                  />
                  {errors.password ? (
                    <Text style={styles.formErrors}>{errors.password}</Text>
                  ) : null}
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.textStyle}>Send New Password</Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        )}
      </Modal>
      <HeaderAuth />
      <Text style={styles.accountCenterTitle}>
        This is your Account Details
      </Text>
      <View style={styles.accountCenter}>
        <TouchableOpacity onPress={openModalFunctionName}>
          <Text style={styles.accountCenterSubtitle}>
            Click here to edit your{' '}
            <Text style={styles.accountCenterUnderline}>username</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openModalFunctionPassword}>
          <Text style={styles.accountCenterSubtitle}>
            Click here to edit your{' '}
            <Text style={styles.accountCenterUnderline}>password</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Account;
