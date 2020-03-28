/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import global from '../../config/global-styles';
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
    <View style={global.container}>
      <View style={global.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
        <TouchableOpacity onPress={navigateToConfig}>
          <Feather name="settings" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <FlatList
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {
                Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)
              }
            </Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
