import React from 'react';
import App from './App.js';
import Login from './components/auth/login.js';
import AccountInfo from './components/profile/account/account-info.js';
import Mainpage from './components/main/main.js';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Router = () => (
	<Switch>
		<Route path='/login-page' component={Login} />		
		<Route path='/account-info' component={AccountInfo} />		
		<Route exact path='/' component={Mainpage} />
	</Switch>
)

export default Router;