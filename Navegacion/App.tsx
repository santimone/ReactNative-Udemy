import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				{/* <StackNavigator /> */}
				{/* <MenuLateralBasico /> */}
				<MenuLateral />
				{/* <Tabs /> */}
			</AppState>
		</NavigationContainer>
	);
};

const AppState = ({ children }: { children: JSX.Element }) => {
	return <AuthProvider>{children}</AuthProvider>;
};

export default App;
