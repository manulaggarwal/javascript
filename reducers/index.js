import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducer({
    todos,
    visibilityFilter
})
export default todoApp;