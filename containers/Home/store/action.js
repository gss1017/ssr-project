import axios from 'axios';
import {HOME_LIST} from './constants';

const home_list_action = (data) => ({
    type: HOME_LIST,
    data
});

export const fetch_home_list = () => {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8002/proxy/home_list')
            .then((res) => {
                dispatch(home_list_action({
                    list: res.data
                }));
            });
    };
};
