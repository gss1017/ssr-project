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
        // 总是返回正确的promise，请求出错使用默认的数据
        const promise = new Promise((resolve) => {
            if (route.loadData) {
                route.loadData(store).then(resolve).catch(resolve);
            } else {
                resolve();
            }
        });
        promises.push(promise);
    });

    Promise.all(promises).then(() => {
        const context = {
            css: []
        };
        const html = render(req, routes, store, context);
        if (context.NOT_FOUND) {
            res.status(404);
            res.end(html);
        } else if (context.action === 'REPLACE') {
            res.redirect(301, context.url);
        } else {
            res.end(html);
        }
    });

});

app.listen(8001, () => {
    console.log('listing port 8001');
});
