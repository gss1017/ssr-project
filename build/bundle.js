/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Home'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'Login'\n        )\n    );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./components/Header/index.js?");

/***/ }),

/***/ "./containers/Home/index.js":
/*!**********************************!*\
  !*** ./containers/Home/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _action = __webpack_require__(/*! ./store/action */ \"./containers/Home/store/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n    _inherits(Home, _Component);\n\n    function Home() {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n    }\n\n    _createClass(Home, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var list = this.props.list;\n            //防止客户端重复请求\n\n            if (!list.length) this.props.getHomeList();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Header2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    'hello world ',\n                    this.props.name\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        'Home List'\n                    ),\n                    this.props.list.map(function (item) {\n                        return _react2.default.createElement(\n                            'div',\n                            { key: item.hotelId },\n                            item.address\n                        );\n                    })\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            window.alert(2);\n                        }\n                    },\n                    'click'\n                )\n            );\n        }\n    }], [{\n        key: 'loadData',\n        value: function loadData(store) {\n            // 给服务端的 store 中注入数据\n            return store.dispatch((0, _action.fetch_home_list)());\n        }\n    }]);\n\n    return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.home.name,\n        list: state.home.list\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getHomeList: function getHomeList() {\n            dispatch((0, _action.fetch_home_list)());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./containers/Home/index.js?");

/***/ }),

/***/ "./containers/Home/store/action.js":
/*!*****************************************!*\
  !*** ./containers/Home/store/action.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.fetch_home_list = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./containers/Home/store/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar home_list_action = function home_list_action(data) {\n    return {\n        type: _constants.HOME_LIST,\n        data: data\n    };\n};\n\nvar fetch_home_list = exports.fetch_home_list = function fetch_home_list() {\n    return function (dispatch) {\n        return _axios2.default.get('http://127.0.0.1:5555/home_list').then(function (res) {\n            dispatch(home_list_action({\n                list: res.data\n            }));\n        });\n    };\n};\n\n//# sourceURL=webpack:///./containers/Home/store/action.js?");

/***/ }),

/***/ "./containers/Home/store/constants.js":
/*!********************************************!*\
  !*** ./containers/Home/store/constants.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar HOME_LIST = exports.HOME_LIST = 'HOME_LIST';\n\n//# sourceURL=webpack:///./containers/Home/store/constants.js?");

/***/ }),

/***/ "./containers/Home/store/index.js":
/*!****************************************!*\
  !*** ./containers/Home/store/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./containers/Home/store/reducer.js\");\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _reducer.home;\n  }\n});\n\n//# sourceURL=webpack:///./containers/Home/store/index.js?");

/***/ }),

/***/ "./containers/Home/store/reducer.js":
/*!******************************************!*\
  !*** ./containers/Home/store/reducer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.home = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./containers/Home/store/constants.js\");\n\nvar defaultValue = {\n    name: '你好',\n    list: []\n};\n\nvar home = exports.home = function home() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultValue;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constants.HOME_LIST:\n            return _extends({}, state, action.data);\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./containers/Home/store/reducer.js?");

/***/ }),

/***/ "./containers/Login/index.js":
/*!***********************************!*\
  !*** ./containers/Login/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'Login'\n        )\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./containers/Login/index.js?");

/***/ }),

/***/ "./containers/Loginss/index.js":
/*!*************************************!*\
  !*** ./containers/Loginss/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'Loginssbbb'\n        )\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./containers/Loginss/index.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ../containers/Home */ \"./containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ../containers/Login */ \"./containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Loginss = __webpack_require__(/*! ../containers/Loginss */ \"./containers/Loginss/index.js\");\n\nvar _Loginss2 = _interopRequireDefault(_Loginss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n    path: '/',\n    key: 'home',\n    component: _Home2.default,\n    exact: true, // 严格匹配\n    loadData: _Home2.default.loadData\n}, {\n    path: '/login',\n    key: 'login',\n    component: _Login2.default\n}];\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./server/utils.js\");\n\nvar _routes = __webpack_require__(/*! ../routes */ \"./routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _store = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _express2.default();\n\n// 静态资源管理\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n\n    // 防止不同的用户使用相同 store 的引用\n    var store = (0, _store.getServerStore)();\n\n    var promises = []; // 当前页面初始加载数据的 promise 集合\n    var matchRoutesSet = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n    matchRoutesSet.forEach(function (_ref) {\n        var route = _ref.route;\n\n        if (req.path === route.path) promises.push(route.loadData && route.loadData(store));\n    });\n\n    Promise.all(promises).then(function () {\n        res.end((0, _utils.render)(req, store));\n    });\n});\n\napp.listen(8001, function () {\n    console.log('listing port 8001');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _routes = __webpack_require__(/*! ../routes */ \"./routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, store) {\n\n    var content = _server2.default.renderToString(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.url, context: {} },\n            (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n        )\n    ));\n    var redux_context = JSON.stringify(store.getState());\n\n    return '\\n        <html>\\n            <head>\\n                <meta charset=\"UTF-8\">\\n                <title>srr</title>\\n            </head>\\n            <body>\\n                <div id=\"root\">' + content + '</div>\\n                <script>\\n                    window.redux_context = ' + redux_context + '; \\n                </script>\\n                <script src=\"/index.js\"></script>\\n            </body>\\n        </html>\\n        ';\n};\n\n//# sourceURL=webpack:///./server/utils.js?");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getServerStore = exports.getClientStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./containers/Home/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n    home: _store2.default\n});\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    var defaultValue = window.redux_context;\n    return (0, _redux.createStore)(rootReducer, defaultValue, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\nvar getServerStore = exports.getServerStore = function getServerStore() {\n    return (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\n//# sourceURL=webpack:///./store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });