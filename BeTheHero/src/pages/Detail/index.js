/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TouchableOpacity, Image, ToastAndroid, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Mailer from 'react-native-mail';

import logoImg from '../../assets/logo.png';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  IncidentProperty,
  IncidentValue,
  Incident,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
  ContactBox,
} from './styles';
import { Header, Container } from '../../config/global-styles';

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
    <Container>
      <Header>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        <Image source={logoImg} />
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
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
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato: </HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <FontAwesome name="whatsapp" size={16} color="#fff" />
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <Feather name="mail" size={16} color="#fff" />
            <ActionText>E-Mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
