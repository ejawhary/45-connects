import { Fragment, useContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/pages/login/Login';
import Gameplay from './components/pages/gameplay/Gameplay';
import './App.scss';

const App = () => {
	return (
		<AuthState>
			<Fragment>
				<Router>
					<Switch>
						<PrivateRoute exact path="/" component={Gameplay} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/gameplay" component={Gameplay} />
					</Switch>
				</Router>
			</Fragment>
		</AuthState>
	);
};

export default App;
