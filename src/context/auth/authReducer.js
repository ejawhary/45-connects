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
			const { userId, token, name, email, picture } = action.payload;
			if (token) {
				localStorage.setItem('token', token);
			}
			return {
				...state,
				authenticated: true,
				userData: { ...state.userData, userId, name, email, picture },
				authLoading: false,
			};

		case LOGOUT:
			return {
				...state,
				authenticated: null,
				userData: null,
				authLoading: null,
			};

		case GET_USER:
			return {
				...state,
				authenticated: true,
				userData: action.payload,
				authLoading: false,
			};

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
