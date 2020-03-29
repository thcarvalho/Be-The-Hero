/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import styles, {
  HeaderText,
  Title,
  Description,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailButton,
  DetailButtonText,
  HeaderTextBold,
} from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import { Container, Header } from '../../config/global-styles';
import geolocationIncidents from '../../config/geolocationIncidents';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }
  function navigateToConfig() {
    navigation.navigate('Config');
  }

  function loadIncidents(coords) {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    api.get('incidents', {
      params: { page, coords },
    })
      .then(response => {
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
      });

  }

  useEffect(() => {
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('@firstLaunch')
      .then(async value => {
        if (value === null) {
          await AsyncStorage.setItem('@firstLaunch', 'false');
          await AsyncStorage.setItem('@theme', 'light');
          await AsyncStorage.setItem('@geoConfig', 'false');
          geolocationIncidents.setGeolocationIncidents('false');
        }
      });
  }, []);

  useEffect(() => {
    geolocationIncidents.isGeolocationIncidents()
      .then(value => {
        if (value === 'true') {
          const coords = Geolocation.getCurrentPosition();
          return loadIncidents(coords);
        }
        loadIncidents();
      });
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg}/>
        <HeaderText>
          Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
        </HeaderText>
        <TouchableOpacity onPress={navigateToConfig}>
          <Feather name="settings" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <Title>Bem Vindo!</Title>
      <Description>
        Escolha um dos casos abaixo e salve o dia!
      </Description>

      <FlatList
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.description}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {
                Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)
              }
            </IncidentValue>

            <DetailButton
              onPress={() => navigateToDetail(incident)}>
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailButton>
          </Incident>
        )}
      />
    </Container>
  );
}
