import React, { Component, useState, useEffect } from 'react';

const Field = (props) => {
	return (
		props.elementName === 'input' ?
			<span>
				<label>{props.label}<sup>*</sup></label>
				<input 
					type={props.type} 
					name={props.name} 
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
				/>
			</span> 
		:
			<span>
				<label>{props.label}<sup>*</sup></label>
				<textarea 
					name={props.name} 
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
				/>
			</span>
	)
}

export default Field;