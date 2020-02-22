import React, { Component } from 'react';
import footerlogo from '../../images/logo-white.png';

export default class Footer extends React.Component {
	constructor (props) {
		super(props);

		this.state = {}

	}

	componentDidMount() {}

	render() {
		return (
			<footer className="sec-block">
				<div className="container-fluid text-center py-4">
					<code>Designed, developed and broken a thousand times by Parth J. in the year 2019 A.D.</code>
					<img src={footerlogo} alt="PJ Codes logo" className="mt-5" />
				</div>
			</footer>
		)
	}
}

