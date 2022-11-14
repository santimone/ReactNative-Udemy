import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {
	return (
		<View style={{ ...styles.menuContainer, backgroundColor: '#121624' }}>
			<Text style={{ color: 'white' }}>Tab 2 Screen</Text>
		</View>
	);
};
