import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

import './styles.scss';

function App() {
	return (
		<div className="App">
			<h1>Welcome to the Bubble App</h1>
			<Switch>
				<PrivateRoute exact path="/bubble-page" component={BubblePage} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</div>
	);
}

export default App;
