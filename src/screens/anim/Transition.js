import { Easing, Animated } from 'react-native';

module.exports = {
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index, route } = scene;
      const { routeName } = route;

      const width = layout.initWidth;
      const height = layout.initHeight;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, -width / 4],
      });

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, height],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [1, 1, 1],
      });

      const transform = (routeName == 'QrCodeScreen' || routeName == 'VideoExamUI') ? [{ translateY: translateY }] : [{ translateX: translateX }];

      return { opacity, transform: transform };
    },
  }),
};