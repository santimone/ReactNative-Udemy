import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigation/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { useEffect } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
	const { simplePokemon, color } = route.params;
	const { name, id, picture } = simplePokemon;

	const { top } = useSafeAreaInsets();
	const { detailedPokemon, isLoading } = usePokemon(id);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ ...styles.headerContainer, backgroundColor: color }}>
				<TouchableOpacity
					onPress={() => navigation.pop()}
					activeOpacity={0.8}
					style={{ ...styles.backButton, top: top + 5 }}
				>
					<Icon name="arrow-back-outline" color={'white'} size={30} />
				</TouchableOpacity>
				{/* Pokemon Name */}
				<Text style={{ ...styles.pokemonName, top: top + 40 }}>
					{name + '\n'} #{id}
				</Text>
				{/* Pokeball blanca */}
				<Image
					source={require('../assets/pokebola-blanca.png')}
					style={{ ...styles.pokeball }}
				/>
				{/* Pokemon img */}
				<FadeInImage uri={picture} style={{ ...styles.pokemonImage }} />
			</View>
			{/* Cargando info */}
			{isLoading ? (
				<View style={styles.loadingIndicator}>
					<ActivityIndicator color={color} size={50} />
				</View>
			) : (
				<PokemonDetails pokemon={detailedPokemon} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		zIndex: 999,
		height: 370,
		alignItems: 'center',
		borderBottomRightRadius: 1000,
		borderBottomLeftRadius: 1000,
	},
	backButton: {
		position: 'absolute',
		left: 20,
	},
	pokemonName: {
		color: 'white',
		fontSize: 40,
		alignSelf: 'flex-start',
		left: 20,
	},
	pokeball: {
		width: 250,
		height: 250,
		bottom: -25,
		opacity: 0.7,
	},
	pokemonImage: {
		width: 250,
		height: 250,
		position: 'absolute',
		bottom: -15,
	},
	loadingIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
