import React from 'react';
import firebase from 'firebase';

import './App.css';
import Navbar from './components/nav/nav.js'; 
import MainSplash from './components/splasher/main-splash.js'; 
import About from './components/about/about.js'; 
import Loader from './components/loader/loader.js'; 

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			home_skills: null
		}

	}

	componentDidMount() {	

		// GET LIST HOME SKILLSET FROM FIREBASE
		const db = firebase.firestore();
		var skillset_ref = db.collection('skillset').doc('B5V0RPKajYlvhbSagIEY');

		skillset_ref.onSnapshot((doc) => {
		    if (doc.exists) {
		        this.setState({home_skills: doc.data()});
		    } 

		    else {		        
		        console.log("No such document!");
		    }
		});		
		
	}

	render() {
		return (
	    <div className="App">
	      	<Navbar />
	      	<MainSplash />
	      	{
	      		this.state.home_skills != null ? 
	      		<About madskills={this.state.home_skills} /> : 
	      		<Loader />
	      	}
	    </div>
		);
	}
}

export default App;
