import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
	const insets = useSafeAreaInsets();

	const { authState } = useContext(AuthContext);

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top }}>
			<Text style={{ ...styles.title, color: 'black' }}>Settings Screen</Text>

			<Text>{JSON.stringify(authState, null, 4)}</Text>

			{authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />}
		</View>
	);
};
