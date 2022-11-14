import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
	const { peliculasEnCine, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ marginTop: top + 20 }}>
			{/* {isLoading ? (
				<ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color="red" size={100} />
			) : (
				<MoviePoster movie={peliculasEnCine[0]}></MoviePoster>
			)} */}

			{isLoading ? (
				<ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color="red" size={100} />
			) : (
				<View>
					{/* Carrusel principal */}
					<View style={{ height: 440 }}>
						<Carousel
							data={peliculasEnCine}
							renderItem={({ item }: any) => <MoviePoster movie={item} />}
							sliderWidth={windowWidth}
							itemWidth={300}
						/>
					</View>
					{/* Peliculas populares */}
					<View>
						<Text style={{ fontSize: 30, fontWeight: 'bold' }}>Peliculas populares</Text>
						<FlatList
							data={peliculasEnCine}
							renderItem={({ item }: any) => <MoviePoster movie={item} />}
							keyExtractor={(item) => item.id.toString()}
							horizontal={true}
						/>
					</View>
				</View>
			)}
		</View>
	);
};
