import express from 'express';
import proxy from 'express-http-proxy';
import {matchRoutes} from 'react-router-config';
import { render } from './utils';
import routes from "../routes";
import {getServerStore} from '../store';

const app = new express();

// 静态资源管理
app.use(express.static('public'));

app.use('/proxy', proxy('localhost:8002', {
    proxyReqPathResolver: function (req) {
        return req.url;
    }
}));

app.get('*', (req, res) => {

    // 防止不同的用户使用相同 store 的引用
    const store = getServerStore(req);

    const promises = []; // 当前页面初始加载数据的 promise 集合
    const matchRoutesSet = matchRoutes(routes, req.path);
    matchRoutesSet.forEach(({route}) => {
        route.loadData && promises.push(
            route.loadData(store)
        );
    });

    Promise.all(promises).then(() => {
        const context = {};
        const html = render(req, routes, store, context);
        console.log(context);
        if (context.NOT_FOUND) {
            res.status(404);
            res.end(html);
        } else {
            res.end(html);
        }
    });

});

app.listen(8001, () => {
    console.log('listing port 8001');
});
