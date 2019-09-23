import {IS_LOGIN} from './constants';

const createIsLoginAction = (data) => ({
    type: IS_LOGIN,
    data
});
export const getIsLogin = () => {
    return (dispatch, getState, Api) => {
        return Api.get('/get_login_status')
            .then((res) => {
                if (res.data.success) {
                    dispatch(createIsLoginAction({
                        isLogin: res.data.data
                    }));
                }
            }, (err) => {
                console.error(err);
            });
    }
};

export const login = () => {
    return (dispatch, getState, Api) => {
        return Api.get('/login')
            .then((res) => {
                if (res.data.success) {
                    dispatch(createIsLoginAction({
                        isLogin: res.data.data
                    }));
                }
            }, (err) => {
                console.error(err);
            });
    }
};

export const signOut = () => {
    return (dispatch, getState, Api) => {
        return Api.get('/sign_out')
            .then((res) => {
                if (res.data.success) {
                    dispatch(createIsLoginAction({
                        isLogin: res.data.data
                    }));
                }
            }, (err) => {
                console.error(err);
            });
    }
};
