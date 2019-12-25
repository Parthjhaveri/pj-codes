import React, { Component } from 'react';
import $ from 'jquery';

import eqalert_img from '../../images/eq-alert-one.png';
import plwatch_img from '../../images/neothree.png';

export default class Work extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {

	}

	render() {
		return (
			<section className="sec-block text-justify text-white" id="home-side-projects">
				<div className="container pt-5">					
					<h1>Featured side Projects</h1>
						<h4><code><span className='txt-pink'>0:</span> let project = 'Earthquake Alert';<span className='txt-grey'> // My personal favorite</span></code></h4>
						<div className="row">
							<div className="col-12 col-lg-6">
								<img src={eqalert_img} alt="Earthquake Alert pic" />	
							</div>
							<div className="col-12 col-lg-6 center-mobile">
								<p>
									An app that uses the USGS REST API to pull in live Earthquake data 
									from around the world into a clickable table feed, which changes
									pin on a map.
									<br />
									<br />
									I used React, Redux combined with D3 JS to chart a powerful and informative 
									graph based on button click. This app is on-going and i have yet to make some
									CSS refinements, along with a ton of planned features. 
									<br />
									<br />
									The end goal of this project is to publish a short sociological study on the implications of high-magnitude earthquakes on the affected populus.
								</p>
								<button className="btn-std mt-4">
									<code>View this project</code>
								</button>
							</div>
						</div>

						<h4 className="mt-5"><code><span className='txt-pink'>1:</span> let project = 'Planet Watch';</code></h4>
						<div className="row">
							<div className="col-12 col-lg-6">
								<img src={plwatch_img} alt="Panet Watch pic" />	
							</div>
							<div className="col-12 col-lg-6 center-mobile">
								<p>
									Built in React, this app that provides a consolidated narrative on several Global and Astronomical issues.
									<br />
									<br />
									The cornerstone feature of this app is the NEO (Near Earth Object) tracker feature
									i built using the NASA Data API. The app pulls in data on asteroids that are relatively close to Earth and lists their speed, trajectory, size, composition and more. By hitting the 'Hypothetical Hit', the app lists those properties and presents a danger level based on proximity and speed.						
								</p>
								<button className="btn-std mt-4">
									<code>View this project</code>
								</button>
							</div>
						</div>
				</div>
			</section>
		)
	}
}