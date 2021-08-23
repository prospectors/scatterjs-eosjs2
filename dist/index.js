"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_core=require("@scatterjs/core"),socketService=_core.SocketService,proxy=function(a,b){return new Proxy(a,b)},cache={},ScatterEOS=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2["default"])(this,b),(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(b).call(this,_core.Blockchains.EOS,_core.PluginTypes.BLOCKCHAIN_SUPPORT))}return(0,_inherits2["default"])(b,a),(0,_createClass2["default"])(b,[{key:"setSocketService",value:function setSocketService(a){socketService=a}},{key:"hookProvider",value:function hookProvider(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return a=_core.Network.fromJson(a),{requiredFields:{},getAvailableKeys:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,socketService.sendApiRequest({type:"identityFromPermissions",payload:{}}).then(function(a){return a?a.accounts.filter(function(a){return a.blockchain===_core.Blockchains.EOS}).map(function(a){return a.publicKey}):[]});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop();}},a)}));return function getAvailableKeys(){return a.apply(this,arguments)}}(),sign:function(){var c=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function c(d){var e;return _regenerator["default"].wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=b?b():{},d.serializedTransaction=Buffer.from(d.serializedTransaction).toString("hex"),c.abrupt("return",new Promise(/*#__PURE__*/function(){var b=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function b(c,f){return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:socketService.sendApiRequest({type:"requestSignature",payload:{transaction:d,blockchain:_core.Blockchains.EOS,network:a,requiredFields:e}}).then(function(a){c({signatures:a.signatures,serializedTransaction:Buffer.from(d.serializedTransaction,"hex")})})["catch"](function(a){return f(a)});case 1:case"end":return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}()));case 3:case"end":return c.stop();}},c)}));return function sign(){return c.apply(this,arguments)}}()}}},{key:"multiHook",value:function multiHook(a,b){var c=this.eosHook(a);return Array.isArray(b)||(b=[b]),{getAvailableKeys:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){var d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.getAvailableKeys();case 3:return d=a.sent,e=[],a.next=7,Promise.all(b.map(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.getAvailableKeys().then(function(a){a.map(function(a){return e.push(a)})});case 2:return a.abrupt("return",!0);case 3:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()));case 7:return a.abrupt("return",d.concat(e));case 10:throw a.prev=10,a.t0=a["catch"](0),new Error(a.t0);case 13:case"end":return a.stop();}},a,null,[[0,10]])}));return function getAvailableKeys(){return a.apply(this,arguments)}}(),sign:function(){var d=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function d(e){var f,g,h,i,j;return _regenerator["default"].wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,f=Buffer.from(e.serializedTransaction,"hex"),g=/*#__PURE__*/function(){var b=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function b(c){return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.t0=e.abis,b.t1=a.chainId,b.next=4,c.getAvailableKeys();case 4:return b.t2=b.sent,b.t3=f,b.abrupt("return",{abis:b.t0,chainId:b.t1,requiredKeys:b.t2,serializedTransaction:b.t3});case 7:case"end":return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}(),h=function(a){return"object"===(0,_typeof2["default"])(a)&&a.hasOwnProperty("signatures")?a.signatures:a},d.t0=c,d.next=7,g(c);case 7:return d.t1=d.sent,d.t2=function(a){return h(a)},d.next=11,d.t0.sign.call(d.t0,d.t1).then(d.t2);case 11:return i=d.sent,j=[],d.next=15,Promise.all(b.map(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=b,a.next=3,g(b);case 3:return a.t1=a.sent,a.t2=function(a){h(a).map(function(a){return j.push(a)})},a.next=7,a.t0.sign.call(a.t0,a.t1).then(a.t2);case 7:return a.abrupt("return",!0);case 8:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()));case 15:return d.abrupt("return",{signatures:i.concat(j),serializedTransaction:f});case 18:throw d.prev=18,d.t3=d["catch"](0),new Error(d.t3);case 21:case"end":return d.stop();}},d,null,[[0,18]])}));return function sign(){return d.apply(this,arguments)}}()}}},{key:"signatureProvider",value:function signatureProvider(){var a=this,b=0>=arguments.length?void 0:arguments[0];// Protocol will be deprecated.
return function(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};b=_core.Network.fromJson(b);var e={},f=function(){return e},g=a.hookProvider(b,f);// The proxy stands between the eosjs object and scatter.
// This is used to add special functionality like adding `requiredFields` arrays to transactions
return proxy(new c(Object.assign(d,{signatureProvider:g})),{get:function get(a,b){return function(){if("undefined"==typeof a[b])throw new Error("".concat(b," does not exist on the eosjs.Api() object."));for(var c=arguments.length,d=Array(c),f=0;f<c;f++)d[f]=arguments[f];var g=d.find(function(a){return a.hasOwnProperty("requiredFields")});return e=g?g.requiredFields:{},a[b].apply(a,d)}}});// Proxy
}}}]),b}(_core.Plugin);exports["default"]=ScatterEOS,"undefined"!=typeof window&&(window.ScatterEOS=ScatterEOS);