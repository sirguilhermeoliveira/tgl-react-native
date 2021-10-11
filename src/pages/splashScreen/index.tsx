import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, View } from 'react-native';
import Logo from '../../assets/icons/Splash.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Login from '../login';

const splashScreen = () => {
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current; // sobe até tal ponto
  const middleAnimation = useRef(new Animated.Value(0)).current; // parou e volta um pouco
  const finalAnimation = useRef(new Animated.Value(0)).current; // vai direto e inicia o app

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.delay(500),
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get('window').height + (edges.bottom + 270),
          useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.timing(middleAnimation, {
          toValue: -Dimensions.get('window').height + (edges.bottom + 290),
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(finalAnimation, {
          toValue: -Dimensions.get('window').height + (edges.bottom + -845),
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        top: 845,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={Logo}></Image>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default splashScreen;
