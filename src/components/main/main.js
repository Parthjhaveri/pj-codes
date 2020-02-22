import React from 'react';
import firebase from 'firebase';

import MainSplash from '.././splasher/main-splash.js'; 
import About from '.././about/about.js';
import Loader from '.././loader/loader.js'; 
import Work from '.././work/work.js'; 
import FeaturedExercise from '.././featuredexc/featured_exc.js'; 
import FeaturedSocial from '.././social/featured_social.js'; 
import Contact from '.././contact/contact.js'; 
import Footer from '.././footer/footer.js'; 
import Login from '.././/auth/login.js'; 

class Mainpage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			home_skills: null,
			main_splash_ref: null
		}

		this.getChildData = this.getChildData.bind(this);

	}

	componentDidMount() {	

		// GET LIST HOME SKILLSET FROM FIREBASE
		const db = firebase.firestore();
		var skillset_ref = db.collection('skillset').doc('B5V0RPKajYlvhbSagIEY');

		// LISTEN FOR UPDATES
		skillset_ref.onSnapshot((doc) => {
		    if (doc.exists) {
		        this.setState({home_skills: doc.data()});
		    }
		});			
	}

	getChildData(refval) {
		this.setState({ main_splash_ref: refval });
	}

	render() {
		return (
		    <div>
		      	<MainSplash divref={this.getChildData} />
		      	{
		      		// RENDER ONLY IF PROPS EXIST
		      		this.state.home_skills != null ? 
		      		<About madskills={this.state.home_skills} /> : 
		      		<Loader />
		      	}
		      	<Work />
		      	<FeaturedExercise />
		      	<FeaturedSocial />
		      	<Contact />	      	     	
		    </div>
		);
	}
}

export default Mainpage;
