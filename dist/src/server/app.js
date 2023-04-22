"use strict";

var ssr = require('./middleware/react-srr').default;
var Koa = require('koa2');
var koaStatic = require('koa-static');
var path = require('path');
var app = new Koa();

//设置可访问的静态资源，我们把 webpack 打包后的代码放到/dist/static目录下
app.use(koaStatic(path.join(__dirname, './dist/static')));

//react ssr 中间件
app.use(ssr);

//启动服务
app.listen(9002);
console.log('server is start .9001');