import { REGISTER_GAME, GET_GAMES } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_GAME:
			return {
				...state,
				gameData: action.payload,
				isLoading: false,
			};

		case GET_GAMES:
			return {
				...state,
				gameData: action.payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default authReducer;
