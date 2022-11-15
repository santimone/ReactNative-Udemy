import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
	const navigator = useNavigation();

	useEffect(() => {
		navigator.setOptions({
			title: 'Hola Mundo',
			headerBackTitle: 'atras', //IOS
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina2Screen</Text>
			<Button title="ir Página 3" onPress={() => navigator.navigate('Pagina3Screen')}></Button>
		</View>
	);
};
