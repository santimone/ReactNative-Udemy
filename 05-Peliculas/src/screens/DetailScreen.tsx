import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
	const movie = route.params;
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

	return (
		<ScrollView>
			<View>
				<View style={styles.imageContainer}>
					<View style={styles.imageBorder}>
						<Image source={{ uri }} style={styles.posterImage} />
					</View>
				</View>
			</View>
			<View style={styles.marginContainer}>
				<Text style={styles.subTitle}>{movie.original_title}</Text>
				<Text style={styles.title}>{movie.title}</Text>
			</View>
			{isLoading ? (
				<ActivityIndicator
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}
					color="red"
					size={100}
				/>
			) : (
				<MovieDetails movieFull={movieFull!} cast={cast} />
			)}

			{/* Boton para regresar */}
			<View style={styles.backButton}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<Icon color="white" name="arrow-back-outline" size={60} />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	posterImage: {
		flex: 1,
		borderBottomEndRadius: 100,
	},
	imageBorder: {
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
		overflow: 'hidden',
		flex: 1,
	},
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,

		elevation: 10,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subTitle: {
		fontSize: 18,
		opacity: 0.8,
		color: 'white',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white',
	},
	backButton: {
		position: 'absolute',
		zIndex: 999,
		elevation: 9,
		top: 15,
		left: 5,
	},
});
