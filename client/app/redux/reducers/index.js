import { combineReducers } from 'redux';
import auth from './loginUser';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;