import React, { Component } from 'react';
import white_logo from '../../images/logo-white.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

class Navbar extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

		this.nav_ref = React.createRef();
		this.logo_ref = React.createRef();
		this.navlinks_ref = React.createRef();
	}

	componentDidMount() {
		this.logo_ref.current.addEventListener('click', () => {
			window.location.href = '/';
		});
	}

	componentDidUpdate() {		
		var site_nav = this.nav_ref.current;
		var site_nav_img = this.logo_ref.current;
		var splash_div = this.props.main_splash_ref;
		
		window.onscroll = function() {
			if (window.pageYOffset > (splash_div.clientHeight - site_nav.clientHeight)) {				
				site_nav.classList.add('nav-scroll-change');		
				site_nav_img.classList.add('nav-img-scroll-change');		
			} else {
				site_nav.classList.remove('nav-scroll-change');		
				site_nav_img.classList.remove('nav-img-scroll-change');
			}
		}
	}

	render() {
		return (
			<nav className="p-4" ref={this.nav_ref}>
				<div className="content-wrap web">
					
					<img src={white_logo} alt="PJ Codes logo" ref={this.logo_ref} />
					
					<ul className="no-pad-mar no-ls social">
						<li><i className="fab fa-facebook-f"></i></li>
						<li><i className="fab fa-instagram"></i></li>
						<li><i className="fab fa-github"></i></li>
						<li><i className="fab fa-youtube"></i></li>
					</ul>					
					<ul className="no-pad-mar no-ls links" ref={this.navlinks_ref}>
						<li>About</li>
						<li>Work</li>
						<li>Exercises</li>
						<li>Social</li>
						<li>Contact</li>
						<li className='signin-status' data-status='signed_in'>
							<Link to="/login-page">Sign In</Link>
						</li>
						<li className='signin-status' data-status='signed_out'>Sign Out</li>
					</ul>					
				</div>
				<div className="content-wrap mobile">
					<i className="fas fa-bars"></i>
				</div>
			</nav>
		)
	}
}

let mapStateToProps = (state) => {	
	return {
		main_splash_ref: state.dom_elements.dom_data
	}
}

export default connect(mapStateToProps, null)(Navbar);