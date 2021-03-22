import { LOGIN, LOGOUT, SET_LOGGEDIN, GET_USER } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				userData: action.payload,
				isLoading: false,
			};

		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				userData: null,
				isLoading: false,
			};

		case GET_USER:
			console.log(action.payload);
			return {
				...state,
				isLoggedIn: true,
				userData: action.payload,
				isLoading: false,
			};

		case SET_LOGGEDIN:
			return { ...state, isLoggedIn: true, isLoading: false };

		default:
			return state;
	}
};

export default authReducer;
