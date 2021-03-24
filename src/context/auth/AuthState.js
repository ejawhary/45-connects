import React, { useReducer, useContext } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import {
	LOGIN,
	LOGOUT,
	SET_LOGGEDIN,
	GET_USER,
	SET_AUTH_LOADING,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		authLoading: false,
		userData: '',
		emailUserData: '',
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Login
	const login = async (userDataObj) => {
		setAuthLoading();

		try {
			const res = await axios.put('/auth', userDataObj, config);
			setToken(userDataObj.token);
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// get Loggedin user
	const getUser = async () => {
		setAuthLoading();

		if (state.token) {
			try {
				const res = await axios.get('/auth');
				dispatch({
					type: GET_USER,
					payload: res.data,
				});
			} catch (err) {}
		}
	};

	// Logout
	const logout = () => {
		setAuthLoading();

		dispatch({
			type: LOGOUT,
		});
		localStorage.removeItem('token');
	};

	// Set Token
	const setToken = (token) => {
		localStorage.setItem('token', token);
	};

	//  setLoggedIn
	const setLoggedIn = (token) => {
		setAuthLoading();

		if (localStorage.token) {
			dispatch({
				type: SET_LOGGEDIN,
			});
		}
	};

	// Set Auth Loading
	const setAuthLoading = () => {
		dispatch({
			type: SET_AUTH_LOADING,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authLoading: state.authLoading,
				isLoggedIn: state.isLoggedIn,
				userData: state.userData,
				emailUserData: state.emailUserData,
				login,
				logout,
				setLoggedIn,
				getUser,
				setAuthLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
