import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from '../pages/Incidents';
import Detail from '../pages/Detail';
import Config from '../pages/Config';

const StackNavigator = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="Incidents" component={Incidents} />
        <StackNavigator.Screen name="Detail" component={Detail} />
        <StackNavigator.Screen name="Config" component={Config} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
