const initialState = {
	dom_data: null
}

const dom_elements_reducer = (state = initialState, action) => {	
	switch (action.type) {
		case 'DASH_REF':		
		return {
			...state,
			dom_data: action.payload,			
		}
		default:
		return state;
	}
}

export default dom_elements_reducer;