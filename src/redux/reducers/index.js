import {combineReducers} from 'redux';
import dom_elements_reducer from './dom_elements_reducer.js';

const root_reducer = combineReducers({	
	dom_redu: dom_elements_reducer
});

export default root_reducer;