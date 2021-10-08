import React, { useEffect, useState } from 'react';
import { SplashScreenIcon } from '../../assets/icons/Splash.png';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import createStyles from './styles';
import { View } from 'react-native';

const PINGUIM_CIRCLE_HEIGHT = 135;

const SplashScreen = ({ children, loading }: any) => {
  const styles = createStyles();
  const progress = useSharedValue(1.2);
  const textOpacity = useSharedValue(1);
  const marginTop = useSharedValue(0);
  const goesDown = useSharedValue(false);

  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (!loading) {
      return;
    }
    progress.value = withRepeat(
      withTiming(
        1,
        { duration: 800, easing: Easing.bezier(0.5, 0, 0.5, 1) },
        () => {
          if (!loading) {
            return;
          }
          goesDown.value = !goesDown.value;
        }
      ),
      -1,
      true
    );
  }, [loading, goesDown, progress]);

  useEffect(() => {
    if (!loading) {
      progress.value = 1;
      textOpacity.value = withTiming(0, { duration: 500 }, () => {
        marginTop.value = withTiming(10, {
          duration: 300,
        });
      });

      setTimeout(() => {
        setAnimationFinished(true);
      }, 1500);
    }
  }, [loading]);

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: progress.value }],
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  const marginTopStyle = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
    };
  });

  return !animationFinished ? (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.icon, scaleStyle, marginTopStyle]}
        source={SplashScreenIcon}
      />
    </View>
  ) : (
    children
  );
};

export default SplashScreen;
