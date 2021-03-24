import React, { useReducer } from 'react';
import GamesContext from './gamesContext';
import gamesReducer from './gamesReducer';
import axios from 'axios';
import {
	REGISTER_GAME,
	DELETE_GAME,
	GET_GAMES,
	SET_GAMES_LOADING,
} from '../types';

const GamesState = (props) => {
	const initialState = {
		gamesData: [],
		gamesLoading: false,
	};

	const [state, dispatch] = useReducer(gamesReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Register Game
	const registerGame = async (gameDataObj) => {
		setGamesLoading();
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

	// Delete game
	const deleteGame = async (id) => {
		setGamesLoading();

		try {
			await axios.delete(`/games/${id}`);
			dispatch({
				type: DELETE_GAME,
				payload: id,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Delete all games
	const deleteAll = () => {
		setGamesLoading();

		try {
			state.gamesData.forEach(async (game) => {
				await axios.delete(`/games/${game.id}`);
				dispatch({
					type: DELETE_GAME,
					payload: game.id,
				});
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Get Games
	const getGames = async (userId) => {
		setGamesLoading();
		try {
			const res = await axios.get('/games');
			const userGames = res.data.filter((game) => userId === game.userId);
			dispatch({
				type: GET_GAMES,
				payload: userGames,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Set Games Loading
	const setGamesLoading = () => {
		dispatch({
			type: SET_GAMES_LOADING,
		});
	};

	return (
		<GamesContext.Provider
			value={{
				gamesData: state.gamesData,
				gamesLoading: state.gamesLoading,
				registerGame,
				deleteGame,
				deleteAll,
				getGames,
			}}
		>
			{props.children}
		</GamesContext.Provider>
	);
};

export default GamesState;
