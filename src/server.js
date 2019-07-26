import * as React from 'react';

import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';
import {render} from 'app';
import {Router} from 'express';

import {pageTemplate} from 'pageTemplate';

export default function createMiddleware({assets}) {

    async function renderHtml(req) {

        let context = {};
        let content = renderToString(
           <StaticRouter
               location={req.url}
               context={context}
           >
               {render()}
           </StaticRouter>
        );

        return pageTemplate({
            css: assets.main.css,
            js: assets.main.js,
            content,
        });
    }

    function serverMiddleware(req, res, next) {
        renderHtml(req, res)
            .then((content) => {
                res.send(content);
            })
            .catch((err) => {
                res.status(500).json({
                    message: err.message,
                    stack: err.stack
                });
            });
    }

    let appRouter = new Router();

    // Other routes
    appRouter.get('/*', serverMiddleware);

    return appRouter;
}
