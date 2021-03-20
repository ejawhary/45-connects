import React, { useReducer } from 'react';
import FacebookContext from './facebookContext';
import facebookReducer from './facebookReducer';
import {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGOUT,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
} from '../../types';

const FacebookState = (props) => {
	const initialState = {
		facebookData: null,
	};

	const [state, dispatch] = useReducer(facebookReducer, initialState);

	// Facebook Login
	const facebookLogin = (facebookUserObj) => {
		dispatch({
			type: FACEBOOK_LOGIN,
			payload: facebookUserObj,
		});
	};

	// Facebook Logout

	// Google Login

	// Google Logout

	return (
		<FacebookContext.Provider
			value={{
				facebookdata: state.facebookData,
				facebookLogin,
			}}
		>
			{props.children}
		</FacebookContext.Provider>
	);
};

export default FacebookState;
