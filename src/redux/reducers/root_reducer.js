import auth_reducer from './auth_reducer.js';
import project_reducer from './project_reducer.js';
import dom_elements_reducer from './dom_elements_reducer.js';
import { combineReducers } from 'redux';

const root_reducer = combineReducers({
	auth: auth_reducer,
	project: project_reducer,
	dom_elements: dom_elements_reducer
});

export default root_reducer;