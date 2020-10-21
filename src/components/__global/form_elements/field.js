import React, { Component, useState, useEffect } from 'react';

// IMPORT NOTIFICATIONS
import Notification_standard from '../notifications/notif-std';

const InputField = (props) => {
	
	return (
		<aside>
			{
				props.elementName === 'input' ?
				<span>
					<label>{props.label}<sup>*</sup></label>
					<input 
						type={props.type} 
						name={props.name} 
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						onBlur={props.onBlur}
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
						onBlur={props.onBlur}
					/>
				</span>
			}

			{ 
				props.errors ? 
				<Notification_standard 
					message={props.errors}
					notif_type='error-notification' // error-, success-, regular-
				/> : 
				''
			}
		</aside>
	)
}

export default InputField;