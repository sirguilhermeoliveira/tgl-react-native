import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import createStyles from './styles';
import HeaderAuth from '../../components/HeaderAuth/index';
import Footer from '../../components/Footer/index';
import useTheme from '../../theme/index';

const Account: React.FC = () => {
  const styles = createStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    colors: { greenYellow },
  } = useTheme();
  return (
    <View
      style={modalVisible ? styles.containerBackgroundBlack : styles.container}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <TextInput
              style={styles.modalText}
              placeholder='New Username'
              placeholderTextColor={greenYellow}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Send New Username</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <HeaderAuth />
      <Text style={styles.accountCenterTitle}>
        This is your Account Details
      </Text>
      <View style={styles.accountCenter}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.accountCenterSubtitle}>
            Click here to edit your{' '}
            <Text style={styles.accountCenterUnderline}>username</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.accountCenterSubtitle}>
            Click here to edit your{' '}
            <Text style={styles.accountCenterUnderline}>password</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
