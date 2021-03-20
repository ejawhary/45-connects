import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FacebookState from './context/auth/facebook/FacebookState';
import Login from './components/pages/login/Login';
import Gameplay from './components/pages/gameplay/Gameplay';
import './App.scss';

const App = () => {
	return (
		<FacebookState>
			<Fragment>
				<Router>
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/gameplay" component={Gameplay} />
					</Switch>
				</Router>
			</Fragment>
		</FacebookState>
	);
};

export default App;
