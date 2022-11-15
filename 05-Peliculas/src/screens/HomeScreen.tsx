import React, { useContext } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/helpGetColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();
	const { setMainColors } = useContext(GradientContext);

	const getPosterColors = async (index: number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
		const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
		setMainColors({ primary, secondary });
	};

	useEffect(() => {
		if (nowPlaying.length > 0) {
			getPosterColors(0);
		}
	}, [nowPlaying]);

	return (
		<GradientBackground>
			<ScrollView>
				<View style={{ marginTop: top + 20 }}>
					{isLoading ? (
						<ActivityIndicator
							style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
							color="red"
							size={100}
						/>
					) : (
						<View>
							{/* Carrusel principal */}
							<View style={{ height: 440 }}>
								<Carousel
									data={nowPlaying}
									renderItem={({ item }: any) => <MoviePoster movie={item} />}
									sliderWidth={windowWidth}
									itemWidth={300}
									inactiveSlideOpacity={0.9}
									onSnapToItem={(index) => getPosterColors(index)}
								/>
							</View>

							{/* Peliculas Popular */}
							<HorizontalSlider title="Popular" movies={popular} />

							{/* Peliculas Top Rated */}
							<HorizontalSlider title="Top Rated" movies={topRated} />

							{/* Peliculas Upcoming */}
							<HorizontalSlider title="Upcoming" movies={upcoming} />
						</View>
					)}
				</View>
			</ScrollView>
		</GradientBackground>
	);
};
