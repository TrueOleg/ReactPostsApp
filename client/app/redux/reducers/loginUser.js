import * as Const from '../constants';
import * as Token from '../../servises/Token';

import {browserHistory} from 'react-router';



const initialState = { user: { isAuthenticated: false } };

export default (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        
        case Const.LOGIN_HAS_ERRORED:
            return action.hasErrored;

        case Const.IS_LOGIN:
            return { ...state, user: { ...state.user, isAuthenticated: true }};
            
        
        default:
            return state;
    }
};