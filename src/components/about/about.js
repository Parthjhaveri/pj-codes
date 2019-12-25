import React, { Component } from 'react';
import selfie from '../../images/pjc-pic-two.png';

export default class About extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

		this.home_about_ref = React.createRef();
	}

	render() {
		return (
			<section className="sec-block text-justify" id="home-about" ref={this.home_about_ref}>
				<div className="container py-5">
					<h1 className="txt-purp">About</h1>
					<div className="row">
						<div className="col-12 col-lg-7 center-mobile">
							<p>
								Coding for me is like art. 
								<br />
								<br />
								I have always had a keen interest in the creative
								aspect of things. Before the development, logic, decision-making and 
								strategy, stands the most initial - <em><strong>conception phase</strong></em>. In this phase is where rough drafts are made, wireframes are built and mockups are finalized, a 
								certain superpower is needed. A strength in logically visualizing a certain interface 
								while keeping in mind accessibility and user-experience, but also in maintaining a 
								beautiful user-interface which users can enjoy. After this point, the browser becomes a <em><strong>mere canvas</strong></em>. A blank page, where art is created. 
								<br />
								<br />
								This is where my 
								strengths lie.
								<br />
								<br />
								I have always had a love for the creative, but I have also forever been passionate about technology. Fusing the two together has created a magic so powerful that it fuels me to be
								the 5am artist who survives on coffee and code. I believe that before classNameifying one's self as a Front-End, Back-End or Full-Stack developer, one should strive to be a good Software Developer, who enjoys working and thrives within their niche. 
								<br />
								<br />
								Aside from coding, I believe it to be imperative that one maintains a good work-life balance. I enjoy Bicycling, Gardening, Wood-working, exercising and watching boring WW2 History-Channel documentaries. If this sounds like someone you would enjoy working with, please keep scrolling further!
							</p>
						</div>
						<div className="col-12 col-lg-5">
							<img src={selfie} className="img-responsive" alt="PJ Codes Selfie" />
						</div>
					</div>
				</div>
				<div className="container-fluid py-5">
					<div className="mobile-slots content-wrap">
						<div className="slot lt">
							<p>Project Management</p>
							<hr className="hr-green" />
							<ul className="no-pad-mar no-ls center-mobile">
								{
									this.props.madskills.proj_mana.map((el, idx) => {
										return <li key={idx}>{el}</li>
									})
								}
							</ul>
						</div>
						<div className="slot md">
							<p>Web Development</p>
							<hr className="hr-green" /> 					
							<ul className="no-pad-mar no-ls center-mobile">
								{
									this.props.madskills.web_dev.map((el, idx) => {
										return <li key={idx}>{el}</li>
									})
								}
							</ul>					
						</div>
						<div className="slot rt">				
							<p>Web Design/Art</p>
							<hr className="hr-green" /> 
							<ul className="no-pad-mar no-ls center-mobile">
								{
									this.props.madskills.web_design_art.map((el, idx) => {
										return <li key={idx}>{el}</li>
									})
								}					
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}