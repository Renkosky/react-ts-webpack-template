"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//client/app/index.js
//浏览器端页面结构渲染入口

//渲染index 组件
_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_index.default, null), document.getElementById('root'));

//React 的事件绑定，在服务端渲染时，并不会以 <div onclick="xxx" /> 这种内联事件形态出现。所以，ReactDOMServer 渲染的内容在「结构-样式-行为」铁三角关系里，缺失了「行为」
// 2）在 React v15 版本里，ReactDOM.render 方法可以根据 data-react-checksum 的标记，复用 ReactDOMServer 的渲染结果，不重复渲染，而是根据 data-reactid 属性，找到需要绑定的事件元素，进行事件绑定的处理。补完「结构-样式-行为」。
// 3）在 React v16 版本里，ReactDOMServer 渲染的内容不再有 data-react 的属性，而是尽可能复用 SSR 的 HTML 结构。这就带来了一个问题，ReactDOM.render 不再能够简单地用 data-react-checksum 的存在性来判断是否应该尝试复用，如果每次 ReactDOM.render 都要尽可能尝试复用，性能和语义都会出现问题。所以， ReactDOM 提供了一个新的 API， ReactDOM.hydrate() 。

//hydrate 描述的是 ReactDOM 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 特有内容的过程。
//过程就叫hydrate，有时候也会说re-hydrate
//可以把hydrate理解成给干瘪的字符串”注水”