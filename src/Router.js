import React from 'react';
import App from './App.js';
import Login from './components/auth/login.js';
import AccountInfo from './components/profile/account/account-info.js';
import Mainpage from './components/main/main.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const RouterComponent = () => (	
	<Switch>
		<Route exact path='/'>
			<Mainpage />
		</Route>
		<Route path='/login'>
			<Login />
		</Route>
		<Route path='/account'>
			<AccountInfo />
		</Route>
	</Switch>			
)

export default RouterComponent;