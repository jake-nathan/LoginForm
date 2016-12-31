import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	Image,
} from 'react-native';

import bgSrc from '../images/jakewallpaper.png';

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={styles.picture} source={bgSrc}>
				{this.props.children}
			</Image>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
});
