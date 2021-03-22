import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authcontext = useContext(AuthContext);
	const { isLoggedIn, isLoading, token } = authcontext;

	return (
		<Route
			{...rest}
			render={(props) =>
				!token && !isLoading ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
