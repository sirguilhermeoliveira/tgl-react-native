import React from 'react';
import Account from '../../pages/account/index';
import Home from '../../pages/home/index';
import NewBet from '../../pages/newBet/index';
import useTheme from '../../theme/index';
import { Image, View } from 'react-native';
import createStyles, { HouseTopBar } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoggedStack() {
  const Tab = createBottomTabNavigator();
  const styles = createStyles();
  const {
    colors: { greenYellow, black, ghostGray },
  } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName='NewBet'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: black,
        tabBarStyle: {
          height: 500,
          padding: 500,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
          tabBarLabelStyle: {
            fontStyle: 'italic',
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <HouseTopBar color={focused ? greenYellow : ghostGray}>
              <Ionicons
                color={focused ? greenYellow : ghostGray}
                name='home-outline'
                size={25}
              />
            </HouseTopBar>
          ),
        }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='NewBet'
        options={{
          tabBarLabel: '',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
          tabBarIcon: () => (
            <View style={styles.ImageNewBetCircle}>
              <View style={styles.ImageNewBetCircleGreenYellow}>
                <Image
                  style={styles.ImageNewBet}
                  source={require('../../assets/icons/newbeticon.png')}
                />
              </View>
            </View>
          ),
        }}
        component={NewBet}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
          tabBarLabelStyle: {
            fontStyle: 'italic',
            fontSize: 14,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? greenYellow : ghostGray}
              name='person-outline'
              size={25}
            />
          ),
        }}
        name='Account'
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default LoggedStack;
