import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1 }}>
			<FlatList
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.name}
				ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />} // Se puede mandar asi cuando la funcion no necesita argumentos
				ItemSeparatorComponent={() => <ItemSeparator />}
			/>
		</View>
	);
};
