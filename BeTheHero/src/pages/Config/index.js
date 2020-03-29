/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';

import {Container, Header} from '../../config/global-styles';
import styles, {
  OptionContainer,
  ContainerText,
  ContainerSubtext,
  ContainerAlign,
  ModalText,
  RadioContainer,
  RadioSelection,
  ModalContainer,
  HeaderText,
} from './styles';
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
    <Container>
      <Header>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        <HeaderText>Configurações</HeaderText>
        <View />
      </Header>
      <OptionContainer
        onPress={() => setModalVisible(true)}
        style={{marginTop: 20}}>
        <ContainerText>Mostrar apenas casos mais próximos de mim</ContainerText>
        <ContainerSubtext>{radioChecked}</ContainerSubtext>
      </OptionContainer>
      <OptionContainer>
        <ContainerAlign>
          <ContainerText>Dark Mode</ContainerText>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="sun" size={28} color="#41414d" />
          </TouchableOpacity>
        </ContainerAlign>
      </OptionContainer>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver={true}
        coverScreen={false}>
        <ModalContainer>
          <ModalText>Mostrar apenas casos mais próximos de mim?</ModalText>
          <RadioContainer>
            <RadioButton
              color="#e02041"
              value="Ligado"
              status={radioChecked === 'Ligado' ? 'checked' : 'unchecked'}
              onPress={() => setGeolocationConfig('Ligado')}
            />
            <RadioSelection>Ligado</RadioSelection>
          </RadioContainer>
          <RadioContainer style={{borderBottomWidth: 0}}>
            <RadioButton
              color="#e02041"
              value="Desligado"
              status={radioChecked === 'Desligado' ? 'checked' : 'unchecked'}
              onPress={() => setGeolocationConfig('Desligado')}
            />
            <RadioSelection>Desligado</RadioSelection>
          </RadioContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
