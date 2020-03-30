import React from 'react';
import { Incident, IncidentProperty, IncidentValue } from './styles';

export default function IncidentContainer({ incident, children, style }) {
  return (
    <Incident style={style}>
      <IncidentProperty>ONG:</IncidentProperty>
      <IncidentValue>
        {incident.name} de {incident.city}/{incident.uf}
      </IncidentValue>

      <IncidentProperty>CASO:</IncidentProperty>
      <IncidentValue>{incident.description}</IncidentValue>

      <IncidentProperty>VALOR:</IncidentProperty>
      <IncidentValue>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </IncidentValue>
      {children}
    </Incident>
  );
}
