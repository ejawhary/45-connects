import {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGOUT,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
} from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case FACEBOOK_LOGIN:
			return {
				...state,
				isLoggedIn: true,
				facebookUserData: action.payload,
			};

		case FACEBOOK_LOGOUT:
			return { ...state, isLoggedIn: false, facebookUserData: null };

		case GOOGLE_LOGIN:
			return {
				...state,
				isLoggedIn: true,
				googleUserData: action.payload,
			};

		case GOOGLE_LOGOUT:
			return { ...state, isLoggedIn: false, googleUserData: null };

		default:
			return state;
	}
};

export default authReducer;
