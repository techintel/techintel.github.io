(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+Hmc":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("ODXe"),o=n("LybE"),i=n("bv9d");var a={m:"margin",p:"padding"},c={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},u={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},f=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t(n)),e[n]}}((function(t){if(t.length>2){if(!u[t])return[t];t=u[t]}var e=t.split(""),n=Object(r.a)(e,2),o=n[0],i=n[1],f=a[o],s=c[i]||"";return Array.isArray(s)?s.map((function(t){return f+t})):[f+s]})),s=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function d(t){var e=t.spacing||8;return"number"===typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"===typeof e?e:function(){}}function l(t,e){return function(n){return t.reduce((function(t,r){return t[r]=function(t,e){if("string"===typeof e||null==e)return e;var n=t(Math.abs(e));return e>=0?n:"number"===typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function p(t){var e=d(t.theme);return Object.keys(t).map((function(n){if(-1===s.indexOf(n))return null;var r=l(f(n),e),i=t[n];return Object(o.a)(t,i,r)})).reduce(i.a,{})}p.propTypes={},p.filterProps=s;e.b=p},"/8/S":function(t,e,n){"use strict";n.r(e),n.d(e,"AppOwnership",(function(){return r})),n.d(e,"UserInterfaceIdiom",(function(){return o}));var r,o,i=n("lSNA"),a=n.n(i),c=n("QILm"),u=n.n(c);!function(t){t.Standalone="standalone",t.Expo="expo",t.Guest="guest"}(r||(r={})),function(t){t.Handset="handset",t.Tablet="tablet",t.Unsupported="unsupported"}(o||(o={}));var f=n("o0o1"),s=n.n(f),d=n("yXPU"),l=n.n(d),p=n("xLLm"),g=n("xk4V"),b=n.n(g),m="EXPO_CONSTANTS_INSTALLATION_ID",h=b()();var y={get name(){return"ExponentConstants"},get appOwnership(){return"expo"},get installationId(){var t;try{null!=(t=localStorage.getItem(m))&&"string"===typeof t||(t=b()(),localStorage.setItem(m,t))}catch(e){t=h}finally{return t}},get sessionId(){return h},get platform(){return{web:p.canUseDOM?{ua:navigator.userAgent}:void 0}},get isHeadless(){return!1},get isDevice(){return!0},get isDetached(){return!1},get expoVersion(){return this.manifest.sdkVersion||null},get linkingUri(){return p.canUseDOM?location.origin+location.pathname:""},get expoRuntimeVersion(){return this.expoVersion},get deviceName(){return function(){if(p.canUseDOM){var t=navigator.userAgent.toLowerCase();if(t.includes("edge"))return"Edge";if(t.includes("edg"))return"Chromium Edge";if(t.includes("opr")&&window.opr)return"Opera";if(t.includes("chrome")&&window.chrome)return"Chrome";if(t.includes("trident"))return"IE";if(t.includes("firefox"))return"Firefox";if(t.includes("safari"))return"Safari"}}()},get nativeAppVersion(){return null},get nativeBuildVersion(){return null},get systemFonts(){return[]},get statusBarHeight(){return 0},get deviceYearClass(){return null},get manifest(){return{name:"Techintel",slug:"techintel",description:"All about technology including a developer portfolio, stories, products and services, analysis and facts for your awareness.",extra:{PUBLIC_URL:"https://techintel.github.io",SPACE_ID:"gdquurxkfsex",ACCESS_TOKEN:"FhCAZchv43ZBtGQGMZhma-PTaVYEwb2yymp0kHIS2pE",CONTENT_TYPES:{BLOG:"techintelBlog",INFO:"techintelInfo",FORTFOLIO:"techintelFortfolio"},REWRITES:[],REDIRECTS:[{source:"/info/why-are-there-medical-malpractice-and-deception-in-san-juan-de-dios-hospital",destination:"/info/why-are-there-medical-idiotic-and-deception-in-san-juan-de-dios-hospital",permanent:!0},{source:["/info/was-i-exposed-to-irritants-because-of-land-of-covid-19-and-banana-republic","/info/getting-bugged-because-of-indirectly-shaming-philippine-republic-system"],destination:"/info/getting-bugged-because-of-indirectly-trolling-philippine-republic-system",permanent:!0},{source:"/info/on-the-very-wrongful-acts-of-tolerated-terrible-workers",destination:"/info/stop-tolerating-murderous-quality-workers-theyre-destroying-futures",permanent:!0}]},privacy:"public",platforms:["ios","android","web"],version:"1.0.6",orientation:"portrait",icon:"./assets/images/icon.png",scheme:"myapp",splash:{image:"./assets/images/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],_internal:{isDebug:!1,projectRoot:"C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel.github.io-master",dynamicConfigPath:null,staticConfigPath:"C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel.github.io-master\\app.json",packageJsonPath:"C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel.github.io-master\\package.json"},sdkVersion:"37.0.0",web:{}}||{}},get experienceUrl(){return p.canUseDOM?location.origin+location.pathname:""},get debugMode(){return!1},getWebViewUserAgentAsync:function(){return l()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p.canUseDOM){t.next=4;break}return t.abrupt("return",navigator.userAgent);case 4:return t.abrupt("return",null);case 5:case"end":return t.stop()}}),t)})))()}};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}y||console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");var x=null;y&&y.manifest&&"string"===typeof(x=y.manifest)&&(x=JSON.parse(x));var w=y||{},j=(w.name,u()(w,["name"]));e.default=O(O({},j),{},{manifest:x,deviceId:j.installationId,linkingUrl:j.linkingUri})},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"2+6g":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("wx14"),o=n("U8pU");function i(t){return t&&"object"===Object(o.a)(t)&&t.constructor===Object}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},o=n.clone?Object(r.a)({},t):t;return i(t)&&i(e)&&Object.keys(e).forEach((function(r){"__proto__"!==r&&(i(e[r])&&r in t?o[r]=a(t[r],e[r],n):o[r]=e[r])})),o}},"20a2":function(t,e,n){t.exports=n("nOHt")},"4fRq":function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},Ff2n:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("zLVn");function o(t,e){if(null==t)return{};var n,o,i=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},HwzS:function(t,e,n){"use strict";e.a={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}},I2ZF:function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("a3WO");var o=n("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},LybE:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("KQm4"),n("wx14");var r=n("U8pU"),o=(n("17x9"),n("bv9d"),{xs:0,sm:600,md:960,lg:1280,xl:1920}),i={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(o[t],"px)")}};function a(t,e,n){if(Array.isArray(e)){var o=t.theme.breakpoints||i;return e.reduce((function(t,r,i){return t[o.up(o.keys[i])]=n(e[i]),t}),{})}if("object"===Object(r.a)(e)){var a=t.theme.breakpoints||i;return Object.keys(e).reduce((function(t,r){return t[a.up(r)]=n(e[r]),t}),{})}return n(e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("BsWD");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},OKji:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createContext(null);e.a=o},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},TrhM:function(t,e,n){"use strict";function r(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}n.d(e,"a",(function(){return r}))},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},aXM8:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r),i=n("OKji");function a(){return o.a.useContext(i.a)}},bv9d:function(t,e,n){"use strict";var r=n("2+6g");e.a=function(t,e){return e?Object(r.a)(t,e,{clone:!1}):t}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},"hfi/":function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for;e.a=r?Symbol.for("mui.nested"):"__THEME_NESTED__"},o0o1:function(t,e,n){t.exports=n("ls82")},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},s4An:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},viY9:function(t,e,n){"use strict";var r=n("rePB"),o=n("Ff2n"),i=n("2+6g"),a=n("wx14"),c=["xs","sm","md","lg","xl"];function u(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,i=void 0===r?"px":r,u=t.step,f=void 0===u?5:u,s=Object(o.a)(t,["values","unit","step"]);function d(t){var e="number"===typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(i,")")}function l(t,e){var r=c.indexOf(e);return r===c.length-1?d(t):"@media (min-width:".concat("number"===typeof n[t]?n[t]:t).concat(i,") and ")+"(max-width:".concat((-1!==r&&"number"===typeof n[c[r+1]]?n[c[r+1]]:e)-f/100).concat(i,")")}return Object(a.a)({keys:c,values:n,up:d,down:function(t){var e=c.indexOf(t)+1,r=n[c[e]];return e===c.length?d("xs"):"@media (max-width:".concat(("number"===typeof r&&e>0?r:t)-f/100).concat(i,")")},between:l,only:function(t){return l(t,t)},width:function(t){return n[t]}},s)}function f(t,e,n){var o;return Object(a.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({paddingLeft:e(2),paddingRight:e(2)},n,Object(r.a)({},t.up("sm"),Object(a.a)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(o={minHeight:56},Object(r.a)(o,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),Object(r.a)(o,t.up("sm"),{minHeight:64}),o)},n)}var s=n("TrhM"),d={black:"#000",white:"#fff"},l={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},p={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},g={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},b={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},h={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},v=n("ye/S"),O={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:d.white,default:l[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},x={text:{primary:d.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:l[800],default:"#303030"},action:{active:d.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function w(t,e,n,r){var o=r.light||r,i=r.dark||1.5*r;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=Object(v.d)(t.main,o):"dark"===e&&(t.dark=Object(v.a)(t.main,i)))}function j(t){var e=t.primary,n=void 0===e?{light:p[300],main:p[500],dark:p[700]}:e,r=t.secondary,c=void 0===r?{light:g.A200,main:g.A400,dark:g.A700}:r,u=t.error,f=void 0===u?{light:b[300],main:b[500],dark:b[700]}:u,j=t.warning,A=void 0===j?{light:m[300],main:m[500],dark:m[700]}:j,S=t.info,k=void 0===S?{light:h[300],main:h[500],dark:h[700]}:S,E=t.success,I=void 0===E?{light:y[300],main:y[500],dark:y[700]}:E,T=t.type,P=void 0===T?"light":T,M=t.contrastThreshold,_=void 0===M?3:M,R=t.tonalOffset,C=void 0===R?.2:R,U=Object(o.a)(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function D(t){return Object(v.c)(t,x.text.primary)>=_?x.text.primary:O.text.primary}var N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=Object(a.a)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(Object(s.a)(4,e));if("string"!==typeof t.main)throw new Error(Object(s.a)(5,JSON.stringify(t.main)));return w(t,"light",n,C),w(t,"dark",r,C),t.contrastText||(t.contrastText=D(t.main)),t},W={dark:x,light:O};return Object(i.a)(Object(a.a)({common:d,type:P,primary:N(n),secondary:N(c,"A400","A200","A700"),error:N(f),warning:N(A),info:N(k),success:N(I),grey:l,contrastThreshold:_,getContrastText:D,augmentColor:N,tonalOffset:C},W[P]),U)}function A(t){return Math.round(1e5*t)/1e5}var S={textTransform:"uppercase"},k='"Roboto", "Helvetica", "Arial", sans-serif';function E(t,e){var n="function"===typeof e?e(t):e,r=n.fontFamily,c=void 0===r?k:r,u=n.fontSize,f=void 0===u?14:u,s=n.fontWeightLight,d=void 0===s?300:s,l=n.fontWeightRegular,p=void 0===l?400:l,g=n.fontWeightMedium,b=void 0===g?500:g,m=n.fontWeightBold,h=void 0===m?700:m,y=n.htmlFontSize,v=void 0===y?16:y,O=n.allVariants,x=n.pxToRem,w=Object(o.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var j=f/14,E=x||function(t){return"".concat(t/v*j,"rem")},I=function(t,e,n,r,o){return Object(a.a)({fontFamily:c,fontWeight:t,fontSize:E(e),lineHeight:n},c===k?{letterSpacing:"".concat(A(r/e),"em")}:{},o,O)},T={h1:I(d,96,1.167,-1.5),h2:I(d,60,1.2,-.5),h3:I(p,48,1.167,0),h4:I(p,34,1.235,.25),h5:I(p,24,1.334,0),h6:I(b,20,1.6,.15),subtitle1:I(p,16,1.75,.15),subtitle2:I(b,14,1.57,.1),body1:I(p,16,1.5,.15),body2:I(p,14,1.43,.15),button:I(b,14,1.75,.4,S),caption:I(p,12,1.66,.4),overline:I(p,12,2.66,1,S)};return Object(i.a)(Object(a.a)({htmlFontSize:v,pxToRem:E,round:A,fontFamily:c,fontSize:f,fontWeightLight:d,fontWeightRegular:p,fontWeightMedium:b,fontWeightBold:h},T),w,{clone:!1})}function I(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var T=["none",I(0,2,1,-1,0,1,1,0,0,1,3,0),I(0,3,1,-2,0,2,2,0,0,1,5,0),I(0,3,3,-2,0,3,4,0,0,1,8,0),I(0,2,4,-1,0,4,5,0,0,1,10,0),I(0,3,5,-1,0,5,8,0,0,1,14,0),I(0,3,5,-1,0,6,10,0,0,1,18,0),I(0,4,5,-2,0,7,10,1,0,2,16,1),I(0,5,5,-3,0,8,10,1,0,3,14,2),I(0,5,6,-3,0,9,12,1,0,3,16,2),I(0,6,6,-3,0,10,14,1,0,4,18,3),I(0,6,7,-4,0,11,15,1,0,4,20,3),I(0,7,8,-4,0,12,17,2,0,5,22,4),I(0,7,8,-4,0,13,19,2,0,5,24,4),I(0,7,9,-4,0,14,21,2,0,5,26,4),I(0,8,9,-5,0,15,22,2,0,6,28,5),I(0,8,10,-5,0,16,24,2,0,6,30,5),I(0,8,11,-5,0,17,26,2,0,6,32,5),I(0,9,11,-5,0,18,28,2,0,7,34,6),I(0,9,12,-6,0,19,29,2,0,7,36,6),I(0,10,13,-6,0,20,31,3,0,8,38,7),I(0,10,13,-6,0,21,33,3,0,8,40,7),I(0,10,14,-6,0,22,35,3,0,8,42,7),I(0,11,14,-7,0,23,36,3,0,9,44,8),I(0,11,15,-7,0,24,38,3,0,9,46,8)],P={borderRadius:4},M=n("+Hmc");function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=Object(M.a)({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"===typeof t)return t;var n=e(t);return"number"===typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var R=n("wpWl"),C=n("HwzS");e.a=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,r=t.mixins,a=void 0===r?{}:r,c=t.palette,s=void 0===c?{}:c,d=t.spacing,l=t.typography,p=void 0===l?{}:l,g=Object(o.a)(t,["breakpoints","mixins","palette","spacing","typography"]),b=j(s),m=u(n),h=_(d),y=Object(i.a)({breakpoints:m,direction:"ltr",mixins:f(m,h,a),overrides:{},palette:b,props:{},shadows:T,typography:E(b,p),spacing:h,shape:P,transitions:R.a,zIndex:C.a},g),v=arguments.length,O=new Array(v>1?v-1:0),x=1;x<v;x++)O[x-1]=arguments[x];return y=O.reduce((function(t,e){return Object(i.a)(t,e)}),y)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wpWl:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n("Ff2n"),o={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},i={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function a(t){return"".concat(Math.round(t),"ms")}e.a={easing:o,duration:i,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,c=void 0===n?i.standard:n,u=e.easing,f=void 0===u?o.easeInOut:u,s=e.delay,d=void 0===s?0:s;Object(r.a)(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"===typeof c?c:a(c)," ").concat(f," ").concat("string"===typeof d?d:a(d))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}}},xk4V:function(t,e,n){var r=n("4fRq"),o=n("I2ZF");t.exports=function(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var a=(t=t||{}).random||(t.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var c=0;c<16;++c)e[i+c]=a[c];return e||o(a)}},yXPU:function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void n(f)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"ye/S":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return d}));var r=n("TrhM");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function i(t){if(t.type)return t;if("#"===t.charAt(0))return i(function(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(Object(r.a)(3,t));var o=t.substring(e+1,t.length-1).split(",");return{type:n,values:o=o.map((function(t){return parseFloat(t)}))}}function a(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function c(t,e){var n=u(t),r=u(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function u(t){var e="hsl"===(t=i(t)).type?i(function(t){var e=(t=i(t)).values,n=e[0],r=e[1]/100,o=e[2]/100,c=r*Math.min(o,1-o),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return o-c*Math.max(Math.min(e-3,9-e,1),-1)},f="rgb",s=[Math.round(255*u(0)),Math.round(255*u(8)),Math.round(255*u(4))];return"hsla"===t.type&&(f+="a",s.push(e[3])),a({type:f,values:s})}(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function f(t,e){return t=i(t),e=o(e),"rgb"!==t.type&&"hsl"!==t.type||(t.type+="a"),t.values[3]=e,a(t)}function s(t,e){if(t=i(t),e=o(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return a(t)}function d(t,e){if(t=i(t),e=o(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return a(t)}}}]);