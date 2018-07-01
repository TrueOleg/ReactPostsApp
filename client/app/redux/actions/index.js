
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
        
        Api.post(`${Const.URL}/singin`, data)
            .then(res => {
               
                dispatch(isLogin(res.data));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};

export const registrationUser = (data) => {
    return (dispatch) => {

        Api.post(`${Const.URL}/singup`, data)
            .then(res => {
                console.log('res', res);
                dispatch(isLogin(res.data));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};

export const saveMyPosts = (posts) => {
    return {
        type: Const.SAVE_MY_POSTS,
        posts
    };
};  

export const getMyPosts = () => {
    return (dispatch) => {
        
        Api.get(`${Const.URL}/posts/my`)
            .then(res => {
                
                dispatch(saveMyPosts(res.data.posts));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};

export const saveFriendsPosts = (posts) => {
    return {
        type: Const.SAVE_FRIENDS_POSTS,
        posts
    };
};  

export const getFriendsPosts = () => {
    return (dispatch) => {
        
        Api.get(`${Const.URL}/posts/friends`)
            .then(res => {
                console.log('res', res);
                dispatch(saveFriendsPosts(res.data.posts));
            })
            .catch(() => dispatch(loginHasErrored(true)));
    };
};
