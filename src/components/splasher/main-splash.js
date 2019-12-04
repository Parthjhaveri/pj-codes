import React, { Component } from 'react';
import logo from '../../images/logo-white.png';

export default class MainSplash extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<section className="sec-block p-5" id="home-splash">
				<div className="content-wrap">
					<img src={logo} alt="PJ Codes logo" />
					<p className="no-pad-mar mt-3">
						New York based Front-End Web Developer
						<br/>
						<br/>
						Dedicated to the craft of engineering seamless, user-friendly and
						accessible web experiences
					</p>
				</div>
				<aside id="arrow-sticky">
					<i className="fas fa-angle-down"></i>
				</aside>
				<aside id="email-sticky">
					<a>Thedivinemonk3y@Gmail.com</a>
				</aside>
			</section>
		)
	}
}