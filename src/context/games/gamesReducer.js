import {
	REGISTER_GAME,
	DELETE_GAME,
	GET_GAMES,
	SET_GAMES_LOADING,
	GET_SCORES,
	GET_ALL_SCORES,
} from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_GAME:
			return {
				...state,
				gamesData: [...state.gamesData, action.payload],
				gamesLoading: false,
			};

		case DELETE_GAME:
			return {
				...state,
				gamesData: state.gamesData.filter(
					(game) => game.id !== action.payload
				),
				gamesLoading: false,
			};

		case GET_GAMES:
			return {
				...state,
				gamesData: action.payload,
				gamesLoading: false,
			};

		case GET_SCORES:
			return {
				...state,
				scores: action.payload,
				gamesLoading: false,
			};

		case GET_ALL_SCORES:
			return {
				...state,
				allScores: action.payload,
				gamesLoading: false,
			};

		case SET_GAMES_LOADING:
			return {
				...state,
				gamesLoading: true,
			};

		default:
			return state;
	}
};

export default authReducer;
