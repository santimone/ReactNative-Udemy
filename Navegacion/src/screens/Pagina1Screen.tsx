import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<RootStackParams, 'Pagina1Screen'> {}
interface Props extends DrawerScreenProps<RootStackParams, 'Pagina1Screen'> {}

export const Pagina1Screen = ({ navigation }: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity style={{ ...styles.menuBoton, marginLeft: 15 }} onPress={() => navigation.toggleDrawer()}>
					<Icon name="menu-outline" size={25} color={colors.primary} />
				</TouchableOpacity>
			),
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina1Screen</Text>
			<Button title="Ir página 2" onPress={() => navigation.navigate('Pagina2Screen')}></Button>
			<Text style={styles.title}>Navegar con argumentos</Text>

			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
					onPress={() =>
						navigation.navigate('PersonaScreen', {
							id: 1,
							nombre: 'Pedro',
						})
					}
				>
					<Icon name="person-circle-outline" size={25} color={colors.primary} />
					<Text style={styles.botonGrandeTexto}>Pedro</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
					onPress={() =>
						navigation.navigate('PersonaScreen', {
							id: 2,
							nombre: 'Maria',
						})
					}
				>
					<Icon name="person-circle-outline" size={25} color={colors.primary} />
					<Text style={styles.botonGrandeTexto}>Maria</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
