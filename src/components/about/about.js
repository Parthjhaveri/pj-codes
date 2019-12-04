import React, { Component } from 'react';
import selfie from '../../images/pjc-pic-two.png';

export default class About extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
		}
	}

	componentDidMount() {		

	}

	render() {
		return (
			<section className="sec-block text-justify" id="home-about">
				<div className="container py-5">
					<h1 className="txt-purp">About</h1>
					<div className="row">
						<div className="col-12 col-lg-7">
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
							<ul className="no-pad-mar no-ls">
								<li>Agile</li>
								<li>SCRUM</li>
								<li>Jira</li>
								<li>Trello</li>
								<li>Slack</li>
								<li>Basecamp</li>
							</ul>
						</div>
						<div className="slot md">
							<p>Web Development</p>
							<hr className="hr-green" /> 					
							<ul className="no-pad-mar no-ls">
								<li>HTML5</li>
								<li>CSS3</li>
								<li>CSS Animations</li>
								<li>CSS BEM</li>
								<li>SASS</li>
								<li>JavaScript/ES6</li>
								<li>D3 JS</li>
								<li>jQuery</li>
								<li>Redux</li>
								<li>React JS</li>
								<li>React Native</li>
								<li>Angular JS</li>
								<li>Node JS</li>
								<li>Ionic 4/Studio</li>
								<li>X-Code</li>
								<li>Boostrap 4</li>
								<li>Material UI</li>
								<li>Mocha</li>
								<li>Chai</li>
								<li>Backstop JS</li>
								<li>Chrome Debugging</li>
								<li>Wordpress</li>
								<li>SquareSpace</li>
								<li>Magento</li>
								<li>Woo Commerce</li>
							</ul>					
						</div>
						<div className="slot rt">				
							<p>Web Design/Art</p>
							<hr className="hr-green" /> 
							<ul className="no-pad-mar no-ls">
								<li>Adobe Illustrator</li>
								<li>Photoshop</li>
								<li>XD</li>
								<li>Affinity Designer</li>
								<li>InDesign</li>
								<li>Sketch</li>						
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}