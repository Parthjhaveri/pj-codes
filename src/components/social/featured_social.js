import React, { Component } from 'react';
import pjcodesinsta from '../../images/pjcodes-insta.png';

export default class FeaturedSocial extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

	}

	componentDidMount() {}

	render() {
		return (
			<section className="sec-block text-justify text-white" id="home-social">
				<div className="container py-5">
					<h1>Social media</h1>
					<div className="row mt-3">
						<div className="col-12 col-lg-3">
							<p className="text-left center-mobile">
								Join me in my journey where I share my knowledge, skills and more importantly, learn from other developers and gain insight from their stories.
							</p>
							<h5 className='center-mobile'><span className='txt-green'>@</span>pjcodes<code><span className='txt-grey'> // Instagram</span></code></h5>
							<p><i className="fas fa-chevron-right"></i> Daily posts</p>
							<p><i className="fas fa-chevron-right"></i> Pop quizes</p>
							<p><i className="fas fa-chevron-right"></i> Challenges</p>
							<p><i className="fas fa-chevron-right"></i> Everything JavaScript</p>
							<p><i className="fas fa-chevron-right"></i> Astronomy & Space</p>
							<p><i className="fas fa-chevron-right"></i> DIY posts</p>
							<button className="btn-std mt-4">
								<code>Go Follow</code>
							</button>
						</div>
						<div className="col-12 col-lg-9 text-center">
							<img src={pjcodesinsta} className="img-responsive" alt="Instagram PJCodes" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
