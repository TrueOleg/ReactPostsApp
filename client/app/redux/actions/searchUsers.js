import debounceAction from 'debounce-action';

import * as Api from '../../servises/Api';
import * as Const from '../constants';

export const errored = (data) => {
    return {
        type: Const.SAVE_MY_POSTS,
        data
    };
};  

export const searchUsers = (data) => {
    return (dispatch) => {

        Api.get(`${Const.URL}/users?char=${data}`)
            .then(res => {
                console.log('res', res);
                
            })
            .catch(() => dispatch(errored(true)));
    };
};

export const searchUsersDebounced = debounceAction(searchUsers, 1000);