import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  width: 90%;
  height: 240px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 3px;
  justify-content: space-evenly;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ModalText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.defaultText};
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;
export const RadioSelection = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.defaultText};
`;
