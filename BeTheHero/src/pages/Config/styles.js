import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const HeaderText = styled.Text`
  font-size: 17px;
  color: ${({theme}) => theme.colors.primary};
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
  color: ${({theme}) => theme.colors.defaultText};
`;
export const ContainerSubtext = styled.Text`
  color: #c4c4c4;
  font-weight: bold;
`;
export const ContainerAlign = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
