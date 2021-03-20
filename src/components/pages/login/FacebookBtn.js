import React, { useState, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookContext from '../../../context/auth/facebook/facebookContext';

const FacebookBtn = () => {
	const facebookContext = useContext(FacebookContext);
	const { facebookLogin } = facebookContext;

	const [loginStatus, setLoginStatus] = useState({
		isLoggedIn: false,
		userId: '',
		name: '',
		email: '',
		picture: '',
	});

	const componentClicked = () => {
		console.log('clicked');
	};

	const responseFacebook = (response) => {
		console.log(response);
	};

	return (
		<FacebookLogin
			appId="913536599480262"
			autoLoad={true}
			fields="name,email,picture"
			onClick={componentClicked}
			callback={responseFacebook}
		/>
	);
};

export default FacebookBtn;
