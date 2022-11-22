import React from 'react';
import { Dimensions, View } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const LoginBackground = () => {
	return (
		<View
			style={{
				position: 'absolute',
				backgroundColor: '#121624',
				left: -width / 3,
				top: -width / 6,
				width: width * 5,
				height: height * 1.2,
				transform: [{ rotate: '25deg' }],
			}}
		></View>
	);
};
