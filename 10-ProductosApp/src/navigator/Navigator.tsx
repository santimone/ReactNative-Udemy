import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../contexts/AuthContext/AuthContext';

import { SignUpScreen } from '../screens/SignUpScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
	const { status } = useContext(AuthContext);

	if (status === 'checking') return <LoadingScreen />;

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			{status !== 'authenticated' ? (
				<Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
			) : (
				<>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};
