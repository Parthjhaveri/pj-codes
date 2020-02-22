import React from 'react';
import firebase from 'firebase';

import './App.css';
import Navbar from './components/nav/nav.js';
import Mainpage from './components/main/main.js';
import Footer from './components/footer/footer.js'; 
import Router from './Router.js'; 
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {}

	render() {
		return (
		    <div className="App">
	  			<Navbar />
	      		<Router />	     	
		      	<Footer />
		    </div>
		);
	}
}

export default App;
