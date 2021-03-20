import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import AuthContext from '../../../context/auth/authContext';

const FacebookBtn = () => {
	const authContext = useContext(AuthContext);
	const { facebookLogin } = authContext;

	const componentClicked = () => {
		console.log('clicked');
	};

	const responseFacebook = (response) => {
		// console.log(response);
		facebookLogin({
			userId: response.id,
			token: response.accessToken,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url,
		});
	};

	return (
		<FacebookLogin
			style={{ borderRadius: '10px' }}
			appId="913536599480262"
			autoLoad={true}
			fields="name,email,picture"
			onClick={componentClicked}
			callback={responseFacebook}
		/>
	);
};

export default FacebookBtn;
