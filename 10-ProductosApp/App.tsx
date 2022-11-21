import 'react-native-gesture-handler';

import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext/AuthContext';

const AppState = ({ children }: any) => {
	return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
	return (
		<AppState>
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</AppState>
	);
};

export default App;
