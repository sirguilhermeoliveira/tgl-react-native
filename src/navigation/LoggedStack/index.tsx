import React from 'react';
import Account from '../../pages/account/index';
import Home from '../../pages/home/index';
import NewBet from '../../pages/newBet/index';
import useTheme from '../../theme/index';
import { Image, View } from 'react-native';
import createStyles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const styles = createStyles();
const {
  colors: { greenYellow },
} = useTheme();

function LoggedStack() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false, tabBarActiveTintColor: greenYellow }}
    >
      <Tab.Screen
        name='Home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons color={greenYellow} name='home-outline' size={25} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name='NewBet'
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={styles.ImageNewBetCircle}>
              <Image
                style={styles.ImageNewBet}
                source={require('../../assets/newbeticon.png')}
              />
            </View>
          ),
        }}
        component={NewBet}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => (
            <Ionicons color={greenYellow} name='person-outline' size={25} />
          ),
        }}
        name='Account'
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default LoggedStack;
