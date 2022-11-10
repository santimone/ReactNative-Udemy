import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
	const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front', headerShown: false }}
			drawerContent={(props) => <MenuInterno {...props} />}
		>
			<Drawer.Screen name="StackNavigator" component={StackNavigator} />
			<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
		</Drawer.Navigator>
	);
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			<View style={styles.avatarContainer}>
				<Image
					source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541' }}
					style={styles.avatar}
				/>
			</View>

			{/* Opciones del menu */}
			<View style={styles.menuContainer}>
				<TouchableOpacity style={styles.menuBoton} onPress={() => navigation.navigate('StackNavigator')}>
					<Text style={styles.menuText}>Navegacion Stack</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.menuBoton} onPress={() => navigation.navigate('SettingsScreen')}>
					<Text style={styles.menuText}>Ajustes</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
