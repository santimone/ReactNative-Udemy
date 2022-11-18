import React from 'react';
import { View, ActivityIndicator, Text, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/AppTheme';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';

export const SearchScreen = () => {
	const { top } = useSafeAreaInsets();
	const { isFetching, simplePokemonList } = usePokemonSearch();

	const width = Dimensions.get('window').width;

	return (
		<View style={{ flex: 1, marginTop: top + 10, alignItems: 'center' }}>
			<SearchInput
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
					data={simplePokemonList}
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
							Pokedex
						</Text>
					}
				/>
			)}
		</View>
	);
};
