import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from '../../../context/auth/authContext';
import PropTypes from 'prop-types';

const GoogleBtn = ({ deleteAll }) => {
	const authContext = useContext(AuthContext);
	const { login } = authContext;

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
			clientId="332392594695-4h8jtih2sga3pdtq7hou5lr9btdbq5vt.apps.googleusercontent.com"
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
