import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from '../../../context/auth/authContext';
import PropTypes from 'prop-types';

const GoogleBtn = ({ deleteAll }) => {
	const authContext = useContext(AuthContext);
	const { login } = authContext;

	const componentClicked = () => {
		console.log('clicked');
	};

	const responseGoogle = (response) => {
		// deleteAll();
		// console.log(response);
		login({
			userId: response.profileObj.googleId,
			token: response.accessToken,
			name: response.profileObj.name,
			email: response.profileObj.email,
			picture: response.profileObj.imageUrl,
		});
	};

	return (
		<GoogleLogin
			clientId="857463888471-qhau98ptq5d5k52kbtolj03d5o7v33au.apps.googleusercontent.com"
			buttonText="LOGIN WITH GOOGLE"
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={'single_host_origin'}
		/>
	);
};

GoogleBtn.propTypes = {
	deleteAll: PropTypes.func.isRequired,
};

export default GoogleBtn;
