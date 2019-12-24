import React, { Component } from 'react';

export default class Contact extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

	}

	componentDidMount() {}

	render() {
		return (
			<section className="sec-block text-left" id="home-contact">
				<div className="container py-5">
					<h1>Contact</h1>

					<div className="content-wrap">
						<form>
							<span>
								<label>Full Name<sup>*</sup></label>
								<input type="text" name="fullname" placeholder="Arnold Saucemaker..." />
							</span>
							<span>
								<label>Email Address<sup>*</sup></label>
								<input type="email" name="email" placeholder="Arnold@Saucemaker.com" />
							</span>
							<span>
								<label>Message<sup>*</sup></label>
								<textarea placeholder="Get to the chopper..."></textarea>
							</span>
							<button className="btn-std mt-4">
								<code>Send Message</code>
							</button>
						</form>
					</div>
					
				</div>
			</section>
		)
	}
}
