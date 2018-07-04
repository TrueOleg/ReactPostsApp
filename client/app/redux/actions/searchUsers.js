import debounceAction from 'debounce-action';

import * as Api from '../../servises/Api';
import * as Const from '../constants';

export const errored = (data) => {
    return {
        type: Const.SAVE_MY_POSTS,
        data
    };
};  

export const saveUsers = (data) => {
    return {
        type: Const.SAVE_USERS,
        data
    };
}; 

export const clearUsers = () => {
    return {
        type: Const.CLEAR_USERS,
    };
}; 

export const searchUsers = (data) => {
    return (dispatch) => {
        if (data === '') {
            dispatch(clearUsers());
        } else {
            Api.get(`${Const.URL}/users?char=${data}`)
                .then(res => {
                    console.log('res', res.data.users);
                    dispatch(saveUsers(res.data.users));
                })
                .catch(() => dispatch(errored(true)));
        }
    };
};

export const searchUsersDebounced = debounceAction(searchUsers, 1000);

export const subscribe = (id) => {
    return (dispatch) => {
        
            Api.post(`${Const.URL}/followers?id=${id}`)
                .then(res => {
                    console.log('res', res.data.users);
                    
                })
                .catch(() => dispatch(errored(true)));
        
    };
};

export const unsubscribe = (id) => {
    return (dispatch) => {
        
            Api.del(`${Const.URL}/followers?id=${id}`)
                .then(res => {
                    console.log('res', res.data.users);
                    
                })
                .catch(() => dispatch(errored(true)));
        
    };
};