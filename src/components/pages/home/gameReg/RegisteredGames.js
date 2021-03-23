import React from 'react';

const Register4Games = () => {
	return (
		<div className="comp">
			<h2 className="league-registration-title">League Registation</h2>
			<form className="games-registration-form">
				{/* Date */}
				<label>
					League Date
					<select name="date">
						<option value="Wednesday 21st April 2021">
							Wednesday 21st April 2021
						</option>
						<option value="Wednesday 28th April 2021">
							Wednesday 28th April 2021
						</option>
					</select>
				</label>
				{/* Contribution */}
				<label>
					Contribution
					<select name="contribution">
						<option value="&euro;0">&euro;0</option>
						<option value="&euro;5">&euro;5</option>
						<option value="&euro;10">&euro;10</option>
						<option value="&euro;15">&euro;15</option>
					</select>
				</label>
				{/* Rounds */}
				<label>
					Rounds
					<select name="rounds">
						<option value="All Rounds">All Rounds</option>
						<option value="1 Round">1 Round</option>
						<option value="2 Rounds">2 Rounds</option>
					</select>
				</label>
				{/* Club */}
				<label>
					Club
					<select name="club">
						<option value="Random">Random</option>
						<option value="Cork">Cork</option>
						<option value="Dublin">Dublin</option>
						<option value="Galway">Galway</option>
						<option value="Limerick">Limerick</option>
					</select>
				</label>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Register4Games;
