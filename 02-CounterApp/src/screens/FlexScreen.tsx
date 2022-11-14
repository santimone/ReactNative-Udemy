import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.caja1}>Caja 1</Text>
			<Text style={styles.caja2}>Caja 2</Text>
			<Text style={styles.caja3}>Caja 3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#28C4D9',
		flexDirection: 'row',
		justifyContent: 'flex-end', //ordena en direccion a la flex direction
		alignItems: 'flex-end', //ordena en direccion opuesta a la flex direction
	},
	caja1: {
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
		alignSelf: 'flex-start', //se alinea independientemente del align padre
	},
	caja2: {
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
	},
	caja3: {
		borderWidth: 2,
		borderColor: 'white',
		fontSize: 30,
	},
});
