import React from 'react';
import { renderToNodeStream, renderToString } from 'react-dom/server';
import Index from '../../client/index';
export default (ctx, next) => {
    const htmlString = renderToString(<Index />);
    let app = '';
    const htmlStream = renderToNodeStream(<Index />);
    const htmlTempalte = '';
    // htmlStream.on('data', function (chunk) {
    //     console.log(chunk.toString(), '---chunk');
    //     app += chunk.toString();
    //         htmlTempalte = `<!DOCTYPE html>
    //         <html lang="en">
    //                <head>
    //                  <meta charset="UTF-8">
    //                 <title>my react ssr</title>
    //             </head>
    //             <body>
    //                 <div id="root">
    //                 ${app} <span>测试内容</span>
    //                 </div>
    //                 <script type="text/javascript"  src="index.js"></script>
    //             </body>
    //         </html>
    // `;
    // });
    ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
    </head>
    <body>
        <div id="root">
           ${htmlString} <span>测试内容</span>
        </div>
    </body>
    </html><script type="text/javascript"  src="index.js"></script>
    `;

    return next();
};
