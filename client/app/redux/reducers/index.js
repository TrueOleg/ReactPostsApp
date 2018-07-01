import { combineReducers } from 'redux';
import auth from './loginUser';
import posts from './posts';

const rootReducer = combineReducers({
    auth,
    posts
});

export default rootReducer;