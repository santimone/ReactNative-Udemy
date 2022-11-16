import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
	menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
	const { name, icon, component } = menuItem;

	const navigation = useNavigation<any>();

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(component)}>
			<View style={styles.container}>
				<Icon name={icon} color="#5856D6" size={23} />
				<Text style={styles.itemText}>{name}</Text>
				<View style={{ flex: 1 }} />
				<Icon name="chevron-forward-outline" color="#5856D6" size={23} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
		fontSize: 19,
	},
});
