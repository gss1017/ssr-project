import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';

export const render = (req, routes, store) => {

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
    const redux_context = JSON.stringify(store.getState());

    return (
        `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>srr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.redux_context = ${redux_context}; 
                </script>
                <script src="/index.js"></script>
            </body>
        </html>
        `
    );

};
