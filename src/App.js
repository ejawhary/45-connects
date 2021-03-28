import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import GamesState from './context/games/GamesState';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import Gameplay from './components/pages/gameplay/Gameplay';
import './App.scss';

const App = () => {
	return (
		<AuthState>
			<GamesState>
				<Fragment>
					<Router>
						<Switch>
							<PrivateRoute exact path="/" component={Home} />
							<Route
								exact
								path="/gameplay"
								component={Gameplay}
							/>
							<Route exact path="/login" component={Login} />
						</Switch>
					</Router>
				</Fragment>
			</GamesState>
		</AuthState>
	);
};

export default App;
