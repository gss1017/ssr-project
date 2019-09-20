import {createStore, applyMiddleware, combineReducers}  from 'redux';
import thunk from 'redux-thunk';
import home from '../containers/Home/store';

const rootReducer = combineReducers({
    home
});

export const getClientStore = () => {
    const defaultValue = window.redux_context;
    return createStore(rootReducer, defaultValue, applyMiddleware(thunk));
};

export const getServerStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};
