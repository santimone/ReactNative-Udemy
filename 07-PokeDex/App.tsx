import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Tabs } from './src/navigation/TabsNavigator';

const App = () => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default App;
