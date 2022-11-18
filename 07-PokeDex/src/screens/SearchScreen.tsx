import React, { useState } from 'react';
import { View, ActivityIndicator, Text, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/AppTheme';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

export const SearchScreen = () => {
	const { top } = useSafeAreaInsets();
	const { isFetching, simplePokemonList } = usePokemonSearch();
	const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);
	const [term, setTerm] = useState('');

	const width = Dimensions.get('window').width;

	useEffect(() => {
		if (term.length === 0) {
			return setFilteredPokemons([]);
		}

		if (isNaN(Number(term))) {
			setFilteredPokemons(
				simplePokemonList.filter((poke) =>
					poke.name.toLowerCase().includes(term.toLowerCase())
				)
			);
		} else {
			const pokeById = simplePokemonList.find((poke) => poke.id === term);
			setFilteredPokemons(pokeById ? [pokeById] : []);
		}
	}, [term]);

	return (
		<View style={{ flex: 1, marginTop: top + 10, alignItems: 'center' }}>
			<SearchInput
				onDebounce={(value) => setTerm(value)}
				style={{
					position: 'absolute',
					zIndex: 999,
					width: width - 40,
					top: Platform.OS === 'ios' ? top : top + 10,
				}}
			/>
			{isFetching ? (
				<ActivityIndicator style={{ flex: 1 }} size={50} color="grey" />
			) : (
				<FlatList
					//Data Render
					data={filteredPokemons}
					keyExtractor={(pokemon) => pokemon.id}
					renderItem={({ item }) => <PokemonCard pokemon={item} />}
					//Design
					numColumns={2}
					showsVerticalScrollIndicator={false}
					//Headers
					ListHeaderComponent={
						<Text
							style={{
								...styles.title,
								...styles.globalMargin,
								top: 5,
								marginTop: top + 60,
								marginBottom: 20,
								paddingBottom: 10,
							}}
						>
							{term}
						</Text>
					}
				/>
			)}
		</View>
	);
};
