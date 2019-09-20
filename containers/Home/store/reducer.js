import {HOME_LIST} from './constants';

const defaultValue = {
    name: '你好',
    list: []
};

export const home = (state = defaultValue, action) => {
    switch(action.type) {
        case HOME_LIST:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};
