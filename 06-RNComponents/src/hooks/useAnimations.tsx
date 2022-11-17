import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimations = () => {
	const opacity = useRef(new Animated.Value(0)).current;
	const position = useRef(new Animated.Value(0)).current;

	const fadeIn = (duration: number = 300) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: duration,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = (duration: number = 300) => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: duration,
			useNativeDriver: true,
		}).start();

		Animated.timing(position, {
			toValue: 100,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const startMoving = (initPosition: number, duration: number = 300) => {
		position.setValue(initPosition);
		Animated.timing(position, {
			toValue: 0,
			duration,
			useNativeDriver: true,
			easing: Easing.bounce,
		}).start();
	};

	return {
		fadeIn,
		fadeOut,
		startMoving,
		opacity,
		position,
	};
};
