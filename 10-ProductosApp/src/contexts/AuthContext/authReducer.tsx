import { Usuario } from '../../interfaces/appInterfaces';

export interface AuthState {
	status: 'checking' | 'authenticated' | 'not-authenticated';
	token: string | null;
	errorMessage: string;
	user: Usuario | null;
}

type AuthAction =
	| { type: 'signIn'; payload: { token: string; user: Usuario } }
	| { type: 'logOut' }
	| { type: 'addError'; payload: string }
	| { type: 'removeError' }
	| { type: 'authenticationFailed' };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'addError':
			return {
				...state,
				status: 'not-authenticated',
				user: null,
				token: null,
				errorMessage: action.payload,
			};

		case 'removeError':
			return {
				...state,
				errorMessage: '',
			};

		case 'signIn':
			return {
				...state,
				errorMessage: '',
				status: 'authenticated',
				token: action.payload.token,
				user: action.payload.user,
			};

		case 'logOut':
		case 'authenticationFailed':
			return {
				...state,
				status: 'not-authenticated',
				token: null,
				user: null,
			};

		default:
			return state;
	}
};
