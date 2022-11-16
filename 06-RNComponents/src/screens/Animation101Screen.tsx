import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimations } from '../hooks/useAnimations';

export const Animation101Screen = () => {
	const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimations();

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					opacity,
					transform: [
						{
							translateY: position,
						},
					],
				}}
			/>
			<Button
				title="Fade In"
				onPress={() => {
					fadeIn();
					startMoving(-100);
				}}
			/>
			<Button title="Fade Out" onPress={fadeOut} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: '#5856D6',
		width: 150,
		height: 150,
	},
});
