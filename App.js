import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import {getIsLogin} from "./components/Header/store/action";

const App = (props) => {
    return (
        <div>
            <Header {...props}/>
            {renderRoutes(props.route.routes)}
        </div>
    );
};

App.loadData = (store) => {
    // 获取登录状态
    return store.dispatch(getIsLogin());
};

export default App;
