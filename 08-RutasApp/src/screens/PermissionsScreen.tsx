import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { PermissionsContext } from '../context/PermissionsContext/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {
	const { permissions, askLocationPermission } = useContext(PermissionsContext);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Para usar esta app es necesario dar permisos de GPS</Text>

			<BlackButton title="Dar permisos" onPress={() => askLocationPermission()} />

			<Text>{JSON.stringify(permissions, null, 5)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: 250,
		fontSize: 18,
		textAlign: 'center',
	},
});
