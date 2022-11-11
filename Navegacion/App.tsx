import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <MenuLateralBasico /> */}
			<MenuLateral />
			{/* <Tabs /> */}
		</NavigationContainer>
	);
};

export default App;
