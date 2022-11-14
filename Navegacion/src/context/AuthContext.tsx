import { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir que informacion grabare en el context
export interface AuthState {
	isLoggedIn: boolean;
	username?: string;
	favoriteIcon?: string;
}

//Declaro la interfaz con lo que transmite el context
export interface AuthContextProps {
	authState: AuthState;
	signIn: () => void;
	signOut: () => void;
	changeFavIcon: (iconName: string) => void;
	addUsername: (username: string) => void;
}

// Estado inicial
export const authInitialState: AuthState = {
	isLoggedIn: false,
};

// Crear context
export const AuthContext = createContext({} as AuthContextProps);

// Creo el componente que provee el estado
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = () => {
		dispatch({ type: 'signIn' });
	};

	const signOut = () => {
		dispatch({ type: 'signOut' });
	};

	const changeFavIcon = (iconName: string) => {
		dispatch({ type: 'changeFavIcon', payload: iconName });
	};

	const addUsername = (username: string) => {
		dispatch({ type: 'addUsername', payload: username });
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				signOut,
				changeFavIcon,
				addUsername,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
