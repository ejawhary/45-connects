import { REGISTER_GAME, GET_GAMES, SET_LOADING } from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_GAME:
			return {
				...state,
				gamesData: [...state.gamesData, action.payload],
				loading: false,
			};

		case GET_GAMES:
			return {
				...state,
				gamesData: action.payload,
				loading: false,
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default authReducer;
