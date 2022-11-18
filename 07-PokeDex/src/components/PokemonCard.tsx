import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
import ImageColors from 'react-native-image-colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const [bgColor, setBgColor] = useState('grey');
	const navigation = useNavigation<any>();
	const isMounted = useRef(true);

	const getImageColors = async () => {
		const colors = await ImageColors.getColors(pokemon.picture, { fallback: 'grey' });

		if (!isMounted) return;

		switch (colors.platform) {
			case 'android':
				setBgColor(colors.dominant || 'grey');
				break;

			case 'ios':
				setBgColor(colors.background || 'grey');
				break;
		}
	};

	useEffect(() => {
		getImageColors();

		return () => {
			isMounted.current = false;
		};
	}, []);

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={() =>
				navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })
			}
		>
			<View style={{ ...styles.cardContainer, backgroundColor: bgColor }}>
				<View>
					{/* Nombre del Pokemon y ID */}
					<Text style={{ ...styles.name }}>
						{pokemon.name} {'\n#' + pokemon.id}
					</Text>
				</View>
				<View style={styles.pokeballContainer}>
					<Image
						source={require('../assets/pokebola-blanca.png')}
						style={{ ...styles.pokeball }}
					/>
				</View>
				<FadeInImage uri={pokemon.picture} style={{ ...styles.pokemonImage }} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 20,
		backgroundColor: 'white',
		height: 120,
		width: windowWidth * 0.4,
		marginBottom: 25,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		top: 20,
		left: 10,
	},
	pokeball: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: -25,
		right: -25,
	},
	pokemonImage: {
		width: 100,
		height: 100,
		position: 'absolute',
		right: -8,
		bottom: -5,
	},
	pokeballContainer: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: 0,
		right: 0,
		overflow: 'hidden',
		opacity: 0.5,
	},
});
