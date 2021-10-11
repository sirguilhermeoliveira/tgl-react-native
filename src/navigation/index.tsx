import React, { useState, useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/index';
import Registration from '../pages/registration/index';
import ResetPassword from '../pages/resetPassword/index';
import LoggedStack from './LoggedStack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

const Stack = createStackNavigator();
function MyStack() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      Helvetica: require('../assets/fonts/Helvetica.ttf'),
      'Helvetica Light': require('../assets/fonts/Helvetica_Light.ttf'),
    });
    setIsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='LoggedStack' component={LoggedStack} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='Registration' component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
