import React from 'react';
import { View, SectionList, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { casas } from '../data/sectionListItem';
import { ItemSeparator } from '../components/ItemSeparator';

export const SectionListScreen = () => {
	return (
		<View style={{ ...styles.globalMargin, flex: 1 }}>
			<SectionList
				sections={casas}
				keyExtractor={(item, index) => item + index}
				ListHeaderComponent={() => <HeaderTitle title="Section List" />}
				stickySectionHeadersEnabled
				renderSectionHeader={({ section }) => (
					<View style={{ backgroundColor: 'white' }}>
						<HeaderTitle title={section.casa} />
					</View>
				)}
				ListFooterComponent={() => (
					<View style={{ marginBottom: 70 }}>
						<HeaderTitle title={`Total de casas: ${casas.length}`} />
					</View>
				)}
				renderSectionFooter={({ section }) => (
					<HeaderTitle title={`Total: ${section.data.length}`} />
				)}
				renderItem={({ item }) => <Text>{item}</Text>}
				ItemSeparatorComponent={() => <ItemSeparator />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
