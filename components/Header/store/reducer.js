import {IS_LOGIN} from './constants';

const defaultValue = {
    isLogin: false,
};

export const header = (state = defaultValue, action) => {
    switch(action.type) {
        case IS_LOGIN:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};
