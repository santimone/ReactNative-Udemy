import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, FlatList, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/AppTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
	const navigation = useNavigation<any>();
	const { top } = useSafeAreaInsets();
	const { simplePokemonList, loadPokemons } = usePokemonPaginated();

	return (
		<>
			<Image source={require('../assets/pokebola.png')} style={styles.pokebolaBG} />
			<FlatList
				//Data Render
				data={simplePokemonList}
				keyExtractor={(pokemon) => pokemon.id}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				//Infinite Scroll
				onEndReached={loadPokemons}
				onEndReachedThreshold={0.4}
				//Design
				numColumns={2}
				showsVerticalScrollIndicator={false}
				//Headers
				ListHeaderComponent={
					<Text
						style={{
							...styles.title,
							...styles.globalMargin,
							top: top + 20,
							marginBottom: top + 20,
						}}
					>
						Pokedex
					</Text>
				}
				//Footers
				ListFooterComponent={
					<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
				}
			/>
		</>
	);
};
