import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
	style?: StyleProp<ViewStyle>;
	onDebounce: (value: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {
	const [textValue, setTextValue] = useState('');
	const debouncedValue = useDebouncedValue(textValue, 1500);

	useEffect(() => {
		onDebounce(debouncedValue);
	}, [debouncedValue]);

	return (
		<View style={{ ...componentStyles.container, ...(style as any) }}>
			<View style={componentStyles.textBackground}>
				<TextInput
					placeholder="Buscar Pokemon"
					style={componentStyles.textInput}
					autoCapitalize={'none'}
					autoCorrect={false}
					value={textValue}
					onChangeText={setTextValue}
				/>
				<Icon name="search-outline" color="grey" size={30} />
			</View>
		</View>
	);
};

const componentStyles = StyleSheet.create({
	container: {},
	textBackground: {
		backgroundColor: '#F3F1F3',
		borderRadius: 40,
		height: 40,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12,
	},
	textInput: {
		flex: 1,
		fontSize: 18,
		top: 2,
	},
});
