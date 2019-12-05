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
			skills_arr: []
		}
	}

	componentDidMount() {	

		// GET LIST HOME SKILLSET FROM FIREBASE
		const db = firebase.firestore();
		var skillset_ref = db.collection('skillset').doc('B5V0RPKajYlvhbSagIEY');

		skillset_ref.get()

		.then(function(doc) {
		    if (doc.exists) {
		        console.log("Document data:", doc.data());
		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
		})

		.catch(function(err) {
		    console.log(err);
		});

		
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
