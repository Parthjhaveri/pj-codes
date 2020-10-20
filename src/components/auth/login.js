import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

// GOOGLE LOGIN
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

		this.responseGoogle = this.responseGoogle.bind(this);
	}

	componentDidMount() {
		
	}

	async responseGoogle(response) {
		console.log(await response);
	}

	render() {
		return (
			<section className='sec-block p-5' id='login-page'>
				<div className='container'>					

					<div className="content-wrap">
						<form>
							<h2 className='txt-light txt-green'>Log into your account</h2>
							{								
							// <span>
							// 	<label>Gmail Address<sup>*</sup></label>
							// 	<input type="email" name="email" placeholder="ArnoldSaucemaker@Email.com" />
							// </span>
							
							// <button className="btn-std mt-4">
							// 	<Link to="/account-info">
							// 		<code>Login</code>
							// 	</Link>
							// </button>
							}

							<GoogleLogin
							    clientId="820059506130-c8a8uvcllpgu87slvkkksvlm3i09g1b0.apps.googleusercontent.com"
							    buttonText="Login with your Gmail"
							    onSuccess={this.responseGoogle}
							    onFailure={this.responseGoogle}
							    cookiePolicy={'single_host_origin'}
						  	/>
						</form>						
					</div>

				</div>
			</section>
		)
	}
}