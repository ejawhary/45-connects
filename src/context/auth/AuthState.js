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
		authenticated: null,
		authLoading: null,
		userData: '',
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Get User
	const getUser = async () => {
		setAuthLoading();

		if (localStorage.token) {
			try {
				const res = await axios.get('/auth');
				dispatch({
					type: GET_USER,
					payload: res.data,
				});
			} catch (err) {
				console.error(err);
			}
		}
	};

	// Login
	const login = async (userDataObj) => {
		setAuthLoading();

		try {
			const res = await axios.put('/auth', userDataObj, config);
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
		} catch (err) {
			console.error(err);
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
				authenticated: state.authenticated,
				authLoading: state.authLoading,
				authenticated: state.authenticated,
				userData: state.userData,
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
