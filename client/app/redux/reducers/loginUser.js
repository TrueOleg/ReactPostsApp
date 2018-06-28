import * as Const from '../constants';

import {browserHistory} from 'react-router';


const initialState = { results: [] };

export default (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case Const.GET_USER:
            return browserHistory.push('/')
              
        case Const.LOGIN_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
};