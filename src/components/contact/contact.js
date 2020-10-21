import React, { Component, useState, useEffect } from 'react';
import InputField from '../__global/form_elements/field';

// FORMIK
import { withFormik, useFormik, Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {

	const fields = [
		{label: 'Full Name', id: 'name', name: 'name', elementName: 'input', 'type': 'text', placeholder: 'Arnold Saucemaker'},
		{label: 'Email', id: 'email', name: 'email', elementName: 'input', 'type': 'email', placeholder: 'Arnold@Saucemaker.com'},
		{label: 'Message', id: 'message', name: 'message', elementName: 'textarea', 'type': 'text', placeholder: 'Get to the chopper...'},
	];

	const validate = values => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Name Required!';
		}

		if (!values.email) {
		    errors.email = 'Email Required!';
	   	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		    errors.email = 'Invalid email address';
	    }

		if (!values.message) {
			errors.message = 'Message Required!';
		}

		return errors;
	}

	// FORMIK INITIALIZATION
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validate,
		onSubmit: values => {
			console.log('VALUES ', values);
		}
	});

	return (
			<section className="sec-block text-left" id="home-contact">
				<div className="container py-5">
					<h1>Contact</h1>

					<div className="content-wrap">
						<form onSubmit={formik.handleSubmit}>
							{
								fields.map((el, idx) => {
									return <InputField 
										{...el} 
										key={idx} 
										onChange={formik.handleChange}
										value={formik.values[el.name]}
										errors={formik.errors[el.name]}
										name={el.name}
										onBlur={formik.handleBlur}
									/>
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