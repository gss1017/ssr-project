import {createStore, applyMiddleware, combineReducers}  from 'redux';
import thunk from 'redux-thunk';
import home from '../containers/Home/store';
import translations from '../containers/Translations/store';
import header from '../components/Header/store';
import clientAxios from '../client/request';
import getServerAxiosInstance from '../server/request';

const rootReducer = combineReducers({
    home,
    header,
    translations
});

export const getClientStore = () => {
    const defaultValue = window.redux_context;
    return createStore(rootReducer, defaultValue, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};

export const getServerStore = (req) => {
    // 通过 withExtraArgument 传递不同端的请求方法
    return createStore(
        rootReducer,
        applyMiddleware(
            thunk.withExtraArgument(
                getServerAxiosInstance(req)
            )
        )
    );
};
