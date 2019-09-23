import {LIST} from './constants';

const defaultValue = {
    list: []
};

export const translations = (state = defaultValue, action) => {
    switch(action.type) {
        case LIST:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};
