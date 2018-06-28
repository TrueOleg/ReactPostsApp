import axios from 'axios';

import Api from '../../servises/Api';
import * as Const from '../constants';

export const loginHasErrored = (data) => {
    return {
        type: Const.LOGIN_HAS_ERRORED,
        hasErrored: data
    };
  };

export const getUser = (data) => {
    return {
        type: Const.GET_USER,
        data: data
    };
  };

export const logInUser = (data) => {
    return (dispatch) => {
        const URL = Const.URL_LOGIN;
        Api.post({URL}, data)
            .then((response) => {

                if (!response) {

                    throw Error(response.statusText);
                }
                
                dispatch(getUser(response.data));

            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
  };