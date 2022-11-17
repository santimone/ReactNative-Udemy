import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
	currentTheme: 'light' | 'dark';
	dividerColor: string;
	secondaryBackground: string;
}

export const lightTheme: ThemeState = {
	currentTheme: 'light',
	dark: false,
	dividerColor: 'rgba(92, 89, 89, 0.7)',
	secondaryBackground: 'rgb(182, 181, 181)',
	colors: {
		primary: '#084F6A',
		background: 'white',
		card: 'green',
		text: 'black',
		border: 'orange',
		notification: 'teal',
	},
};

export const darkTheme: ThemeState = {
	currentTheme: 'dark',
	dark: true,
	dividerColor: 'rgba(236, 236, 236, 0.7)',
	secondaryBackground: 'black',
	colors: {
		primary: '#75CEDB',
		background: '#21272b',
		card: 'green',
		text: 'white',
		border: 'orange',
		notification: 'teal',
	},
};

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	switch (action.type) {
		case 'set_light_theme':
			return {
				...lightTheme,
			};

		case 'set_dark_theme':
			return {
				...darkTheme,
			};

		default:
			return state;
	}
};
