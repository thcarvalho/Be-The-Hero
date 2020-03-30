import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.smallText};
`;
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${({theme}) => theme.colors.headerText};
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.smallText};
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DetailButtonText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 15px;
`;

export default StyleSheet.create({
  //Tem que deixar
  incidentList: {
    marginTop: 32,
  },
});
