import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';

import nameImg from '../images/username.png';
import phoneImg from '../images/phoneicon.png';
import passwordImg from '../images/password.png';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form
					input1Image={phoneImg}
					input1Placeholder='Phone Number'
					input2Image={passwordImg}
					input2Placeholder='Password'
					buttonTitle='LOGIN'/>
			</Wallpaper>
		);
	}
}
