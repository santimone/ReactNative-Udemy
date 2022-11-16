import React from 'react';
import { View, Button, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const ModalScreen = () => {
	const [isVisible, setisVisible] = useState(false);

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Modal" />
			<Button title="Abrir Modal" onPress={() => setisVisible(true)} />

			<Modal animationType="fade" visible={isVisible} transparent={true}>
				{/* Background */}
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.4)',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{/* Content */}
					<View
						style={{
							backgroundColor: 'white',
							width: 200,
							height: 200,
							justifyContent: 'center',
							alignItems: 'center',
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.25,
							elevation: 10,
							borderRadius: 10,
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
						<Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
							Cuerpo del Modal
						</Text>
						<Button title="Cerrar Modal" onPress={() => setisVisible(false)} />
					</View>
				</View>
			</Modal>
		</View>
	);
};
