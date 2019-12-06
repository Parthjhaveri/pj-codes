import React, { Component } from 'react';
import white_logo from '../../images/logo-white.png';

export default class Navbar extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
	}

	componentDidMount() {
		var site_nav = document.getElementsByTagName('nav')[0];
		var site_nav_img = document.querySelector('nav img');
		var splash_div = document.getElementById('home-splash');
		
		window.onscroll = function() {
			if (window.pageYOffset > (splash_div.clientHeight - site_nav.clientHeight)) {
				site_nav.style.backgroundColor = '#303045';
				site_nav_img.style.width = '9%';
				site_nav_img.style.height = 'auto';
				site_nav_img.style.display = 'inline-block';
				site_nav.style.transition = '0.5s';
			} else {
				site_nav.style.backgroundColor = 'transparent';
				site_nav_img.style.width = '0%';
				site_nav_img.style.display = 'none';
				site_nav.style.transition = '0.5s';
			}
		}
	}

	render() {
		return (
			<nav className="p-4">
				<div className="content-wrap web">
					<img src={white_logo} alt="PJ Codes logo" />
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