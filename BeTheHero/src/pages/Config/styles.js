import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 17px;
  color: #e02041;
`;

export const OptionContainer = styled.TouchableOpacity`
  border-bottom-color: #c4c4c4;
  border-bottom-width: 1px;
  height: 100px;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`;
export const ContainerText = styled.Text`
  font-size: 20px;
  color: #41414d;
`;
export const ContainerSubtext = styled.Text`
  color: #c4c4c4;
  font-weight: bold;
`;
export const ContainerAlign = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalContainer = styled.View`
  width: 90%;
  height: 240;
  background-color: #fff;
  border-radius: 3px;
  justify-content: space-evenly;
  box-shadow: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ModalText = styled.Text`
  font-size: 18px;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;
export const RadioSelection = styled.Text`
  font-size: 18px;
  color: #41414d;
`;

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
