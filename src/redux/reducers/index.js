import { combineReducers } from 'redux';
import hotels from './hotels';
import filters from './filters';

export default combineReducers({
    hotels,
    filters
});
