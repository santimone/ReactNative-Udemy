import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('PokemonScreen')}>
			<View style={{ ...styles.cardContainer }}>
				{/* Nombre del Pokemon y ID */}
				<Text style={{ ...styles.name }}>
					{pokemon.name} {'\n#' + pokemon.id}
				</Text>
				<FadeInImage uri={pokemon.picture} style={{ width: 100, height: 100 }} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 20,
		backgroundColor: 'red',
		height: 120,
		width: windowWidth * 0.4,
		marginBottom: 25,
		borderRadius: 10,
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		top: 20,
		left: 10,
	},
});
