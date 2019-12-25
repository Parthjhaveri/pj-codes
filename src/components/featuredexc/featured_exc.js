import React, { Component } from 'react';

export default class FeaturedExercise extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

		// REFS
		this.submit_ref = React.createRef();
		this.confirmation_ref = React.createRef();
		this.confirmation_p_ref = React.createRef();
	}

	componentDidMount() {
		// HOME FEATURED QUIZ
		var feat_ex_submit = this.submit_ref.current;

		feat_ex_submit.addEventListener('click', (event) => {
			event.preventDefault();
			let selected_answer = document.querySelector('input[name="choice"]:checked').value;
			let confirmation = this.confirmation_ref.current;
			let confirmation_text = this.confirmation_p_ref.current;
			
			if (selected_answer === 'choice-b') {
				confirmation_text.innerHTML = 'Correct Answer!'
				confirmation.style.display = 'flex';
				confirmation.style.backgroundColor = '#1bac9c';
				confirmation.style.transition = '0.4s';
			} else {
				confirmation_text.innerHTML = 'Wrong Answer!'
				confirmation.style.display = 'flex';
				confirmation.style.backgroundColor = '#e83e8c';
				confirmation.style.transition = '0.4s';
			}
		});
	}

	render() {
		return (
			<section className="sec-block code-block text-left" id="home-code">
				<div className="container pt-5">
					<h1>Featured Exercise</h1>
					<div className="row">
						<div className="col-12 col-lg-6">
		<pre>
		<code className="language-javascript">
{`
	function shows() {
		
		var supernatural = {
		    older: 'Dean Winchester',
		    younger: 'Sam Winchester',
		    angel: 'Castiel',
		    king: 'Crowley',
		    evil: 'Lucifer',
		    hell: function() {
		      return 'The king of hell is ' + this.king + 
		      ' & his adversary is ' + this.evil;
		    }
	  	}
	  
	  	return supernatural.hell();
	}

	shows();
`}
		</code>
		</pre>
						</div>
						<div className="col-12 col-lg-6">
							
							<strong><p>What will be the output of this code?</p></strong>
							<p>Select your answer below...</p>							
							<form id="feat-ex">
								<span>
									<input type="radio" name="choice" value="choice-a" />
									<label><code><p className='my-0'>ReferenceError</p></code></label>
								</span>
								
								<span>
									<input type="radio" name="choice" value="choice-b" />
									<label><code><p className='my-0'>'The king of hell is Crowley & his adversary is Lucifer'</p></code></label>
								</span>

								<span>
									<input type="radio" name="choice" value="choice-c" />
									<label><code><p className='my-0'>'The king of hell is <strong>undefined</strong> & his adversary is <strong>undefined</strong>'</p></code></label>
								</span>

								<span>
									<input type="radio" name="choice" value="choice-d" />
									<label><code><p className='my-0'>TypeError</p></code></label>
								</span>

								<button className="btn-std mt-4 center-mobile" ref={this.submit_ref}>
									<code>Submit</code>
								</button>
							</form>
							
							<aside className="mt-4 confirmation" ref={this.confirmation_ref}>
							    <p className="no-pad-mar" ref={this.confirmation_p_ref}></p>					    
							</aside>
						</div>
					</div>
					<a href="#">
						<em>
							<h5 className="text-center mt-5">View more exercises</h5>
						</em>
					</a>
				</div>
			</section>
		)
	}
}
