import React, { useReducer } from 'react';
import GamesContext from './gamesContext';
import gamesReducer from './gamesReducer';
import axios from 'axios';
import {
	REGISTER_GAME,
	DELETE_GAME,
	GET_GAMES,
	SET_GAMES_LOADING,
	GET_SCORES,
	GET_ALL_SCORES,
} from '../types';

const GamesState = (props) => {
	const initialState = {
		gamesData: null,
		gamesLoading: false,
		scores: null,
		allScores: null,
	};

	const [state, dispatch] = useReducer(gamesReducer, initialState);

	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};

	// Register GameGET_ALL_SCORES
	const registerGame = async (gameDataObj) => {
		setGamesLoading();
		try {
			const res = await axios.post(
				'localhost:3000/games',
				gameDataObj,
				config
			);
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
			await axios.delete(`localhost:3000/games/${id}`);
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
				await axios.delete(`localhost:3000/games/${game.id}`);
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
			const res = await axios.get('localhost:3000/games');
			const userGames = res.data.filter((game) => userId === game.userId);
			dispatch({
				type: GET_GAMES,
				payload: userGames,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Get Scores
	const getScores = async () => {
		setGamesLoading();
		try {
			const res = await axios.get('localhost:3000/scores');
			dispatch({
				type: GET_SCORES,
				payload: res.data,
			});
		} catch (err) {
			console.error(err);
		}
	};

	// Get All Scores
	const getAllScores = async () => {
		setGamesLoading();
		try {
			const res = await axios.get('localhost:3000/allScores');
			dispatch({
				type: GET_ALL_SCORES,
				payload: res.data,
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
				scores: state.scores,
				allScores: state.allScores,
				registerGame,
				deleteGame,
				deleteAll,
				getGames,
				getScores,
				getAllScores,
			}}
		>
			{props.children}
		</GamesContext.Provider>
	);
};

export default GamesState;
