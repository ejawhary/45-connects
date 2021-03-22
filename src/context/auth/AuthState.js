import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { LOGIN, LOGOUT, SET_LOGGEDIN, GET_USER } from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isLoading: true,
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
		if (state.token) {
			try {
				const res = await axios.get('/auth');
				console.log(res.data);
				dispatch({
					type: GET_USER,
					payload: res.data,
				});
			} catch (err) {}
		}
	};

	// Logout
	const logout = () => {
		dispatch({
			type: LOGOUT,
		});
		localStorage.removeItem('token');
		console.log('logout');
	};

	// Set Token
	const setToken = (token) => {
		localStorage.setItem('token', token);
	};

	//  setLoggedIn
	const setLoggedIn = (token) => {
		if (localStorage.token) {
			dispatch({
				type: SET_LOGGEDIN,
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isLoading: state.isLoggedIn,
				isLoggedIn: state.isLoggedIn,
				userData: state.userData,
				emailUserData: state.emailUserData,
				login,
				logout,
				setLoggedIn,
				getUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
