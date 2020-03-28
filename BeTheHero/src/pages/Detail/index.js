/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ToastAndroid, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Mailer from 'react-native-mail';

import logoImg from '../../assets/logo.png';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import global from '../../config/global-styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  function navigateBack() {
    navigation.goBack();
  }
  const message = `Olá! Estou entrando em contato a respeito do caso: "${incident.title}", no valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function sendMail() {
    Mailer.mail({
      subject: `Herói do Caso: '${incident.title}'`,
      recipients: [incident.email],
      body: message,
    }, (error, event) => {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    });
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }
  return (
    <View style={global.container}>
      <View style={global.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        <Image source={logoImg} />
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
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
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato: </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <FontAwesome name="whatsapp" size={16} color="#fff" />
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Feather name="mail" size={16} color="#fff" />
            <Text style={styles.actionText}>E-Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
