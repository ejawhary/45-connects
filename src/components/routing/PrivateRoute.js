import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { SET_LOGGEDIN } from '../../context/types';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authcontext = useContext(AuthContext);
	const { authenticated, authLoading, setLoggedIn, token } = authcontext;

	useEffect(() => {
		// setLoggedIn();
		console.log(authenticated, authLoading);
	}, [authenticated]);

	return (
		<Route
			{...rest}
			render={(props) =>
				!authenticated && !authLoading ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
