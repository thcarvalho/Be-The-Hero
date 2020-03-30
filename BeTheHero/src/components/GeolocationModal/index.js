import React from 'react';
import {
  ModalContainer,
  ModalText,
  RadioContainer,
  RadioSelection,
} from './styles';
import {RadioButton} from 'react-native-paper';

export default function GeolocationModal({radioChecked, setGeolocationConfig}) {
  return (
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
      <RadioContainer style={{ borderBottomWidth: 0 }}>
        <RadioButton
          color="#e02041"
          value="Desligado"
          status={radioChecked === 'Desligado' ? 'checked' : 'unchecked'}
          onPress={() => setGeolocationConfig('Desligado')}
        />
        <RadioSelection>Desligado</RadioSelection>
      </RadioContainer>
    </ModalContainer>
  );
}
