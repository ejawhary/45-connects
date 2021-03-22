import React, { useReducer } from 'react';
import GamesContext from './gamesContext';
import gamesReducer from './gamesReducer';
import axios from 'axios';
import { REGISTER_GAME, GET_GAMES } from '../types';

const GamesState = (props) => {
	const initialState = {
		gameData: [],
		isLoading: true,
	};

	const [state, dispatch] = useReducer(gamesReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Register Game
	const registerGame = async (gameDataObj) => {
		try {
			const res = await axios.post('/games', gameDataObj, config);
			dispatch({
				type: REGISTER_GAME,
				payload: res.data,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Get Games
	const getGames = async () => {
		try {
			const res = await axios.get('/games');
			dispatch({
				type: GET_GAMES,
				payload: res.data,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<GamesContext.Provider
			value={{
				gameData: state.gameData,
				isLoading: state.isLoading,
				registerGame,
				getGames,
			}}
		>
			{props.children}
		</GamesContext.Provider>
	);
};

export default GamesState;
