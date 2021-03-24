import {
	LOGIN,
	LOGOUT,
	SET_LOGGEDIN,
	GET_USER,
	SET_AUTH_LOADING,
} from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				userData: action.payload,
				authLoading: false,
			};

		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				userData: null,
				authLoading: false,
			};

		case GET_USER:
			return {
				...state,
				isLoggedIn: true,
				userData: action.payload,
				authLoading: false,
			};

		case SET_LOGGEDIN:
			return { ...state, isLoggedIn: true, authLoading: false };

		case SET_AUTH_LOADING:
			return {
				...state,
				authLoading: true,
			};

		default:
			return state;
	}
};

export default authReducer;
