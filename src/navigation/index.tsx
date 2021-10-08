import React, { useState, useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/index';
import Registration from '../pages/registration/index';
import ResetPassword from '../pages/resetPassword/index';
import LoggedStack from './LoggedStack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import SplashScreen from '../pages/splashScreen/index';

const Stack = createStackNavigator();
function MyStack() {
  const [loading] = useState(false);
  return (
    <SplashScreen loading={loading}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' backgroundColor='white' />
          <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='LoggedStack' component={LoggedStack} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
            <Stack.Screen name='Registration' component={Registration} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SplashScreen>
  );
}

export default MyStack;
