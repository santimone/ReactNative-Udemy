import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {
	const { signOut, authState } = useContext(AuthContext);
	const { isLoggedIn } = authState;

	return (
		<View>
			<Text style={{ color: 'white' }}>AlbumScreen</Text>
			{isLoggedIn && <Button onPress={() => signOut()} title="Sign Out" />}
		</View>
	);
};
