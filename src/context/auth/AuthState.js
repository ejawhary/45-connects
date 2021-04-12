import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { LOGIN, LOGOUT, GET_USER, SET_AUTH_LOADING } from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		authenticated: false,
		authLoading: false,
		userData: null,
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
				const res = await axios.get('http://localhost:5000/auth');
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
			const res = await axios.put(
				'http://localhost:5000/auth',
				userDataObj,
				config
			);
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
			getUser();
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
				userData: state.userData,
				login,
				logout,
				getUser,
				setAuthLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
