import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './src/pages/account/index';
import Home from './src/pages/home/index';
import Login from './src/pages/login/index';
import NewBet from './src/pages/newBet/index';
import Registration from './src/pages/registration/index';
import ResetPassword from './src/pages/resetPassword/index';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <Stack.Navigator
          initialRouteName='NewBet'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='NewBet' component={NewBet} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Registration' component={Registration} />
          <Stack.Screen name='Account' component={Account} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MyStack;
