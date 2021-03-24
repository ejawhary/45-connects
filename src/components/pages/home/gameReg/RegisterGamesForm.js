import React, { useState, useContext } from 'react';
import GamesContext from '../../../../context/games/gamesContext';
import AuthContext from '../../../../context/auth/authContext';

const RegisterGamesForm = () => {
	const gamesContext = useContext(GamesContext);
	const { registerGame } = gamesContext;
	const authContext = useContext(AuthContext);
	const {
		userData: { userId },
		authLoading,
	} = authContext;

	const empty = {
		userId,
		date: '21/04/2021',
		contribution: '&euro;0',
		rounds: 'All Rounds',
		club: 'Random',
	};
	const [formData, setFormData] = useState(empty);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!authLoading) {
			registerGame({ ...formData, userId });
			setFormData(empty);
		}
	};

	return (
		<div className="comp" style={{ flexBasis: '35%' }}>
			<h2>Game Registation</h2>
			<form onSubmit={onSubmit}>
				{/* Date */}
				<label>
					Game Date
					<select
						name="date"
						value={formData.date}
						onChange={onChange}
					>
						<option value="21/04/2021" defaultValue="21/04/2021">
							21/04/2021
						</option>
						<option value="28/04/2021">28/04/2021</option>
					</select>
				</label>
				{/* Contribution */}
				<label>
					Contribution
					<select
						name="contribution"
						value={formData.contribution}
						onChange={onChange}
					>
						<option value="&euro;0" defaultValue="&euro;0">
							&euro;0
						</option>
						<option value="&euro;5">&euro;5</option>
						<option value="&euro;10">&euro;10</option>
						<option value="&euro;15">&euro;15</option>
					</select>
				</label>
				{/* Rounds */}
				<label>
					Rounds
					<select
						name="rounds"
						value={formData.rounds}
						onChange={onChange}
					>
						<option value="All Rounds" defaultValue="All Rounds">
							All Rounds
						</option>
						<option value="1 Round">1 Round</option>
						<option value="2 Rounds">2 Rounds</option>
					</select>
				</label>
				{/* Club */}
				<label>
					Club
					<select
						name="club"
						value={formData.club}
						onChange={onChange}
					>
						<option value="Random" defaultValue="Random">
							Random
						</option>
						<option value="Cork">Cork</option>
						<option value="Dublin">Dublin</option>
						<option value="Galway">Galway</option>
						<option value="Limerick">Limerick</option>
					</select>
				</label>
				<input
					type="submit"
					className="btn btn-dark"
					value="Register"
				/>
			</form>
		</div>
	);
};

export default RegisterGamesForm;
