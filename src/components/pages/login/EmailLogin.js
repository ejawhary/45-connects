import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';

const EmailLogin = () => {
	const authContext = useContext(AuthContext);
	const { emailLogin } = authContext;

	const [email, setEmail] = useState(null);

	const onChange = (e) => {
		setEmail(e.target.value);
	};

	const onSubmit = () => {
		emailLogin({
			email,
		});
	};

	return (
		<form style={formStyles}>
			<input
				style={inputStyles}
				type="email"
				placeholder="Enter Email"
				name="email"
				aria-label="enter email to login"
				tabIndex="1"
				onChange={onChange}
			/>
			<input
				style={inputStyles}
				type="text"
				placeholder="Enter Password (not a real one!)"
				name="password"
				aria-label="enter your password to login"
			/>
			<input type="submit" value="Login With Email" />
		</form>
	);
};

const formStyles = {
	display: 'flex',
	flexDirection: 'column',
};

const inputStyles = {
	width: '232px',
	height: '54.5px',
	borderRadius: '20px',
	marginBottom: '1rem',
	background: '#368d33',
	color: '#fff',
};
export default EmailLogin;
