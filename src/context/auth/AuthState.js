import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGOUT,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		isLoggedIn: false,
		facebookUserData: null,
		googleUserData: null,
		emailUserData: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Facebook Login
	const facebookLogin = (userDataObj) => {
		dispatch({
			type: FACEBOOK_LOGIN,
			payload: userDataObj,
		});
	};

	// Facebook Logout
	const facebookLogout = () => {
		dispatch({
			type: FACEBOOK_LOGOUT,
		});
	};
	// Google Login
	const googleLogin = (userDataObj) => {
		dispatch({
			type: GOOGLE_LOGIN,
			payload: userDataObj,
		});
	};

	// Google Logout
	const googleLogout = () => {
		dispatch({
			type: GOOGLE_LOGOUT,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: state.isLoggedIn,
				facebookUserData: state.facebookUserData,
				googleUserData: state.googleUserData,
				emailUserData: state.emailUserData,
				facebookLogin,
				facebookLogout,
				googleLogin,
				googleLogout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
