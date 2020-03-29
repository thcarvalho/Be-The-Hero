import {StatusBar} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${StatusBar.currentHeight + 20 + 'px'};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
