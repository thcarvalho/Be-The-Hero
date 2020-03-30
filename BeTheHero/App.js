import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, {useEffect, useState, createContext} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/routes';
import light from './src/config/themes/light';
import dark from './src/config/themes/dark';

StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');
console.disableYellowBox = true;

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState(light);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('@theme').then(value => {
      if (value === 'Light') {
        setTheme(light);
      } else {
        setTheme(dark);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={setTheme}>
        <Routes />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
