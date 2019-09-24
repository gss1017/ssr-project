import {HOME_LIST} from './constants';

const homeListAction = (data) => ({
    type: HOME_LIST,
    data
});

export const fetchHomeList = () => {
    return (dispatch, getState, Api) => {
        return Api.get('/home_list')
            .then((res) => {
                dispatch(homeListAction({
                    list: res.data.data
                }));
            }, (err) => {
                console.error(err.stack);
                throw err;
            });
    };
};
