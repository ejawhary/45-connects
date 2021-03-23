import React, { useReducer } from 'react';
import GamesContext from './gamesContext';
import gamesReducer from './gamesReducer';
import axios from 'axios';
import { REGISTER_GAME, GET_GAMES, SET_LOADING } from '../types';

const GamesState = (props) => {
	const initialState = {
		gamesData: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(gamesReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Register Game
	const registerGame = async (gameDataObj) => {
		setLoading();
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
		setLoading();
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

	const setLoading = () => {
		dispatch({
			type: SET_LOADING,
		});
	};

	return (
		<GamesContext.Provider
			value={{
				gamesData: state.gamesData,
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
