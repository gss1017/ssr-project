import {createStore, applyMiddleware, combineReducers}  from 'redux';
import thunk from 'redux-thunk';
import home from '../containers/Home/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const rootReducer = combineReducers({
    home
});

export const getClientStore = () => {
    const defaultValue = window.redux_context;
    return createStore(rootReducer, defaultValue, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};

export const getServerStore = () => {
    // 通过 withExtraArgument 传递不同端的请求方法
    return createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
};
