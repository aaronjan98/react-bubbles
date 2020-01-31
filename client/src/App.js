import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

import './styles.scss';

function App() {
	return (
		<div className="App">
			<h1>Welcome to the Bubble App</h1>
			{/* <ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul> */}
			<Switch>
				<PrivateRoute path="/bubble-page" component={BubblePage} />
				{/* <PrivateRoute path="/" component={} /> */}
				{/* <Route path="/login" component={Login} /> */}
				<Route component={Login} />
			</Switch>
			{/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
		</div>
	);
}

export default App;
