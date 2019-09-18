import express from 'express';
import React from 'react';
import Home from './containers/Home/index';
import ReactDOMServer from 'react-dom/server';

const app = new express();
const content = ReactDOMServer.renderToString(<Home />);

app.get('/', (req, res) => {
    res.end(
        `
        <html>
            <head>
                <title>srr</title>
            </head>
            <body>
                <div>${content}</div>
            </body>
        </html>
        `
    );
});

app.listen(8001, () => {
    console.log('listing port 8001');
});
