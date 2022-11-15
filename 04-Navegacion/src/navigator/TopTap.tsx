import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
	const { top } = useSafeAreaInsets();

	return (
		<Tab.Navigator
			style={{ padding: top }}
			sceneContainerStyle={{ backgroundColor: colors.primary }}
			screenOptions={({ route }) => ({
				tabBarPressColor: colors.primary,
				tabBarShowIcon: true,
				tabBarIndicatorStyle: { backgroundColor: colors.primary },
				tabBarStyle: { shadowColor: 'transparent', elevation: 0 },
				tabBarIcon: ({ color }) => {
					let iconName: string = '';

					switch (route.name) {
						case 'Chat':
							iconName = 'chatbox-ellipses-outline';
							break;

						case 'Contacts':
							iconName = 'people-outline';
							break;

						case 'Album':
							iconName = 'albums-outline';
							break;
					}
					return <Icon name={iconName} size={23} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Chat" component={ChatScreen} />
			<Tab.Screen name="Contacts" component={ContactsScreen} />
			<Tab.Screen name="Album" component={AlbumScreen} />
		</Tab.Navigator>
	);
};
