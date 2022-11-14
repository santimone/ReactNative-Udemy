import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
	accion: (numeroTexto: string) => void;
	ancho?: boolean;
	backgroundColor?: string;
	color?: string;
	texto: string;
}

export const BotonCalc = ({ texto, backgroundColor = '#2D2D2D', color = 'white', ancho = false, accion }: Props) => {
	return (
		<TouchableOpacity onPress={() => accion(texto)}>
			<View style={{ ...styles.boton, backgroundColor: backgroundColor, width: ancho ? 180 : 80 }}>
				<Text style={{ ...styles.botonTexto, color: color }}>{texto}</Text>
			</View>
		</TouchableOpacity>
	);
};
