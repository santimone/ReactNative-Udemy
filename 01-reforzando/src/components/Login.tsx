import { useReducer, useEffect } from 'react';

interface AuthState {
	validando: boolean;
	token: string | null;
	username: string;
	nombre: string;
}

const initialState: AuthState = {
	validando: true,
	token: null,
	username: '',
	nombre: '',
};

type LoginActionPayload = { username: string; nombre: string };

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginActionPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'logout':
			return {
				validando: false,
				token: null,
				username: '',
				nombre: '',
			};

		case 'login':
			const { nombre, username } = action.payload;
			return {
				validando: false,
				token: 'ASDFSAUIGHIU23489ADF',
				username,
				nombre,
			};

		default:
			return state;
	}
};

export const Login = () => {
	const [{ validando, token }, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'logout' });
		}, 1500);
	}, []);

	const login = () => {
		dispatch({
			type: 'login',
			payload: { nombre: 'Santiago', username: 'Santimone' },
		});
	};

	const logout = () => {
		dispatch({
			type: 'logout',
		});
	};

	return (
		<>
			<h3>Login</h3>

			{validando ? (
				<div className="alert alert-info">Validando...</div>
			) : token ? (
				<>
					<div className="alert alert-success">Autenticado Correctamente</div>
					<button className="btn btn-danger" onClick={logout}>
						Logout
					</button>
				</>
			) : (
				<>
					s<div className="alert alert-danger">No autenticado</div>
					<button className="btn btn-primary" onClick={login}>
						Login
					</button>
				</>
			)}
		</>
	);
};
