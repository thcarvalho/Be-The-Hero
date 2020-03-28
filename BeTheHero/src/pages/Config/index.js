import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';


import global from '../../config/global-styles';
import styles from './styles';
import geolocationIncidents from '../../config/geolocationIncidents';

export default function Config() {
  const [modalVisible, setModalVisible] = useState(false);
  const [radioChecked, setRadioChecked] = useState('Desligado');
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  async function setGeolocationConfig(config) {
    if (config === 'Ligado') {
      await geolocationIncidents.setGeolocationIncidents('true');
    } else {
      await geolocationIncidents.setGeolocationIncidents('false');
    }
    setRadioChecked(config);
  }

  useEffect(() => {
    geolocationIncidents.isGeolocationIncidents().then(value => {
      console.log(value);
      if (value === 'true') {
        setRadioChecked('Ligado');
      } else {
        setRadioChecked('Desligado');
      }
    });
  }, []);

  return (
    <View style={global.container}>
      <View style={global.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Configurações</Text>
        <View />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.optionContainer, { marginTop: 20 }]}>
        <Text style={styles.containerText}>
          Mostrar apenas casos mais próximos de mim
        </Text>
        <Text style={styles.containerSubtext}>{radioChecked}</Text>
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <View style={styles.containerAlign}>
          <Text style={styles.containerText}>Dark Mode</Text>
          <TouchableOpacity onPress={() => { }}>
            <Feather name="sun" size={28} color="#41414d" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver={true}
        coverScreen={false}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Mostrar apenas casos mais próximos de mim?
          </Text>
          <View style={styles.radioContainer}>
            <RadioButton
              color="#e02041"
              value="Ligado"
              status={radioChecked === 'Ligado' ? 'checked' : 'unchecked'}
              onPress={() => setGeolocationConfig('Ligado')}
            />
            <Text style={styles.radioSelection}>Ligado</Text>
          </View>
          <View style={[styles.radioContainer, { borderBottomWidth: 0 }]}>
            <RadioButton
              color="#e02041"
              value="Desligado"
              status={radioChecked === 'Desligado' ? 'checked' : 'unchecked'}
              onPress={() => setGeolocationConfig('Desligado')}
            />
            <Text style={styles.radioSelection}>Desligado</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
