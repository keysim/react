import {combineReducers} from 'redux';
import FormReducer from './form-reducer';
import FormDisplay from './form-change-reducer';

const allReducers = combineReducers({
    form:FormReducer
    //formDisplay:FormDisplay
});

export default allReducers;