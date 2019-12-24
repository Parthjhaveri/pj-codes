import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// REDUX IMPORTS
// import { Provider } from 'react-redux';
// import store from './store';

// FIREBASE CONFIG
var firebaseConfig = {
	apiKey: "AIzaSyBpxiwnQ7pHVk-9Gac_MTaFHjRbXvXIp-Q",
	authDomain: "pj-codes.firebaseapp.com",
	databaseURL: "https://pj-codes.firebaseio.com",
	projectId: "pj-codes",
	storageBucket: "pj-codes.appspot.com",
	messagingSenderId: "487819262212",
	appId: "1:487819262212:web:80ff1b55f08d761633f851",
	measurementId: "G-3M4PPQSPZT"
};

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
