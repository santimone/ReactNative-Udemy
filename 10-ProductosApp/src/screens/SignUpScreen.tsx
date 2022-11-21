import React, { useContext, useEffect } from 'react';
import {
	View,
	Text,
	KeyboardAvoidingView,
	Platform,
	TextInput,
	TouchableOpacity,
	Keyboard,
	Alert,
} from 'react-native';

import { loginStyles } from '../theme/loginThemes';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const SignUpScreen = ({ navigation }: Props) => {
	const { signIn, errorMessage, removeError } = useContext(AuthContext);

	const { email, password, name, handleChange } = useForm({
		name: '',
		email: '',
		password: '',
	});

	useEffect(() => {
		if (errorMessage.length === 0) return;

		Alert.alert('Registro incorrecto', errorMessage, [
			{
				text: 'Ok',
				onPress: removeError,
			},
		]);
	}, [errorMessage]);

	const handleSignUp = () => {
		console.log(email, password);
		Keyboard.dismiss();
		signIn({
			nombre: name,
			correo: email,
			password,
		});
	};

	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1, backgroundColor: '#121624' }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={loginStyles.formContainer}>
					{/* Keyboard avoid view */}
					<WhiteLogo />
					<Text style={loginStyles.title}>Registro</Text>

					<Text style={loginStyles.label}>Nombre:</Text>
					<TextInput
						placeholder="Ingrese su email"
						placeholderTextColor="rgba(255,255,255,0.4)"
						underlineColorAndroid="white"
						style={[
							loginStyles.inputField,
							Platform.OS === 'ios' && loginStyles.inputFieldIOS,
						]}
						selectionColor="white"
						onChangeText={(value) => handleChange(value, 'name')}
						value={name}
						onSubmitEditing={handleSignUp}
						autoCapitalize="words"
						autoCorrect={false}
					/>

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
						onSubmitEditing={handleSignUp}
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
						onSubmitEditing={handleSignUp}
						autoCapitalize="none"
						autoCorrect={false}
					/>

					{/* Boton Login */}
					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={loginStyles.button}
							onPress={handleSignUp}
						>
							<Text style={loginStyles.buttonText}>Sign Up</Text>
						</TouchableOpacity>
					</View>

					{/* FAB */}
					<TouchableOpacity
						onPress={() => navigation.replace('LoginScreen')}
						activeOpacity={0.8}
						style={{ ...loginStyles.buttonReturn }}
					>
						<Text style={loginStyles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};
