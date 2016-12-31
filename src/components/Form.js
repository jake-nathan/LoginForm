import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';



export default class Form extends Component {
	render() {

		return (
			<View style={styles.container}>
				<UserInput source={this.props.input1Image}
					placeholder={this.props.input1Placeholder}
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={this.props.input2Image}
					secureTextEntry={true}
					placeholder={this.props.input2Placeholder}
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
				<SignupSection />
				<ButtonSubmit title={this.props.buttonTitle}/>
			</View>
		);
	}
}

Form.propTypes = {
	input1Image: PropTypes.number.isRequired,
	input1Placeholder: PropTypes.string.isRequired,
	input2Image: PropTypes.number.isRequired,
	input2Placeholder: PropTypes.string.isRequired,
	buttonTitle: PropTypes.string.isRequired,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
