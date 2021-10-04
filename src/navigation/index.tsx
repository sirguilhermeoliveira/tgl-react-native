import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../pages/account/index';
import Home from '../pages/home/index';
import Login from '../pages/login/index';
import NewBet from '../pages/newBet/index';
import Registration from '../pages/registration/index';
import ResetPassword from '../pages/resetPassword/index';
import LoggedStack from './LoggedStack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../store/index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <Stack.Navigator
          initialRouteName='LoggedStack'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='LoggedStack' component={LoggedStack} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
          <Stack.Screen name='Registration' component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MyStack;
