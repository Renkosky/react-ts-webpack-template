const { spawn } = require('child_process');
const constantCode = require('./constant');
const chalk = require('chalk'); //为控制台输出的信息增加点色彩
const log = console.log;
const proConfig = require('../../src/share/pro-config'); //双端的配置文件，配置一些基础参数

//node server port
const nodeServerPort = proConfig.nodeServerPort;
//'inherit'：通过相应的标准输入输出流传入/传出父进程。 在前三个位置，这分别相当于 process.stdin、process.stdout 和 process.stderr。 在任何其他位置，相当于 'ignore'。
console.log(chalk.red('servcers statring...'));

//前端代码构建 服务进程
/**
 * span
 * command <string> 要运行的命令。
 * args <string[]> 字符串参数列表。
 * options stdio 子进程的标准输入输出配置
 * child_process.spawn() 方法使用给定的 command 和 args 中的命令行参数衍生新进程。 如果省略，args 默认为空数组。
 */

const feCodeWacthProcess = spawn('npm', ['run', 'fe:watch'], { stdio });

//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);

//node 服务进程
let nodeServerProcess = null;
//启动 node 服务
const startNodeServer = () => {
    //重启 node 服务
    nodeServerProcess && nodeServerProcess.kill();
    nodeServerProcess = spawn('node', ['./webpack/scripts/svr-dev-server.js']);
    nodeServerProcess.stdout.on('data', print);
};
