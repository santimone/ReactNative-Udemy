import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
	const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front', headerShown: false }}
			drawerContent={(props) => <MenuInterno {...props} />}
		>
			<Drawer.Screen name="Tabs" component={Tabs} />
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
				<TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }} onPress={() => navigation.navigate('Tabs')}>
					<Icon name="compass-outline" size={25} color={colors.primary} />
					<Text style={styles.menuText}> Navegacion Tabs</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }} onPress={() => navigation.navigate('SettingsScreen')}>
					<Icon name="settings-outline" size={25} color={colors.primary} />
					<Text style={styles.menuText}> Ajustes</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
