import React from 'react';
import { View, Text } from 'react-native';
import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
	return (
		<View>
			{/* Detalles */}
			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: 'row', marginLeft: 5 }}>
					<Icon name="star" color="white" size={16} />
					<Text style={{ color: 'white', marginLeft: 5 }}>{movieFull.vote_average}</Text>
				</View>
				<Text style={{ color: 'white', marginLeft: 5 }}>
					- {movieFull.genres.map((genre) => genre.name).join(', ')}
				</Text>

				{/* Historia */}
				<Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', color: 'white' }}>
					Historia
				</Text>
				<Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>
					{movieFull.overview}
				</Text>

				{/* Presupuesto */}
				<Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', color: 'white' }}>
					Presupuesto
				</Text>
				<Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>
					{currencyFormatter.format(movieFull.budget, { code: 'USD' })}
				</Text>
			</View>

			{/* Casting */}
			<View style={{ marginTop: 10, marginBottom: 100 }}>
				<Text
					style={{
						fontSize: 25,
						marginTop: 10,
						fontWeight: 'bold',
						color: 'white',
						marginHorizontal: 20,
					}}
				>
					Actores
				</Text>
				<FlatList
					data={cast}
					renderItem={({ item }) => <CastItem actor={item} />}
					keyExtractor={(item) => item.id.toString()}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ marginTop: 10, height: 70 }}
				/>
			</View>
		</View>
	);
};
