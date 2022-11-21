import React, { useContext, useEffect } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { LoginBackground } from '../components/LoginBackground';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginThemes';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
	const { logIn, errorMessage, removeError } = useContext(AuthContext);

	useEffect(() => {
		if (errorMessage.length === 0) return;

		Alert.alert('Login incorrecto', errorMessage, [
			{
				text: 'Ok',
				onPress: removeError,
			},
		]);
	}, [errorMessage]);

	const { email, password, handleChange } = useForm({
		email: '',
		password: '',
	});

	const handleLogin = () => {
		console.log(email, password);
		Keyboard.dismiss();
		logIn({ correo: email, password });
	};

	return (
		<>
			{/* Background */}
			<LoginBackground />

			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={loginStyles.formContainer}>
					{/* Keyboard avoid view */}
					<WhiteLogo />
					<Text style={loginStyles.title}>Login</Text>

					<Text style={loginStyles.label}>Email:</Text>
					<TextInput
						placeholder="Ingrese su email"
						placeholderTextColor="rgba(255,255,255,0.4)"
						keyboardType="email-address"
						underlineColorAndroid="white"
						style={[
							loginStyles.inputField,
							Platform.OS === 'ios' && loginStyles.inputFieldIOS,
						]}
						selectionColor="white"
						onChangeText={(value) => handleChange(value, 'email')}
						value={email}
						onSubmitEditing={handleLogin}
						autoCapitalize="none"
						autoCorrect={false}
					/>

					<Text style={loginStyles.label}>Contraseña:</Text>
					<TextInput
						placeholder="********"
						placeholderTextColor="rgba(255,255,255,0.4)"
						underlineColorAndroid="white"
						style={[
							loginStyles.inputField,
							Platform.OS === 'ios' && loginStyles.inputFieldIOS,
						]}
						selectionColor="white"
						secureTextEntry={true}
						onChangeText={(value) => handleChange(value, 'password')}
						value={password}
						onSubmitEditing={handleLogin}
						autoCapitalize="none"
						autoCorrect={false}
					/>

					{/* Boton Login */}
					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={loginStyles.button}
							onPress={handleLogin}
						>
							<Text style={loginStyles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>

					{/* Registrarse */}
					<View style={loginStyles.linkContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.replace('SignUpScreen')}
						>
							<Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
						</TouchableOpacity>
					</View>

					{/* Olvide mi contraseña */}
					<View style={loginStyles.linkContainer}>
						<TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
							<Text style={loginStyles.buttonText}>¿Olvidó su contraseña?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};
