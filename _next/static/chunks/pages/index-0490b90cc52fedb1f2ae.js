_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return g})),n.d(t,"bindActionCreators",(function(){return f})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var u=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function b(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),l=null}}}function g(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=u(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){(0,t[n])()}return e}function y(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,g({type:i.REPLACE})}function v(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return g({type:i.INIT}),(o={dispatch:g,subscribe:h,getState:b,replaceReducer:y})[r.a]=v,o}function u(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<c.length;i++){var s=c[i],l=n[s],f=e[s],d=l(f,t);if("undefined"===typeof d){var p=u(s,t);throw new Error(p)}o[s]=d,r=r||d!==f}return(r=r||c.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"===typeof e)return l(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=l(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return b({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},B5Ud:function(e,t,n){"use strict";var r=n("vJKn"),o=n("1ccW"),i=n("/GRZ"),a=n("i2R6"),c=n("48fX"),u=n("tCBg"),s=n("T0f4"),l=n("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var d=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var p=d(n("q1tI")),b=n("g/15");function h(e){return g.apply(this,arguments)}function g(){return(g=l(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,b.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=b.AppInitialProps,t.NextWebVitalsMetric=b.NextWebVitalsMetric;var y=function(e){c(n,e);var t=f(n);function n(){return i(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,i=e.__N_SSG,a=e.__N_SSP;return p.default.createElement(n,o({},r,i||a?{}:{url:v(t)}))}}]),n}(p.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("q1tI"),a=n.n(i),c=n("lSNA"),u=n.n(c),s=n("QILm"),l=n.n(s),f=(n("17x9"),a.a.createContext(null));var d=function(e){e()},p={notify:function(){}};function b(){var e=d,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var h=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=p,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=b())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=p)},e}();var g=function(e){var t=e.store,n=e.context,r=e.children,o=Object(i.useMemo)((function(){var e=new h(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=Object(i.useMemo)((function(){return t.getState()}),[t]);Object(i.useEffect)((function(){var e=o.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,c]);var u=n||f;return a.a.createElement(u.Provider,{value:o},r)},y=(n("wx14"),n("zLVn"),n("2mql"),n("TOwV"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect);var v=n("ANjH");function m(){return Object(i.useContext)(f)}function w(e){void 0===e&&(e=f);var t=e===f?m:function(){return Object(i.useContext)(e)};return function(){return t().store}}var O=w();function S(e){void 0===e&&(e=f);var t=e===f?O:w(e);return function(){return t().dispatch}}var j=S(),x=function(e,t){return e===t};function P(e){void 0===e&&(e=f);var t=e===f?m:function(){return Object(i.useContext)(e)};return function(e,n){void 0===n&&(n=x);var r=t(),o=function(e,t,n,r){var o,a=Object(i.useReducer)((function(e){return e+1}),0)[1],c=Object(i.useMemo)((function(){return new h(n,r)}),[n,r]),u=Object(i.useRef)(),s=Object(i.useRef)(),l=Object(i.useRef)(),f=Object(i.useRef)(),d=n.getState();try{o=e!==s.current||d!==l.current||u.current?e(d):f.current}catch(p){throw u.current&&(p.message+="\nThe error may be correlated with this previous error:\n"+u.current.stack+"\n\n"),p}return y((function(){s.current=e,l.current=d,f.current=o,u.current=void 0})),y((function(){function e(){try{var e=s.current(n.getState());if(t(e,f.current))return;f.current=e}catch(p){u.current=p}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),o}(e,n,r.store,r.subscription);return Object(i.useDebugValue)(o),o}}var E,C=P(),T=n("i8i4");E=T.unstable_batchedUpdates,d=E;var _=n("5HXA"),I=n("LvDl");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(v.combineReducers)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"fetch_blogs":case"set_blogs":return k({},e,{},Object(I.keyBy)(n,"fields.slug"));case"fetch_blog":return k({},e,u()({},n.fields.slug,n));default:return e}},infos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"fetch_infos":case"set_infos":return N({},e,{},Object(I.keyBy)(n,"fields.slug"));case"fetch_info":return N({},e,u()({},n.fields.slug,n));default:return e}}}),L=(Object(v.createStore)(B),n("8Bbg"),a.a.createElement);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W,V=function(e){return W||(W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(v.createStore)(B,e,Object(_.composeWithDevTools)(Object(v.applyMiddleware)()))}(e)),W},H=n("7Qib"),U=n("4W79");function M(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(U.a.getEntries({content_type:e}));case 2:if(!(t=n.sent).items){n.next=5;break}return n.abrupt("return",t.items);case 5:console.log("Error getting Entries with the content type ID ".concat(e,"."));case 6:case"end":return n.stop()}}),null,null,null,Promise)}var X={getPosts:function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(M(Object(H.b)(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)}},q=function(e){var t,n,r=e+"s",o="set"+r[0].toUpperCase()+r.slice(1);switch(e){case"info":n="set_infos";break;default:n="set_blogs"}var i=C((function(e){return e[r]})),a=j();return t={},u()(t,r,i),u()(t,o,(function(e){a({type:n,payload:e})})),t},F=n("9rse"),K=n("uXPr"),G=n("XwJz"),J=n("ckSu"),Y=n("IIls"),Q=n("jzUF"),Z=n("9Koi"),$=n("dkpl"),ee=n("/8/S"),te=n("XMQk"),ne=n("4YbZ"),re=a.a.createElement;function oe(e){var t=e.children,n=e.onPress,r=e.style;return"web"===G.a.OS?re(Y.a,{onPress:n,style:r},t):re(ne.a,{onPress:n,style:r},t)}var ie=n("pVnL"),ae=n.n(ie),ce=i.createElement;function ue(e){return ce(Y.a,ae()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}var se=n("kipq"),le=n("xLLm");function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var de=a.a.forwardRef((function(e,t){var n=e.style,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["style"]);return a.a.createElement(Q.a,fe({},r,{ref:t,style:J.a.compose(be.root,n)}))}));de.displayName="SafeAreaView";var pe=le.canUseDOM&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",be=J.a.create({root:{paddingTop:pe+"(safe-area-inset-top)",paddingRight:pe+"(safe-area-inset-right)",paddingBottom:pe+"(safe-area-inset-bottom)",paddingLeft:pe+"(safe-area-inset-left)"}}),he=de,ge=n("EqL9");var ye=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.ignoreWarnings=function(){},r.prototype.render=function(){return a.a.createElement(ge.a,this.props)},r}(a.a.Component),ve=n("SOH5"),me=a.a.createElement;function we(e){var t=e.data,n=Object(Z.a)("post").t;return t?0===t.length&&me(Q.a,{style:Oe.view},me(Y.a,{style:Oe.text},n("noPost"))):me(Q.a,{style:Oe.view},me(ve.a,{size:"large"}))}var Oe=J.a.create({view:{height:200,alignItems:"center",justifyContent:"center"},text:{fontSize:24}}),Se=n("HBqk"),je=n("/iMr"),xe=n("R/WZ"),Pe=n("tKL9"),Ee=a.a.createElement,Ce=Object(xe.a)({link:{textDecoration:"none !important"}});function Te(e){var t=e.children,n=e.href,r=e.as,o=e.onPress,i=l()(e,["children","href","as","onPress"]),a=Ce();return"web"===G.a.OS?Ee(Pe.a,ae()({href:n,as:r,className:a.link},i),t):Ee(ne.a,ae()({onPress:o},i),t)}var _e=a.a.createElement;function Ie(e){var t=e.sys,n=e.fields,r=e.navigation,o=Object(Z.a)("post").t,i=new Date(t.createdAt).toDateString(),a=n.title,c=n.slug,u=n.body,s="".concat(o("created")," ").concat(i),l="/".concat("blog","/").concat(c),f=Object(H.a)(u);return _e(Te,{href:"/".concat("blog","/[slug]"),as:l,onPress:function(){return r.navigate("Blog",{slug:c})}},_e(Se.f,{title:f?_e(Se.e,{source:{uri:"https:"+f.file.url},style:De.titleImage}):null,subtitle:_e(Q.a,null,_e(Q.a,{style:De.subtitleTitleView},_e(Se.g,{h4:!0,style:De.subtitleTitle},a),_e(Se.g,{style:De.subtitleCreated},s),_e(Se.d,{name:"chevron-right",containerStyle:De.subtitleChevronContainer})),_e(Se.c,null),_e(Q.a,null,_e(Se.g,{style:De.subtitleDesc},Object(H.d)(Object(je.documentToPlainTextString)(u),500),".."),_e(Se.d,{name:"signal-cellular-4-bar",containerStyle:De.subtitleBar,size:30}))),bottomDivider:!0,style:De.listItem,containerStyle:De.listItemContainer}))}var De=J.a.create({listItem:{marginBottom:20},listItemContainer:{padding:0},titleImage:{width:"100%",height:300},subtitleTitleView:{marginVertical:12,marginHorizontal:16},subtitleTitle:{fontWeight:"bold",paddingHorizontal:12,paddingBottom:4},subtitleCreated:{fontSize:12},subtitleChevronContainer:{position:"absolute",right:0,top:"50%",marginTop:-12},subtitleDesc:{marginVertical:18,marginHorizontal:24},subtitleBar:{transform:[{rotate:"180deg"}],position:"absolute",top:0,left:0,opacity:.2}}),ke=a.a.createElement;function Re(e){var t=e.data,n=e.navigation;return ke(he,{style:Ne.container},t&&0!==t.length?ke(se.a,{data:t,renderItem:function(e){var t=e.item;return ke(Ie,ae()({},t,{navigation:n}))},keyExtractor:function(e){return e.sys.id}}):ke(we,{data:t}))}ye.ignoreWarnings(["VirtualizedLists should never be nested"]);var Ne=J.a.create({container:{flex:1,marginBottom:80}}),Be=n("J4zp"),Le=n.n(Be),Ae=n("dnIz"),ze=a.a.createElement;function We(e){var t=e.sys,n=e.fields,r=e.navigation,o=a.a.useState(!1),i=Le()(o,2),c=i[0],u=i[1],s=Object(Z.a)("post").t,l=new Date(t.createdAt).toDateString(),f=n.title,d=n.slug,p=n.body,b="".concat(s("created")," ").concat(l),h="/".concat("info","/").concat(d),g=Object(H.a)(p),y={backgroundColor:"rgba(0, 0, 0, ".concat(c?.5:.25,")")};return"web"===G.a.OS&&(y.transitionDuration="0.5s"),ze(Te,{href:"/".concat("info","/[slug]"),as:h,onPress:function(){return r.navigate("Info",{slug:d})},onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},style:{marginLeft:15,marginRight:15,marginBottom:5}},ze(Se.b,ae()({title:g?null:ze(Q.a,{style:Ve.view},ze(Se.g,{style:Ve.viewTitle},f),ze(Se.g,{style:Ve.viewCreated},b)),featuredTitle:f,featuredTitleStyle:Ve.cardFeaturedTitle,featuredSubtitle:b},g?{image:{uri:"https:"+g.file.url}}:{},{imageStyle:y,containerStyle:Ve.cardContainer}),ze(Se.g,{style:Ve.description},Object(H.d)(Object(je.documentToPlainTextString)(p),g?100:200),"..."),ze(Se.a,{icon:ze(Se.d,{name:"chevron-right",color:Ae.a.secondaryText,containerStyle:Ve.iconContainer}),buttonStyle:Ve.button,titleStyle:Ve.buttonTitle,title:s("readThis"),type:"outline"})))}var Ve=J.a.create({cardContainer:{width:300,margin:0},cardFeaturedTitle:{marginHorizontal:15},view:{paddingBottom:15},viewTitle:{fontSize:14,fontWeight:"bold",paddingBottom:4},viewCreated:{fontSize:10},description:{fontSize:12,marginBottom:10},button:{borderRadius:0,borderColor:Ae.a.secondaryText},buttonTitle:{color:Ae.a.secondaryText},iconContainer:{marginLeft:-20,marginRight:8}}),He=a.a.createElement;function Ue(e){var t=e.data,n=e.navigation;return He(he,{style:Me.container},t&&0!==t.length?He(Q.a,{style:Me.flatList},t.sort((function(e,t){return new Date(t.sys.createdAt)-new Date(e.sys.createdAt)})).map((function(e){return He(We,ae()({key:e.sys.id},e,{navigation:n}))}))):He(we,{data:t}))}ye.ignoreWarnings(["VirtualizedLists should never be nested"]);var Me=J.a.create({container:{flex:1},flatList:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}),Xe=n("KAy6"),qe=n.n(Xe),Fe=ge.a,Ke=a.a.createElement,Ge=[{uri:"https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"Runs with Expo"},{uri:"https://img.shields.io/badge/Powered%20by%20Next.js-000?style=flat-square&logo=Next.js&labelColor=f3f3f3&logoColor=000",alt:"Powered by Next.js"}],Je={div:{display:"flex",justifyContent:"space-between"}};function Ye(){return Ke(Q.a,{style:Ze.container},"web"===G.a.OS?Ke("div",{style:Je.div},Ge.map((function(e,t){return Ke("img",{key:t,src:e.uri,alt:e.alt})}))):Ke(Fe,{source:{html:Object(H.f)(qe.a.renderToStaticMarkup(Ke("div",{style:Je.div},Ge.map((function(e,t){return Ke("img",{key:t,src:e.uri,alt:e.alt})})))))},startInLoadingState:!0}))}var Qe,Ze=J.a.create({container:{height:35,width:295,marginVertical:10,alignSelf:"center"}}),$e=n("lARI"),et=n("cFdL"),tt=function(){function e(){}return e.alert=function(){},e}(),nt=function(){function e(){}return e.isAvailable=function(){return void 0===Qe&&(Qe="function"===typeof document.queryCommandSupported&&document.queryCommandSupported("copy")),Qe},e.getString=function(){return Promise.resolve("")},e.setString=function(e){var t=!1,n=document.body;if(n){var r=document.createElement("span");r.textContent=e,r.style.opacity="0",r.style.position="absolute",r.style.whiteSpace="pre-wrap",n.appendChild(r);var o=window.getSelection();o.removeAllRanges();var i=document.createRange();i.selectNodeContents(r),o.addRange(i);try{document.execCommand("copy"),t=!0}catch(a){}o.removeAllRanges(),n.removeChild(r)}return t},e}(),rt=n("Ckk/"),ot=n("epw2"),it=n("gUAv"),at=n("C7Rh"),ct=at.a.get("window").width,ut={window:{width:ct,height:at.a.get("window").height},isSmallDevice:ct<375},st=a.a.createElement;function lt(){$.a($e["your-item-here"].link)}var ft=J.a.create({parent:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",marginBottom:70},child:{width:400,marginBottom:20},text:{fontWeight:"bold",marginBottom:5},textInput:{borderWidth:1,borderColor:Ae.a.highlightBackground},buttonTitle:{fontSize:16}}),dt=function(){var e=ee.default.manifest.extra.PUBLIC_URL+"/item-displays",t=Object(Z.a)("itemDisplays").t,n=a.a.useState('<div style="text-align: center;">\n  <iframe src="'.concat(e,'" style="height: 500px; width: 1000px;"></iframe>\n</div>')),r=Le()(n,2),o=r[0],i=r[1];return st(a.a.Fragment,null,"web"===G.a.OS?st(it.a,{noHead:!0}):st(Fe,{source:{uri:e},style:{height:ut.window.height}}),st(Q.a,{style:ft.parent},st(Q.a,{style:ft.child},st(Se.g,{style:ft.text},t("wantToEmbed")),st(ot.a,{multiline:!0,numberOfLines:4,onChangeText:function(e){return i({text:e})},onFocus:function(){nt.setString(o),rt.a.dismiss(),"web"===G.a.OS?alert(t("copied")):tt.alert(t("copied"))},value:o,style:ft.textInput})),st(Q.a,{style:ft.child},st(Se.a,{title:t("placeModel"),type:"outline",onPress:lt,titleStyle:ft.buttonTitle}))))},pt=i.createElement;function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ht(e){var t=e.images,n=e.blogs,r=e.infos,o=e.navigation,i=e.headerHeight,a=Object(Z.a)(["translation","app","itemDisplays"]).t;return pt(Q.a,{style:et.a.container},pt(te.a,{style:et.a.container,contentContainerStyle:Object(et.b)(i)},pt(Q.a,{style:mt.welcomeContainer},pt(Y.a,{style:mt.welcomeText},pt(K.a,{source:t.welcome.src,style:mt.welcomeImage}),pt(gt,{t:a}))),pt(Ue,{data:r,navigation:o}),pt(dt,null),pt(Re,{data:n,navigation:o}),pt(oe,{onPress:vt,style:mt.getStartedContainerTouchable},pt(Q.a,{style:mt.getStartedContainer},pt(Q.a,{style:[mt.codeHighlightContainer,mt.homeScreenFilename]},pt(ue,null,a("itemDisplays:title"))),pt(Y.a,{style:mt.getStartedText},a("itemDisplays:getStarted")))),pt(Ye,null),pt(Q.a,{style:mt.helpContainer},pt(oe,{onPress:yt,style:mt.helpLink},pt(Y.a,{style:mt.helpLinkText},a("didNotReload"))))),pt(Q.a,{style:mt.tabBarInfoContainer},pt(Y.a,{style:mt.tabBarInfoText,numberOfLines:1},a("app:description")),pt(Q.a,{style:[mt.codeHighlightContainer,mt.navigationFilename]},pt(ue,{style:mt.codeHighlightText},ee.default.manifest.extra.PUBLIC_URL))))}function gt(e){var t=e.t;return pt(Y.a,{style:mt.developmentModeText},t("published"))}function yt(){$.a("https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change")}function vt(){$.a($e["your-item-here"].link)}var mt=J.a.create({developmentModeText:{color:"rgba(0,0,0,0.4)",fontSize:12,lineHeight:14},welcomeContainer:{marginBottom:12,marginTop:"web"===G.a.OS?-15:0},welcomeText:{display:"flex"},welcomeImage:{width:30,height:24,resizeMode:"contain",marginVertical:-5,marginRight:10},getStartedContainerTouchable:{marginBottom:120,maxWidth:500,alignSelf:"center"},getStartedContainer:{alignItems:"center",marginHorizontal:10},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:Ae.a.highlightBackground,borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:Ae.a.secondaryText,lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({position:"absolute",bottom:0,left:0,right:0},G.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:10,paddingHorizontal:12,borderColor:Ae.a.highlightBackground,borderWidth:1}),tabBarInfoText:{fontSize:17,color:Ae.a.secondaryText,textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:12,color:"#2e78b7"}}),wt=a.a.createElement;function Ot(e){var t=e.blogPosts,n=e.infoPosts,r=q("blog").setBlogs,o=q("info").setInfos;return a.a.useEffect((function(){r(t),o(n)}),[]),wt(F.a.Layout,null,wt(ht,{images:{welcome:{src:"/images/robot-prod.png"}},blogs:t,infos:n}))}Ot.getInitialProps=function(){var e,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(X.getPosts("blog"));case 2:return e=n.sent,n.next=5,o.a.awrap(X.getPosts("info"));case 5:return t=n.sent,n.abrupt("return",{blogPosts:e,infoPosts:t});case 7:case"end":return n.stop()}}),null,null,null,Promise)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,r=void 0===n||n,i=function(t){var n=t.initialReduxState,r=l()(t,["initialReduxState"]),o=V(n);return L(g,{store:o},L(e,r))};return(r||e.getInitialProps)&&(i.getInitialProps=function(t){var n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=V(),t.reduxStore=n,"function"!==typeof e.getInitialProps){i.next=8;break}return i.next=5,o.a.awrap(e.getInitialProps(t));case 5:i.t0=i.sent,i.next=9;break;case 8:i.t0={};case 9:return r=i.t0,i.abrupt("return",z({},r,{initialReduxState:n.getState()}));case 11:case"end":return i.stop()}}),null,null,null,Promise)}),i}(Ot)},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("3r9c"),n("BKcT")(e))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,5,11,2,4,3,6,7,10,9]]]);