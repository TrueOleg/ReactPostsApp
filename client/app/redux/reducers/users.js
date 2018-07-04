import * as Const from '../constants';

const initialState = [];

export default (state = initialState, action) => {
    const { type, data } = action;
    
    switch (type) {
        
        case Const.SAVE_USERS:
            
            return { ...state, data };
            
        default:
            return state;
    }
};