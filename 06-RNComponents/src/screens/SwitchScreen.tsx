import React, { useState } from 'react';
import { Platform, Switch, View, Text, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const SwitchScreen = () => {
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	const { isActive, isHungry, isHappy } = state;

	const onChange = (value: boolean, field: string) => {
		setState({
			...state,
			[field]: value,
		});
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Switches" />
			<View style={switchStyles.switchRow}>
				<Text style={switchStyles.switchText}>is Active</Text>
				<CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
			</View>
			<View style={switchStyles.switchRow}>
				<Text style={switchStyles.switchText}>is Hungry</Text>
				<CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
			</View>
			<View style={switchStyles.switchRow}>
				<Text style={switchStyles.switchText}>is Happy</Text>
				<CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
			</View>
			<Text style={switchStyles.switchText}>{JSON.stringify(state, null, 5)}</Text>
		</View>
	);
};

const switchStyles = StyleSheet.create({
	switchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
	switchText: {
		fontSize: 25,
	},
});
