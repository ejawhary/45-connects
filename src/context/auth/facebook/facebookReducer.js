import {
	FACEBOOK_LOGIN,
	FACEBOOK_LOGOUT,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT,
} from '../../types';

const facebookReducer = (state, action) => {
	switch (action.type) {
		case FACEBOOK_LOGIN:
			return { ...state, facebookData: action.payload };

		default:
			return state;
	}
};

export default facebookReducer;
