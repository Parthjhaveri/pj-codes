import React, { Component } from 'react';

export default class Navbar extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<nav className="p-4">
				<div className="content-wrap web">
					<img src="./images/logo-white.png" alt="PJ Codes logo" />
					<ul className="no-pad-mar no-ls social">
						<li><i className="fab fa-facebook-f"></i></li>
						<li><i className="fab fa-instagram"></i></li>
						<li><i className="fab fa-github"></i></li>
						<li><i className="fab fa-youtube"></i></li>
					</ul>
					<ul className="no-pad-mar no-ls links">
						<li>About</li>
						<li>Work</li>
						<li>Exercises</li>
						<li>Social</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="content-wrap mobile">
					<i className="fas fa-bars"></i>
				</div>
			</nav>
		)
	}
}