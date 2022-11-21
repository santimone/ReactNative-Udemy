import React, { createContext, useReducer, useEffect } from 'react';

import { Usuario, LoginResponse, LoginData, RegisterData } from '../../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import cafeApi from '../../api/cafeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
	errorMessage: string;
	token: string | null;
	user: Usuario | null;
	status: 'checking' | 'authenticated' | 'not-authenticated';
	signIn: (registerData: RegisterData) => void;
	logIn: (loginData: LoginData) => void;
	logOut: () => void;
	removeError: () => void;
};

const authIniciailState: AuthState = {
	status: 'checking',
	token: null,
	user: null,
	errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(authReducer, authIniciailState);

	useEffect(() => {
		checkToken();
	}, []);

	const checkToken = async () => {
		const token = await AsyncStorage.getItem('token');

		//No hay token valido
		if (!token) return dispatch({ type: 'authenticationFailed' });

		//hay token
		const res = await cafeApi.get('/auth');
		if (res.status !== 200) {
			return dispatch({ type: 'authenticationFailed' });
		}

		dispatch({
			type: 'signIn',
			payload: {
				token: res.data.token,
				user: res.data.usuario,
			},
		});
	};

	const logIn = async ({ correo, password }: LoginData) => {
		try {
			const res = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });

			dispatch({
				type: 'signIn',
				payload: {
					token: res.data.token,
					user: res.data.usuario,
				},
			});

			await AsyncStorage.setItem('token', res.data.token);
		} catch (error: any) {
			//TODO crear interfaz de los errores
			console.log(error);
			dispatch({
				type: 'addError',
				payload: error.response.data || 'Información incorrecta',
			});
		}
	};

	const signIn = async ({ nombre, correo, password }: RegisterData) => {
		try {
			const res = await cafeApi.post<LoginResponse>('/auth/usuarios', {
				nombre,
				correo,
				password,
			});

			dispatch({
				type: 'signIn',
				payload: {
					token: res.data.token,
					user: res.data.usuario,
				},
			});

			await AsyncStorage.setItem('token', res.data.token);
		} catch (error: any) {
			console.log(error);
			dispatch({
				type: 'addError',
				payload: error.response.data.errors[0].msg || 'No pudo crearse el usuario',
			});
		}
	};

	const logOut = async () => {
		await AsyncStorage.removeItem('token');
		dispatch({ type: 'logOut' });
	};

	const removeError = () => {
		dispatch({ type: 'removeError' });
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				signIn,
				logIn,
				logOut,
				removeError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
