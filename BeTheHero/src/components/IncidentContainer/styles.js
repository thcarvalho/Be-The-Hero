import styled from 'styled-components/native';

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.secondaryBackground};
  margin-bottom: 16px;
`;
export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.defaultText};
  font-weight: bold;
`;
export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.smallText};
`;
