const webpack = require('webpack');
const config = require('../webpack.server.config');
const constantCode = require('./constant');
const webpackProdConfig = require('../webpack.prod');
config.mode = 'development';

// Compiler 支持可以监控文件系统的 监听(watching) 机制，并且在文件修改时重新编译。
// 当处于监听模式(watch mode)时， compiler 会触发诸如 watchRun, watchClose 和 invalid 等额外的事件。 通常在 开发环境 中使用，
// 也常常会在 webpack-dev-server 这些工具的底层调用， 由此开发人员无须每次都使用手动方式重新编译。 还可以通过 CLI 进入监听模式。

const compiler = webpack(config);
const watching = compiler.watch(
    {
        aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
        ignored: /node_modules/, //排除文件
        poll: 2000 //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
    },
    (err, stats) => {
        let json = stats.toJson('minimal');
        if (json.errors) {
            json.errors.forEach((item) => {
                console.log(item);
            });
        }
        if (json.warnings) {
            json.warnings.forEach((item) => {
                console.log(item);
            });
        }
        //定一个常量，编译完成后 通知主进程来重启node 服务，主进程通过此标志来进行判断是否重启
        console.log(constantCode.SVRCODECOMPLETED);
    }
);

compiler.hooks.done.tap('done', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});
//stdin 标准输入流
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});
