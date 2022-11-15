import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
	return (
		<View style={{ ...styles.menuContainer, backgroundColor: '#121624' }}>
			<Text style={styles.title}>Iconos</Text>
			<View style={{ ...styles.menuContainer, flexDirection: 'row', flexWrap: 'wrap' }}>
				<TouchableIcon iconName="airplane-outline" />
				<TouchableIcon iconName="attach-outline" />
				<TouchableIcon iconName="bonfire-outline" />
				<TouchableIcon iconName="calculator-outline" />
				<TouchableIcon iconName="chatbubble-ellipses-outline" />
				<TouchableIcon iconName="images-outline" />
				<TouchableIcon iconName="leaf-outline" />
			</View>
		</View>
	);
};
