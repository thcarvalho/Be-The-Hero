import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from '../pages/Incidents';
import Detail from '../pages/Detail';

const StackNavigator = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="Incidents" component={Incidents} />
        <StackNavigator.Screen name="Detail" component={Detail} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
