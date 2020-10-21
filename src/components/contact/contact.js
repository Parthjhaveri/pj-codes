import React, { Component, useState, useEffect } from 'react';
import InputField from '../__global/form_elements/field';

// FORMIK & YUP
import { withFormik, useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Contact = () => {

	const fields = [
		{label: 'Full Name', id: 'name', name: 'name', elementName: 'input', 'type': 'text', placeholder: 'Arnold Saucemaker'},
		{label: 'Email', id: 'email', name: 'email', elementName: 'input', 'type': 'email', placeholder: 'Arnold@Saucemaker.com'},
		{label: 'Message', id: 'message', name: 'message', elementName: 'textarea', 'type': 'text', placeholder: 'Get to the chopper...'},
	];

	// FORMIK INITIALIZATION
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: yup.object().shape({
			name: yup.string().required('Name required!'),
	  		email: yup.string().email('Make sure email is valid!').required('Email required!'),
	  		message: yup.string().min(100, 'Please send a more detailed message!').required('Message required!')
		}),
		onSubmit: values => {
			console.log('VALUES- ', values);
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
										touched={formik.touched[el.name]}
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