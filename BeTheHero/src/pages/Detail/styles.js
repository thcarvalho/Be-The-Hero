import styled from 'styled-components/native';

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.secondaryBackground};
  margin-bottom: 16px;
`;
export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({theme}) => theme.colors.headerText};
  line-height: 30px;
`;
export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.smallText};
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondaryBackground};
`;
export const Action = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
