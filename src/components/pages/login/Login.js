import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
	const responseFacebook = async (response) => {
		await console.log(response);
		return true;
	};
	const componentClicked = () => {
		console.log('clicked');
	};

	return (
		<div className="container flex-col">
			<h1
				className="text-center
			"
			>
				Welcome to
				<br />
				<span style={{ display: 'block' }}>45</span>
				<span style={{ display: 'block' }}>connects</span>
			</h1>
			<button></button>
			<FacebookLogin
				appId="913536599480262"
				autoLoad={true}
				fields="name,email,picture"
				callback={responseFacebook}
			/>
			,
		</div>
	);
};

export default Login;
