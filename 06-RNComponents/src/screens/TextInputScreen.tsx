import React, { useState } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {
	const { handleChange, form, isSuscribed } = useForm({
		name: '',
		email: '',
		isSuscribed: false,
		phone: '',
	});

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
					<View style={styles.globalMargin}>
						<HeaderTitle title="TextInputs" />

						<TextInput
							style={stylesInput.inputStyle}
							placeholder="ingrese su nombre"
							autoCorrect={false}
							autoCapitalize="words"
							onChangeText={(value) => handleChange(value, 'name')}
						/>
						<TextInput
							style={stylesInput.inputStyle}
							placeholder="ingrese su email"
							autoCorrect={false}
							autoCapitalize="none"
							onChangeText={(value) => handleChange(value, 'email')}
							keyboardType="email-address"
						/>

						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.title}>Suscribirme</Text>
							<View style={{ flex: 1 }} />
							<CustomSwitch
								isOn={isSuscribed}
								onChange={(value) => handleChange(value, 'isSuscribed')}
							/>
						</View>
						<TextInput
							style={stylesInput.inputStyle}
							placeholder="ingrese su telefono"
							onChangeText={(value) => handleChange(value, 'phone')}
							keyboardType="phone-pad"
						/>

						<HeaderTitle title={JSON.stringify(form, null, 3)} />
						<View style={{ height: 100 }} />
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const stylesInput = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.3)',
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginVertical: 10,
	},
});
