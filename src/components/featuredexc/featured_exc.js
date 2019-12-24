import React, { Component } from 'react';

export default class FeaturedExercise extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		// HOME FEATURED QUIZ
			var feat_ex_submit = document.getElementById('feat-ex-sub');

			feat_ex_submit.addEventListener('click', function(event) {
				event.preventDefault();
				let selected_answer = document.querySelector('input[name="choice"]:checked').value;
				let confirmation = document.querySelectorAll('#home-code aside.confirmation')[0];
				let confirmation_text = document.querySelectorAll('#home-code aside.confirmation p')[0];
				
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
							<p>
								<strong>What will be the output of this code?</strong>
								<br />
								<br />
								Select your answer below...
								<br />
								<br />
								<form id="feat-ex">
									<span>
										<input type="radio" name="choice" value="choice-a" />
										<label><code>ReferenceError</code></label>
									</span>
									
									<span>
										<input type="radio" name="choice" value="choice-b" />
										<label><code>'The king of hell is Crowley & his adversary is Lucifer'</code></label>
									</span>

									<span>
										<input type="radio" name="choice" value="choice-c" />
										<label><code>'The king of hell is <strong>undefined</strong> & his adversary is <strong>undefined</strong>'</code></label>
									</span>

									<span>
										<input type="radio" name="choice" value="choice-d" />
										<label><code>TypeError</code></label>
									</span>

									<button className="btn-std mt-4" id="feat-ex-sub">
										<code>Submit</code>
									</button>
								</form>
							</p>
							<aside className="mt-4 confirmation">
							    <p className="no-pad-mar"></p>					    
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
