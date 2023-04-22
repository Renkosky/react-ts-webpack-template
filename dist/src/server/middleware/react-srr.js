"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var _index = _interopRequireDefault(require("../../client/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = function _default(ctx, next) {
  var htmlString = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  var app = '';
  var htmlStream = (0, _server.renderToNodeStream)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  var htmlTempalte = '';
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
  ctx.body = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>my react ssr</title>\n    </head>\n    <body>\n        <div id=\"root\">\n           ".concat(htmlString, " <span>\u6D4B\u8BD5\u5185\u5BB9</span>\n        </div>\n    </body>\n    </html><script type=\"text/javascript\"  src=\"index.js\"></script>\n    ");
  return next();
};
exports.default = _default;