import React, { Component } from 'react';

export default class Loader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<section className="sec-block text-center" id="global-spinner">
				<div className='container'>
					<h1>Loading...</h1>
				</div>
			</section>
		)
	}
}