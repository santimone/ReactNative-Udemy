import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
	return (
		<View style={{ ...styles.menuContainer, backgroundColor: '#121624' }}>
			<Text style={styles.title}>Iconos</Text>
			<Text>
				<Icon name="airplane-outline" size={80} color="grey" />;
			</Text>
		</View>
	);
};
