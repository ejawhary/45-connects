import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';

const EmailLogin = () => {
	const authContext = useContext(AuthContext);
	const { emailLogin } = authContext;

	const [email, setEmail] = useState(null);

	const onChange = (e) => {
		setEmail(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		emailLogin({
			email,
		});
	};

	return (
		<form className="email-form flex-col">
			<input
				className="input email-form-input"
				type="email"
				placeholder="Enter Email"
				name="email"
				aria-label="enter email to login"
				onChange={onChange}
			/>
			<input
				className="input email-form-input"
				type="text"
				placeholder="Enter Password (not a real one!)"
				name="password"
				aria-label="enter your password to login"
			/>
			<input
				className="btn btn-primary btn-sumbit"
				type="submit"
				value="Login"
				onSubmit={onSubmit}
			/>
		</form>
	);
};

export default EmailLogin;
