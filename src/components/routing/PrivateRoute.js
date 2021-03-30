import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authcontext = useContext(AuthContext);
	const { authenticated, authLoading } = authcontext;

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
