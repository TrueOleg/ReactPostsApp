import { combineReducers } from 'redux';
import auth from './loginUser';
import posts from './posts';
import users from './users';

const rootReducer = combineReducers({
    auth,
    posts,
    users
});

export default rootReducer;