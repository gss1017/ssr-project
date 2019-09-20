import React from 'react';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Loginss from '../containers/Loginss'

export default [
    {
        path: '/',
        key: 'home',
        component: Home,
        exact: true, // 严格匹配
        loadData: Home.loadData
    },
    {
        path: '/login',
        key: 'login',
        component: Login
    }
];
