import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import Routes from './src/routes';

StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Routes />;
};

export default App;
