import React from 'react';
import FacebookBtn from './FacebookBtn';
import GoogleBtn from './GoogleBtn';
import EmailLogin from './EmailLogin';

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
				style={{ fontSize: '3rem' }}
				className="text-center
			"
			>
				Welcome to
				<br />
				<div className="branding" style={{ marginBottom: '80px' }}>
					<h1
						className="ff red-text"
						style={{ fontSize: '6rem', marginBottom: '-20px' }}
					>
						45
					</h1>
					<h2
						className="connects"
						style={{ fontSize: '3rem', fontStyle: 'italic' }}
					>
						Connects
					</h2>
				</div>
			</h1>
			<GoogleBtn style={{ width: '400px' }} />
			<FacebookBtn />
			<EmailLogin />
		</div>
	);
};

export default Login;
