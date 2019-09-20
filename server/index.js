import express from 'express';
import {matchRoutes} from 'react-router-config';
import { render } from './utils';
import routes from "../routes";
import {getServerStore} from '../store';

const app = new express();

// 静态资源管理
app.use(express.static('public'));

app.get('*', (req, res) => {

    // 防止不同的用户使用相同 store 的引用
    const store = getServerStore();

    const promises = []; // 当前页面初始加载数据的 promise 集合
    const matchRoutesSet = matchRoutes(routes, req.path);
    matchRoutesSet.forEach(({route}) => {
        if (req.path === route.path) promises.push(
            route.loadData &&
            route.loadData(store)
        );
    });

    Promise.all(promises).then(() => {
        res.end(render(req, store));
    });

});

app.listen(8001, () => {
    console.log('listing port 8001');
});
