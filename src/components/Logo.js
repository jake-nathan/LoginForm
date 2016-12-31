import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/lollipop.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.titleText}>POPSWAP</Text>
				<Text style={styles.subText}>keep in touch.</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	titleText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 50,
		backgroundColor: 'transparent',
		marginTop: 30,
	},
	subText: {
		color: 'white',
		fontStyle: 'italic',
	//	fontWeight: 'bold',
		fontSize: 20,
		backgroundColor: 'transparent',
		marginTop: 2,
	}
});
