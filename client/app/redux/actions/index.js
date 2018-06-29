
import * as Api from '../../servises/Api';
import * as Const from '../constants';


export const loginHasErrored = (data) => {
    return {
        type: Const.LOGIN_HAS_ERRORED,
        hasErrored: data
    };
};

export const isLogin = (data) => {
    return {
        type: Const.IS_LOGIN,
        data: data
    };
};  

export const logInUser = (data) => {
    return (dispatch) => {
        const URL = Const.URL_LOGIN;
        Api.post(`${URL}`, data)
            .then(res => {
                console.log('res', res);
                dispatch(isLogin(res.data));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};

export const registrationUser = (data) => {
    return (dispatch) => {
        const URL = Const.URL_REGISTRATION;
        Api.post(`${URL}`, data)
            .then(res => {
                console.log('res', res);
                dispatch(isLogin(res.data));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};
