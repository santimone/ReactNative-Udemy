import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimations } from '../hooks/useAnimations';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
	const {
		theme: { colors },
	} = useContext(ThemeContext);

	const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimations();

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					backgroundColor: colors.primary,
					opacity,
					transform: [
						{
							translateY: position,
						},
					],
				}}
			/>
			<Button
				color={colors.primary}
				title="Fade In"
				onPress={() => {
					fadeIn();
					startMoving(-100);
				}}
			/>
			<Button color={colors.primary} title="Fade Out" onPress={() => fadeOut()} />
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
