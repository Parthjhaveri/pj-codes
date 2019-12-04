import React from 'react';
import firebase from 'firebase';

import './App.css';
import Navbar from './components/nav/nav.js'; 
import MainSplash from './components/splasher/main-splash.js'; 
import About from './components/about/about.js'; 

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {	
		const rootRef = firebase.database().ref().child('react');
	}

	render() {
		return (
	    <div className="App">
	      	<Navbar />
	      	<MainSplash />
	      	<About />
	    </div>
		);
	}
}

export default App;
