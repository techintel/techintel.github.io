(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return g})),n.d(t,"bindActionCreators",(function(){return f})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return u}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function b(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),l=null}}}function g(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){(0,t[n])()}return e}return g({type:i.INIT}),(o={dispatch:g,subscribe:h,getState:b,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,g({type:i.REPLACE})}})[r.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var s=u[i],l=n[s],f=e[s],d=l(f,t);if("undefined"===typeof d){var p=c(s,t);throw new Error(p)}o[s]=d,r=r||d!==f}return(r=r||u.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"===typeof e)return l(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=l(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return b({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("q1tI"),a=n.n(i),u=n("lSNA"),c=n.n(u),s=n("QILm"),l=n.n(s),f=(n("17x9"),a.a.createContext(null));var d=function(e){e()},p=function(){return d},b={notify:function(){}};var h=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=b,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=p(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=b)},e}();var g=function(e){var t=e.store,n=e.context,r=e.children,o=Object(i.useMemo)((function(){var e=new h(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(i.useMemo)((function(){return t.getState()}),[t]);Object(i.useEffect)((function(){var e=o.subscription;return e.trySubscribe(),u!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,u]);var c=n||f;return a.a.createElement(c.Provider,{value:o},r)},y=(n("wx14"),n("zLVn"),n("2mql"),n("TOwV"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect);var v=n("ANjH");function w(){return Object(i.useContext)(f)}function m(e){void 0===e&&(e=f);var t=e===f?w:function(){return Object(i.useContext)(e)};return function(){return t().store}}var O=m();function S(e){void 0===e&&(e=f);var t=e===f?O:m(e);return function(){return t().dispatch}}var j=S(),E=function(e,t){return e===t};function x(e){void 0===e&&(e=f);var t=e===f?w:function(){return Object(i.useContext)(e)};return function(e,n){void 0===n&&(n=E);var r=t();return function(e,t,n,r){var o,a=Object(i.useReducer)((function(e){return e+1}),0)[1],u=Object(i.useMemo)((function(){return new h(n,r)}),[n,r]),c=Object(i.useRef)(),s=Object(i.useRef)(),l=Object(i.useRef)();try{o=e!==s.current||c.current?e(n.getState()):l.current}catch(f){throw c.current&&(f.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),f}return y((function(){s.current=e,l.current=o,c.current=void 0})),y((function(){function e(){try{var e=s.current(n.getState());if(t(e,l.current))return;l.current=e}catch(f){c.current=f}a({})}return u.onStateChange=e,u.trySubscribe(),e(),function(){return u.tryUnsubscribe()}}),[n,u]),o}(e,n,r.store,r.subscription)}}var P,C=x(),T=n("i8i4");P=T.unstable_batchedUpdates,d=P;var _=n("5HXA"),I=n("LvDl");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=Object(v.combineReducers)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"fetch_blogs":case"set_blogs":return k({},e,{},Object(I.keyBy)(n,"fields.slug"));case"fetch_blog":return k({},e,c()({},n.fields.slug,n));default:return e}}}),R=(Object(v.createStore)(D),n("8Bbg"),a.a.createElement);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A,H=function(e){return A||(A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(v.createStore)(D,e,Object(_.composeWithDevTools)(Object(v.applyMiddleware)()))}(e)),A},z=n("/8/S"),V=n("4W79");function X(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(V.a.getEntries({content_type:e}));case 2:if(!(t=n.sent).items){n.next=5;break}return n.abrupt("return",t.items);case 5:console.log("Error getting Entries with the content type ID ".concat(e,"."));case 6:case"end":return n.stop()}}),null,null,null,Promise)}var U={getBlogs:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(X(z.default.manifest.extra.CONTENT_TYPES.BLOG));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)}},M=function(){var e=C((function(e){return e.blogs})),t=j();return{blogs:e,setBlogs:function(e){t({type:"set_blogs",payload:e})}}},W=n("uXPr"),q=n("XwJz"),F=n("ckSu"),K=n("IIls"),Y=n("jzUF"),J=n("9kay"),Q=n("dkpl"),G=n("XMQk"),Z=n("4YbZ"),$=a.a.createElement;function ee(e){var t=e.children,n=e.onPress,r=e.style;return"web"===q.a.OS?$(K.a,{onPress:n,style:r},t):$(Z.a,{onPress:n,style:r},t)}var te=n("pVnL"),ne=n.n(te),re=i.createElement;function oe(e){return re(K.a,ne()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}var ie=n("SOH5"),ae=n("kipq"),ue=n("xLLm");function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var se=a.a.forwardRef((function(e,t){var n=e.style,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["style"]);return a.a.createElement(Y.a,ce({},r,{ref:t,style:F.a.compose(fe.root,n)}))}));se.displayName="SafeAreaView";var le=ue.canUseDOM&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",fe=F.a.create({root:{paddingTop:le+"(safe-area-inset-top)",paddingRight:le+"(safe-area-inset-right)",paddingBottom:le+"(safe-area-inset-bottom)",paddingLeft:le+"(safe-area-inset-left)"}}),de=se,pe=n("EqL9");var be=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.ignoreWarnings=function(){},r.prototype.render=function(){return a.a.createElement(pe.a,this.props)},r}(a.a.Component),he=n("HBqk"),ge=n("/iMr"),ye=n("7Qib"),ve=n("R/WZ"),we=n("tKL9"),me=a.a.createElement,Oe=Object(ve.a)({link:{textDecoration:"none !important"}});function Se(e){var t=e.children,n=e.href,r=e.as,o=e.onPress,i=Oe();return"web"===q.a.OS?me(we.a,{href:n,as:r,className:i.link},t):me(Z.a,{onPress:o},t)}var je=a.a.createElement;function Ee(e){var t=e.sys,n=e.fields,r=e.navigation,o=Object(J.b)("post").t,i=new Date(t.createdAt).toDateString(),a=n.title,u=n.slug,c=n.body,s="/blog/".concat(u),l=Object(ye.a)(c);return je(Se,{href:"/blog/[slug]",as:s,onPress:function(){return r.navigate("Blog",{slug:u})}},je(he.e,{title:l?je(he.d,{source:{uri:"https:"+l.file.url},style:xe.titleImage}):null,subtitle:je(Y.a,null,je(Y.a,{style:xe.subtitleTitleView},je(he.f,{h4:!0,style:xe.subtitleTitle},a),je(he.f,{style:xe.subtitleCreated},o("created"),i),je(he.c,{name:"chevron-right",containerStyle:xe.subtitleChevronContainer})),je(he.b,null),je(Y.a,null,je(he.f,{style:xe.subtitleDesc},Object(ye.c)(Object(ge.documentToPlainTextString)(c)),".."),je(he.c,{name:"signal-cellular-4-bar",containerStyle:xe.subtitleBar,size:30}))),bottomDivider:!0,style:xe.listItem,containerStyle:xe.listItemContainer}))}var xe=F.a.create({listItem:{marginBottom:20},listItemContainer:{padding:0},titleImage:{width:"100%",height:300},subtitleTitleView:{marginVertical:12,marginHorizontal:16},subtitleTitle:{fontWeight:"bold",paddingHorizontal:12,paddingBottom:4},subtitleCreated:{fontSize:12},subtitleChevronContainer:{position:"absolute",right:0,top:"50%",marginTop:-12},subtitleDesc:{marginVertical:18,marginHorizontal:24},subtitleBar:{transform:[{rotate:"180deg"}],position:"absolute",top:0,left:0,opacity:.2}}),Pe=a.a.createElement;function Ce(e){var t=e.data,n=e.navigation;return Pe(de,{style:Te.container},null===t?Pe(Y.a,{style:Te.view},Pe(ie.a,{size:"large"})):0===t.length?Pe(Y.a,{style:Te.view},Pe(K.a,{style:Te.text},"No blog to show")):Pe(ae.a,{data:t,renderItem:function(e){var t=e.item;return Pe(Ee,ne()({},t,{navigation:n}))},keyExtractor:function(e){return e.sys.id}}))}be.ignoreWarnings(["VirtualizedLists should never be nested"]);var Te=F.a.create({container:{flex:1,marginBottom:80},view:{height:200,alignItems:"center",justifyContent:"center"},text:{fontSize:24}}),_e=n("KAy6"),Ie=n.n(_e),Ne=pe.a,ke=a.a.createElement,De=[{uri:"https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"Runs with Expo"},{uri:"https://img.shields.io/badge/Powered%20by%20Next.js-000?style=flat-square&logo=Next.js&labelColor=f3f3f3&logoColor=000",alt:"Powered by Next.js"}],Re={div:{display:"flex",justifyContent:"space-between"}};function Le(){return ke(Y.a,{style:Be.container},"web"===q.a.OS?ke("div",{style:Re.div},De.map((function(e,t){return ke("img",{key:t,src:e.uri,alt:e.alt})}))):ke(Ne,{source:{html:Object(ye.d)(Ie.a.renderToStaticMarkup(ke("div",{style:Re.div},De.map((function(e,t){return ke("img",{key:t,src:e.uri,alt:e.alt})})))))},startInLoadingState:!0}))}var Be=F.a.create({container:{height:35,width:295,marginVertical:10,alignSelf:"center"}}),Ae=n("cFdL"),He=n("dnIz"),ze=i.createElement;function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){var t=e.images,n=e.blogs,r=e.navigation,o=e.headerHeight,i=Object(J.b)(["translation","app","graphicalItems"]).t;return ze(Y.a,{style:Ae.a.container},ze(G.a,{style:Ae.a.container,contentContainerStyle:Object(Ae.b)(o)},ze(Y.a,{style:We.welcomeContainer},ze(K.a,{style:We.welcomeText},ze(W.a,{source:t.welcome.src,style:We.welcomeImage}),ze(Ue,{t:i}))),ze(Ce,{data:n,navigation:r}),ze(Y.a,{style:We.getStartedContainer},ze(Y.a,{style:[We.codeHighlightContainer,We.homeScreenFilename]},ze(oe,null,i("graphicalItems:title"))),ze(K.a,{style:We.getStartedText},i("graphicalItems:getStarted"))),ze(Le,null),ze(Y.a,{style:We.helpContainer},ze(ee,{onPress:Me,style:We.helpLink},ze(K.a,{style:We.helpLinkText},i("didNotReload"))))),ze(Y.a,{style:We.tabBarInfoContainer},ze(K.a,{style:We.tabBarInfoText,numberOfLines:1},i("app:description")),ze(Y.a,{style:[We.codeHighlightContainer,We.navigationFilename]},ze(oe,{style:We.codeHighlightText},z.default.manifest.extra.PUBLIC_URL))))}function Ue(e){var t=e.t;return ze(K.a,{style:We.developmentModeText},t("published"))}function Me(){Q.a("https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change")}var We=F.a.create({developmentModeText:{color:"rgba(0,0,0,0.4)",fontSize:12,lineHeight:14},welcomeContainer:{marginBottom:12,marginTop:"web"===q.a.OS?-15:0},welcomeText:{display:"flex"},welcomeImage:{width:30,height:24,resizeMode:"contain",marginVertical:-5,marginRight:10},getStartedContainer:{alignItems:"center",marginHorizontal:50,marginBottom:120},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:He.a.highlightBackground,borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:He.a.secondaryText,lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({position:"absolute",bottom:0,left:0,right:0},q.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:10,paddingHorizontal:12,borderColor:He.a.highlightBackground,borderWidth:1}),tabBarInfoText:{fontSize:17,color:He.a.secondaryText,textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:12,color:"#2e78b7"}}),qe=a.a.createElement;function Fe(e){var t=e.blogArr,n=M().setBlogs;return a.a.useEffect((function(){n(t)}),[]),qe(Xe,{images:{welcome:{src:"/images/robot-prod.png"}},blogs:t})}Fe.getInitialProps=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(U.getBlogs());case 2:return e=t.sent,t.abrupt("return",{blogArr:e});case 4:case"end":return t.stop()}}),null,null,null,Promise)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,r=void 0===n||n,i=function(t){var n=t.initialReduxState,r=l()(t,["initialReduxState"]),o=H(n);return R(g,{store:o},R(e,r))};return(r||e.getInitialProps)&&(i.getInitialProps=function(t){var n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=H(),t.reduxStore=n,"function"!==typeof e.getInitialProps){i.next=8;break}return i.next=5,o.a.awrap(e.getInitialProps(t));case 5:i.t0=i.sent,i.next=9;break;case 8:i.t0={};case 9:return r=i.t0,i.abrupt("return",B({},r,{initialReduxState:n.getState()}));case 11:case"end":return i.stop()}}),null,null,null,Promise)}),i}(Fe)},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("3r9c"),n("BKcT")(e))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,8,1,3,6,5,4,7,9,11,10]]]);