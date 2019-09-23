import {HOME_LIST} from './constants';

const home_list_action = (data) => ({
    type: HOME_LIST,
    data
});

export const fetch_home_list = (server) => {
    return (dispatch, getState, Api) => {
        return Api.get('/home_list')
            .then((res) => {
                dispatch(home_list_action({
                    list: res.data
                }));
            }, (err) => {
                console.log(err);
                //
            });
    };
};
