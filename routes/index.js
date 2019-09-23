import React from 'react';
import App from '../App';
import Home from '../containers/Home'
import Translations from '../containers/Translations'

export default [
    {
        component: App,
        loadData: App.loadData,
        routes: [
            {
                path: '/',
                key: 'home',
                component: Home,
                exact: true, // 严格匹配
                loadData: Home.loadData
            },
            {
                path: '/translations',
                key: 'translations',
                component: Translations,
                loadData: Translations.loadData
            }
        ]
    }
];
