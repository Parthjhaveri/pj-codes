import React from 'react';
import firebase from 'firebase';

import './App.css';
import Navbar from './components/nav/nav.js';
import Mainpage from './components/main/main.js';
import Login from './components/auth/login.js';
import Footer from './components/footer/footer.js'; 
import RouterComponent from './Router.js'; 
import { Switch } from 'react-router';

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
	      		<RouterComponent/>
		      	<Footer />
		    </div>
		);
	}
}

export default App;
