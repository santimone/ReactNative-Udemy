import React from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimations } from '../hooks/useAnimations';
import { useState } from 'react';

interface Props {
	uri: string;
	style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
	const { opacity, fadeIn } = useAnimations();
	const [isLoading, setIsLoading] = useState(true);

	const finishLoading = () => {
		fadeIn();
		setIsLoading(false);
	};

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{isLoading && (
				<ActivityIndicator style={{ position: 'absolute' }} size={25} color="#5856D6" />
			)}

			<Animated.Image
				source={{ uri }}
				onLoadEnd={finishLoading}
				style={{ ...(style as any), opacity }}
			/>
		</View>
	);
};
