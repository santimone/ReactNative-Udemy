import React from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { styles } from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

	const loadMore = () => {
		const newArray: number[] = [];
		for (let i = 0; i < 5; i++) {
			newArray[i] = numbers.length + i;
		}

		setTimeout(() => {
			setNumbers([...numbers, ...newArray]);
		}, 1500);
	};

	const renderItem = (item: number) => {
		return (
			<FadeInImage
				uri={`https://picsum.photos/id/${item}/200/300`}
				style={{ width: '100%', height: 400 }}
			/>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={numbers}
				keyExtractor={(item) => item.toString()}
				renderItem={({ item }) => renderItem(item)}
				ListHeaderComponent={() => (
					<View style={styles.globalMargin}>
						<HeaderTitle title="Infinite Scroll" />
					</View>
				)}
				onEndReached={loadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() => (
					<View
						style={{
							height: 150,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ActivityIndicator size={25} color="#5856D6" />
					</View>
				)}
			/>
		</View>
	);
};

const scrollStyles = StyleSheet.create({
	textItem: {
		color: 'white',
		backgroundColor: 'grey',
		height: 150,
	},
});
