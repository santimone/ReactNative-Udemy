import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
	const { authState, signIn } = useContext(AuthContext);
	const { isLoggedIn } = authState;

	return (
		<View style={styles.globalMargin}>
			<Text style={{ ...styles.title, color: 'white' }}>ContactsScreen</Text>
			{!isLoggedIn && <Button onPress={() => signIn()} title="Sign In" />}
		</View>
	);
};
