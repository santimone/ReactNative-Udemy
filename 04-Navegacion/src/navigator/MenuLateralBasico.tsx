import { createDrawerNavigator, DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
	const { width } = useWindowDimensions();
	//drawerType={width >= 768 ? 'permanent' : 'front'} en el drawer Navigator, no funciona en la nueva version
	return (
		<Drawer.Navigator screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}>
			<Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
			<Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
		</Drawer.Navigator>
	);
};
