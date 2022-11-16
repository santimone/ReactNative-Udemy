import React from 'react';
import { View, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState<string>();
	const { top } = useSafeAreaInsets();

	const onRefresh = () => {
		setRefreshing(true);

		setTimeout(() => {
			console.log('terminamos');
			setRefreshing(false);
			setData('Hola mundo');
		}, 2500);
	};

	return (
		<ScrollView
			style={{ marginTop: refreshing ? top : 0 }}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={10}
					progressBackgroundColor="#5856D6"
					colors={['white', 'red', 'orange']} //Android
					style={{ backgroundColor: '#5856D6' }} //IOS
					tintColor="white" //IOS
					title="refreshing" //IOS
					titleColor={'black'} //IOS
				/>
			}
		>
			<View style={styles.globalMargin}>
				<HeaderTitle title="Pull to Refresh" />

				{data && <HeaderTitle title={data} />}
			</View>
		</ScrollView>
	);
};
