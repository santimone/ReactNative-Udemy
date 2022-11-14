import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTab } from './TopTap';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
	return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
	return (
		<BottomTabAndroid.Navigator
			sceneAnimationEnabled={true}
			barStyle={{
				backgroundColor: colors.primary,
			}}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'blue',
				tabBarStyle: {
					borderTopColor: colors.primary,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15,
				},
				tabBarIcon: ({ color }) => {
					let iconName: string = '';

					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'bandage-outline';
							break;

						case 'TopTab':
							iconName = 'basketball-outline';
							break;

						case 'StackNavigator':
							iconName = 'bookmarks-outline';
							break;
					}

					return <Icon name={iconName} size={23} color={color} />;
				},
			})}
		>
			<BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
			<BottomTabAndroid.Screen name="TopTab" options={{ title: 'Top Tab' }} component={TopTab} />
			<BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
		</BottomTabAndroid.Navigator>
	);
};

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
	return (
		<BottomTabIOS.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'blue',
				tabBarStyle: {
					borderTopColor: colors.primary,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15,
				},
				tabBarIcon: ({ color }) => {
					let iconName: string = '';

					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'bandage-outline';
							break;

						case 'TopTab':
							iconName = 'basketball-outline';
							break;

						case 'StackNavigator':
							iconName = 'bookmarks-outline';
							break;
					}

					return <Icon name={iconName} size={23} color={color} />;
				},
			})}
		>
			<BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
			<BottomTabIOS.Screen name="TopTab" options={{ title: 'TopTab' }} component={TopTab} />
			<BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
		</BottomTabIOS.Navigator>
	);
};
