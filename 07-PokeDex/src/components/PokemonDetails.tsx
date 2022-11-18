import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { DetailedPokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/AppTheme';
import { FadeInImage } from './FadeInImage';

interface Props {
	pokemon: DetailedPokemon;
}

export const PokemonDetails = ({ pokemon }: Props) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ ...StyleSheet.absoluteFillObject }}
		>
			<View style={{ ...styles.globalMargin, marginTop: 370 }}>
				{/* Types y Peso */}
				<Text style={{ ...componentStyles.title }}>Types</Text>
				<View style={{ flexDirection: 'row' }}>
					{pokemon.types.map(({ type }) => (
						<Text
							style={{ ...componentStyles.regularText, marginRight: 10 }}
							key={type.name}
						>
							{type.name}
						</Text>
					))}
				</View>
				<Text style={{ ...componentStyles.title }}>Weight</Text>
				<Text style={{ ...componentStyles.regularText }}>{pokemon.weight}Kg</Text>
				{/* Sprites */}
				<View>
					<Text style={{ ...componentStyles.title }}>Sprites</Text>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<FadeInImage
							uri={pokemon.sprites.front_default}
							style={{ ...componentStyles.basicSprite }}
						/>
						<FadeInImage
							uri={pokemon.sprites.back_default}
							style={{ ...componentStyles.basicSprite }}
						/>
						<FadeInImage
							uri={pokemon.sprites.front_shiny}
							style={{ ...componentStyles.basicSprite }}
						/>
						<FadeInImage
							uri={pokemon.sprites.back_shiny}
							style={{ ...componentStyles.basicSprite }}
						/>
					</ScrollView>

					{/* Habilidades */}
					<Text style={{ ...componentStyles.title }}>Abilities</Text>
					<View style={{ flexDirection: 'row' }}>
						{pokemon.abilities.map(({ ability }) => (
							<Text
								style={{ ...componentStyles.regularText, marginRight: 10 }}
								key={ability.name}
							>
								{ability.name}
							</Text>
						))}
					</View>

					{/* Moves */}
					<Text style={{ ...componentStyles.title }}>Abilities</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						{pokemon.moves.map(({ move }) => (
							<Text
								style={{ ...componentStyles.regularText, marginRight: 10 }}
								key={move.name}
							>
								{move.name}
							</Text>
						))}
					</View>

					{/* Stats */}
					<Text style={{ ...componentStyles.title }}>Stats</Text>
					<View style={{ flexDirection: 'column' }}>
						{pokemon.stats.map((stat) => (
							<View key={stat.stat.name} style={{ flexDirection: 'row' }}>
								<Text
									style={{
										...componentStyles.regularText,
										marginRight: 10,
										width: 150,
										textAlign: 'center',
									}}
								>
									{stat.stat.name}:
								</Text>
								<Text style={{ ...componentStyles.regularText, marginRight: 10 }}>
									{stat.base_stat}
								</Text>
							</View>
						))}
					</View>

					<View style={{ marginTop: 200 }} />
				</View>
			</View>
		</ScrollView>
	);
};

const componentStyles = StyleSheet.create({
	title: { fontSize: 22, fontWeight: 'bold', marginTop: 20 },
	regularText: { fontSize: 19 },
	basicSprite: {
		width: 100,
		height: 100,
	},
});
