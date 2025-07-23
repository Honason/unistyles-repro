import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';




export function HelloWave() {
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
      Number.POSITIVE_INFINITY
    );
  }, [rotationAnimation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <>
    <Animated.View style={[animatedStyle, { backgroundColor: 'blue' }]}>
      <Text style={styles.text}>👋</Text>
    </Animated.View>
    
    <View style={styles.animatedHandStyle}>
      <Text style={styles.text}>👋</Text>
    </View>
    
    <Animated.View style={[animatedStyle, styles.animatedHandStyle]}>
      <Text style={styles.text}>👋</Text>
    </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  animatedHandStyle: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});