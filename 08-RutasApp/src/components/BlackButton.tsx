import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
	title: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

export const BlackButton = ({ title, onPress, style = {} }: Props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			style={{ ...styles.blackButton, ...(style as any) }}
		>
			<Text style={{ ...styles.buttonText }}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	blackButton: {
		height: 50,
		width: 200,
		backgroundColor: 'black',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		elevation: 6,
		marginVertical: 25,
	},
	buttonText: { color: 'white', fontSize: 18 },
});
