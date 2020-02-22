import React, { Component } from 'react';

export default class Login extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

	}

	componentDidMount() {

	}

	render() {
		return (
			<section className='sec-block p-5' id='login-page'>
				<div className='container'>					

					<div className="content-wrap">
						<form>
							<h2 className='txt-light txt-green'>Log into your account</h2>
							<span>
								<label>Gmail Address<sup>*</sup></label>
								<input type="email" name="email" placeholder="ArnoldSaucemaker@Email.com" />
							</span>
							
							<button className="btn-std mt-4">
								<code>Login</code>
							</button>
						</form>
					</div>

				</div>
			</section>
		)
	}
}