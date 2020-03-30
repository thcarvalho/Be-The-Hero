/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { ThemeConsumer } from 'styled-components';

import { ThemeContext } from '../../../App';
import { Container, Header } from '../../config/global-styles';
import styles, {
  OptionContainer,
  ContainerText,
  ContainerSubtext,
  ContainerAlign,
  HeaderText,
} from './styles';
import geolocationIncidents from '../../config/geolocationIncidents';
import GeolocationModal from '../../components/GeolocationModal';
import dark from '../../config/themes/dark';
import light from '../../config/themes/light';
import AsyncStorage from '@react-native-community/async-storage';

export default function Config() {
  const themeContext = useContext(ThemeConsumer);
  const setThemeContext = useContext(ThemeContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [radioChecked, setRadioChecked] = useState('Desligado');
  const [theme, setTheme] = useState(themeContext);

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

  async function changeTheme() {
    setThemeContext(theme.title === 'Light' ? dark : light);
    await AsyncStorage.setItem('@theme', theme.title === 'Light' ? 'Dark' : 'Light');
    setTheme(theme.title === 'Light' ? dark : light);
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
        style={{ marginTop: 20 }}>
        <ContainerText>Mostrar apenas casos mais próximos de mim</ContainerText>
        <ContainerSubtext>{radioChecked}</ContainerSubtext>
      </OptionContainer>
      <OptionContainer>
        <ContainerAlign>
          <ContainerText>Dark Mode</ContainerText>
          <TouchableOpacity onPress={changeTheme}>
            <Feather
              name={theme.title === 'Light' ? 'moon' : 'sun'}
              size={28}
              color={theme.title === 'Light' ? '#41414d' : '#fff'}
            />
          </TouchableOpacity>
        </ContainerAlign>
      </OptionContainer>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver={true}
        coverScreen={false}>
        <GeolocationModal
          radioChecked={radioChecked}
          setGeolocationConfig={setGeolocationConfig}
        />
      </Modal>
    </Container>
  );
}
