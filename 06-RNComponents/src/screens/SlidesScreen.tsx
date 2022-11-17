import React from 'react';
import {
	SafeAreaView,
	ImageSourcePropType,
	Dimensions,
	View,
	Image,
	Text,
	StyleSheet,
	Animated,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { useAnimations } from '../hooks/useAnimations';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
	title: string;
	desc: string;
	img: ImageSourcePropType;
}

const items: Slide[] = [
	{
		title: 'Titulo 1',
		desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
		img: require('../assets/slide-1.png'),
	},
	{
		title: 'Titulo 2',
		desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
		img: require('../assets/slide-2.png'),
	},
	{
		title: 'Titulo 3',
		desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
		img: require('../assets/slide-3.png'),
	},
];

export const SlidesScreen = () => {
	const [activeIndex, setactiveIndex] = useState(0);
	const isVisible = useRef(false);
	const { opacity, fadeIn, fadeOut } = useAnimations();
	const navigation = useNavigation<any>();

	const renderItem = (item: Slide) => {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					borderRadius: 5,
					padding: 40,
					justifyContent: 'center',
				}}
			>
				<Image
					source={item.img}
					style={{
						width: 350,
						height: 400,
						resizeMode: 'center',
					}}
				/>

				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.subtitle}>{item.desc}</Text>
			</View>
		);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: 'white',
				paddingTop: 50,
			}}
		>
			<Carousel
				data={items}
				renderItem={({ item }) => renderItem(item)}
				sliderWidth={screenWidth}
				itemWidth={screenWidth}
				layout="default"
				onSnapToItem={(index) => {
					setactiveIndex(index);
					if (index === items.length - 1) {
						isVisible.current = true;
						fadeIn(500);
					} else {
						fadeOut(500);
						setTimeout(() => {
							isVisible.current = false;
						}, 500);
					}
				}}
			/>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 20,
					alignItems: 'center',
				}}
			>
				<Pagination
					dotsLength={items.length}
					activeDotIndex={activeIndex}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 10,
						backgroundColor: '#5856D6',
					}}
				/>

				{isVisible.current && (
					<Animated.View style={{ opacity }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('HomeScreen')}
							style={{
								flexDirection: 'row',
								backgroundColor: '#5856D6',
								width: 120,
								height: 50,
								borderRadius: 10,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 25, color: 'white', marginBottom: 5 }}>
								Entrar
							</Text>
							<Icon name="chevron-forward-outline" color="white" size={30} />
						</TouchableOpacity>
					</Animated.View>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#5856D6',
	},
	subtitle: { fontSize: 16 },
});
