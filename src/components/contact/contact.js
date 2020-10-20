import React, { Component, useState, useEffect } from 'react';
import Field from '../__global/form_elements/field';

const Contact = () => {

	const fields = [
		{label: 'Full Name', name: 'name', elementName: 'input', 'type': 'text', placeholder: 'Arnold Saucemaker'},
		{label: 'Email', name: 'email', elementName: 'input', 'type': 'email', placeholder: 'Arnold@Saucemaker.com'},
		{label: 'Message', name: 'message', elementName: 'textarea', 'type': 'text', placeholder: 'Get to the chopper...'},
	];

	const [form_state, set_form_state] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handle_submit = (e) => {
		e.preventDefault();
		console.log('Form submitted!', form_state);
	}

	return (
			<section className="sec-block text-left" id="home-contact">
				<div className="container py-5">
					<h1>Contact</h1>

					<div className="content-wrap">
						<form onSubmit={handle_submit}>
							{
								fields.map((el, idx) => {
									return <Field 
										{...el} 
										key={idx} 
										value={form_state[el.name]} 
										onChange={e => set_form_state({...form_state, [el.name]: e.target.value})} />
								})
							}
							<button className="btn-std mt-4">
								<code>Send Message</code>
							</button>
						</form>
					</div>
					
				</div>
			</section>
		)
}

export default Contact;