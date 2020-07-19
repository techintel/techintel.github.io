/*! For license information please see 9b26ad30b978666d21b23a8fbaed076e15b28acf.107d889a8899b48f2309.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Hmc":function(e,n,i){"use strict";i.d(n,"a",(function(){return l}));var t=i("ODXe"),r=i("LybE"),o=i("bv9d");var a={m:"margin",p:"padding"},s={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},c={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){var n={};return function(i){return void 0===n[i]&&(n[i]=e(i)),n[i]}}((function(e){if(e.length>2){if(!c[e])return[e];e=c[e]}var n=e.split(""),i=Object(t.a)(n,2),r=i[0],o=i[1],u=a[r],d=s[o]||"";return Array.isArray(d)?d.map((function(e){return u+e})):[u+d]})),d=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function l(e){var n=e.spacing||8;return"number"===typeof n?function(e){return n*e}:Array.isArray(n)?function(e){return n[e]}:"function"===typeof n?n:function(){}}function f(e,n){return function(i){return e.reduce((function(e,t){return e[t]=function(e,n){if("string"===typeof n)return n;var i=e(Math.abs(n));return n>=0?i:"number"===typeof i?-i:"-".concat(i)}(n,i),e}),{})}}function p(e){var n=l(e.theme);return Object.keys(e).map((function(i){if(-1===d.indexOf(i))return null;var t=f(u(i),n),o=e[i];return Object(r.a)(e,o,t)})).reduce(o.a,{})}p.propTypes={},p.filterProps=d;n.b=p},"/8/S":function(e,n,i){"use strict";i.r(n),i.d(n,"AppOwnership",(function(){return t})),i.d(n,"UserInterfaceIdiom",(function(){return r}));var t,r,o=i("lSNA"),a=i.n(o),s=i("QILm"),c=i.n(s);!function(e){e.Standalone="standalone",e.Expo="expo",e.Guest="guest"}(t||(t={})),function(e){e.Handset="handset",e.Tablet="tablet",e.Unsupported="unsupported"}(r||(r={}));var u=i("o0o1"),d=i.n(u),l=i("xLLm"),f=i("K4CH"),p=i.n(f),b=i("xk4V"),m=i.n(b),g=new p.a,w="EXPO_CONSTANTS_INSTALLATION_ID",h=m()(),v={get name(){return"ExponentConstants"},get appOwnership(){return"expo"},get installationId(){var e;try{null!=(e=localStorage.getItem(w))&&"string"===typeof e||(e=m()(),localStorage.setItem(w,e))}catch(n){e=h}finally{return e}},get sessionId(){return h},get platform(){return{web:l.canUseDOM?p()(navigator.userAgent):void 0}},get isHeadless(){return!1},get isDevice(){return!0},get isDetached(){return!1},get expoVersion(){return this.manifest.sdkVersion||null},get linkingUri(){return l.canUseDOM?location.origin+location.pathname:""},get expoRuntimeVersion(){return this.expoVersion},get deviceName(){var e=g.getResult(),n=e.browser,i=e.engine,t=e.os;return n.name||i.name||t.name||void 0},get nativeAppVersion(){return null},get nativeBuildVersion(){return null},get systemFonts(){return[]},get statusBarHeight(){return 0},get deviceYearClass(){return null},get manifest(){return{name:"Techintel",slug:"techintel",description:"All about technology including a developer portfolio, stories, products and services, analysis and facts for your awareness.",extra:{PUBLIC_URL:"https://techintel.github.io",SPACE_ID:"gdquurxkfsex",ACCESS_TOKEN:"FhCAZchv43ZBtGQGMZhma-PTaVYEwb2yymp0kHIS2pE",CONTENT_TYPES:{BLOG:"techintelBlog",INFO:"techintelInfo",FORTFOLIO:"techintelFortfolio"}},privacy:"public",sdkVersion:"36.0.0",platforms:["ios","android","web"],version:"1.0.6",orientation:"portrait",icon:"./assets/images/icon.png",scheme:"myapp",splash:{image:"./assets/images/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{}}||{}},get experienceUrl(){return l.canUseDOM?location.origin+location.pathname:""},get debugMode(){return!1},getWebViewUserAgentAsync:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.canUseDOM){e.next=4;break}return e.abrupt("return",navigator.userAgent);case 4:return e.abrupt("return",null);case 5:case"end":return e.stop()}}),null,null,null,Promise)}};function y(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}v||console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");var x=null;v&&v.manifest&&"string"===typeof(x=v.manifest)&&(x=JSON.parse(x));var O=v||{},A=(O.name,c()(O,["name"]));n.default=function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?y(Object(i),!0).forEach((function(n){a()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({},A,{manifest:x,deviceId:A.installationId,linkingUrl:A.linkingUri})},"1OyB":function(e,n,i){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}i.d(n,"a",(function(){return t}))},"2+6g":function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var t=i("wx14"),r=i("U8pU");function o(e){return e&&"object"===Object(r.a)(e)&&e.constructor===Object}function a(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},r=i.clone?Object(t.a)({},e):e;return o(e)&&o(n)&&Object.keys(n).forEach((function(t){"__proto__"!==t&&(o(n[t])&&t in e?r[t]=a(e[t],n[t],i):r[t]=n[t])})),r}},"25BE":function(e,n,i){"use strict";function t(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}i.d(n,"a",(function(){return t}))},"4fRq":function(e,n){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var t=new Uint8Array(16);e.exports=function(){return i(t),t}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},BsWD:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var t=i("a3WO");function r(e,n){if(e){if("string"===typeof e)return Object(t.a)(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(t.a)(e,n):void 0}}},DSFK:function(e,n,i){"use strict";function t(e){if(Array.isArray(e))return e}i.d(n,"a",(function(){return t}))},Ff2n:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var t=i("zLVn");function r(e,n){if(null==e)return{};var i,r,o=Object(t.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}},HwzS:function(e,n,i){"use strict";n.a={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}},I2ZF:function(e,n){for(var i=[],t=0;t<256;++t)i[t]=(t+256).toString(16).substr(1);e.exports=function(e,n){var t=n||0,r=i;return[r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]]].join("")}},JX7q:function(e,n,i){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(n,"a",(function(){return t}))},K4CH:function(e,n,i){var t;!function(r,o){"use strict";var a="model",s="name",c="type",u="vendor",d="version",l="mobile",f="tablet",p="smarttv",b={extend:function(e,n){var i={};for(var t in e)n[t]&&n[t].length%2===0?i[t]=n[t].concat(e[t]):i[t]=e[t];return i},has:function(e,n){return"string"===typeof e&&-1!==n.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},m={rgx:function(e,n){for(var i,t,r,o,a,s,c=0;c<n.length&&!a;){var u=n[c],d=n[c+1];for(i=t=0;i<u.length&&!a;)if(a=u[i++].exec(e))for(r=0;r<d.length;r++)s=a[++t],"object"===typeof(o=d[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,s):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=s?s.replace(o[1],o[2]):void 0:this[o[0]]=s?o[1].call(this,s,o[2]):void 0:4==o.length&&(this[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):void 0):this[o]=s||void 0;c+=2}},str:function(e,n){for(var i in n)if("object"===typeof n[i]&&n[i].length>0){for(var t=0;t<n[i].length;t++)if(b.has(n[i][t],e))return"?"===i?void 0:i}else if(b.has(n[i],e))return"?"===i?void 0:i;return e}},g={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},w={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[s,d],[/(opios)[\/\s]+([\w\.]+)/i],[[s,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[s,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[s,d],[/(konqueror)\/([\w\.]+)/i],[[s,"Konqueror"],d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[s,"IE"],d],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[s,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[s,"Yandex"],d],[/(Avast)\/([\w\.]+)/i],[[s,"Avast Secure Browser"],d],[/(AVG)\/([\w\.]+)/i],[[s,"AVG Secure Browser"],d],[/(puffin)\/([\w\.]+)/i],[[s,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[s,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[s,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[s,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],d],[/(windowswechat qbcore)\/([\w\.]+)/i],[[s,"WeChat(Win) Desktop"],d],[/(micromessenger)\/([\w\.]+)/i],[[s,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[s,"Brave"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[s,d],[/(QQ)\/([\d\.]+)/i],[s,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[s,d],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[s,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[s,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[s],[/(LBBROWSER)/i],[s],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[s,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[s,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[s,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[s,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[s,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[s,"Sailfish Browser"],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,d],[/(dolfin)\/([\w\.]+)/i],[[s,"Dolphin"],d],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[s,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[s,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[s,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[s,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[s,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,s],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[s,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[d,m.str,g.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[a,u,[c,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[a,[u,"Apple"],[c,f]],[/(apple\s{0,1}tv)/i],[[a,"Apple TV"],[u,"Apple"],[c,p]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[u,a,[c,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[a,[u,"Amazon"],[c,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[a,m.str,g.device.amazon.model],[u,"Amazon"],[c,l]],[/android.+aft([bms])\sbuild/i],[a,[u,"Amazon"],[c,p]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[a,u,[c,l]],[/\((ip[honed|\s\w*]+);/i],[a,[u,"Apple"],[c,l]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[u,a,[c,l]],[/\(bb10;\s(\w+)/i],[a,[u,"BlackBerry"],[c,l]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[a,[u,"Asus"],[c,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[u,"Sony"],[a,"Xperia Tablet"],[c,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[u,"Sony"],[c,l]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[u,a,[c,"console"]],[/android.+;\s(shield)\sbuild/i],[a,[u,"Nvidia"],[c,"console"]],[/(playstation\s[34portablevi]+)/i],[a,[u,"Sony"],[c,"console"]],[/(sprint\s(\w+))/i],[[u,m.str,g.device.sprint.vendor],[a,m.str,g.device.sprint.model],[c,l]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[u,[a,/_/g," "],[c,l]],[/(nexus\s9)/i],[a,[u,"HTC"],[c,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[a,[u,"Huawei"],[c,l]],[/android.+(bah2?-a?[lw]\d{2})/i],[a,[u,"Huawei"],[c,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[u,a,[c,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[a,[u,"Microsoft"],[c,"console"]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[u,"Microsoft"],[c,l]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[a,[u,"Motorola"],[c,l]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[a,[u,"Motorola"],[c,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[u,b.trim],[a,b.trim],[c,p]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[u,"Samsung"],[c,p]],[/\(dtv[\);].+(aquos)/i],[a,[u,"Sharp"],[c,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[u,"Samsung"],a,[c,f]],[/smart-tv.+(samsung)/i],[u,[c,p],a],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[u,"Samsung"],a,[c,l]],[/sie-(\w*)/i],[a,[u,"Siemens"],[c,l]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[u,"Nokia"],a,[c,l]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[a,[u,"Acer"],[c,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[a,[u,"LG"],[c,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[u,"LG"],a,[c,f]],[/(lg) netcast\.tv/i],[u,a,[c,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[a,[u,"LG"],[c,l]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[u,a,[c,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[a,[u,"Lenovo"],[c,f]],[/(lenovo)[_\s-]?([\w-]+)/i],[u,a,[c,l]],[/linux;.+((jolla));/i],[u,a,[c,l]],[/((pebble))app\/[\d\.]+\s/i],[u,a,[c,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[u,a,[c,l]],[/crkey/i],[[a,"Chromecast"],[u,"Google"],[c,p]],[/android.+;\s(glass)\s\d/i],[a,[u,"Google"],[c,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[a,[u,"Google"],[c,f]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[a,[u,"Google"],[c,l]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[a,/_/g," "],[u,"Xiaomi"],[c,l]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[a,/_/g," "],[u,"Xiaomi"],[c,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[a,[u,"Meizu"],[c,l]],[/(mz)-([\w-]{2,})/i],[[u,"Meizu"],a,[c,l]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[a,[u,"OnePlus"],[c,l]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[a,[u,"RCA"],[c,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[a,[u,"Dell"],[c,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[a,[u,"Verizon"],[c,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[u,"Barnes & Noble"],a,[c,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[a,[u,"NuVision"],[c,f]],[/android.+;\s(k88)\sbuild/i],[a,[u,"ZTE"],[c,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[a,[u,"Swiss"],[c,l]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[a,[u,"Swiss"],[c,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[a,[u,"Zeki"],[c,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[u,"Dragon Touch"],a,[c,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[a,[u,"Insignia"],[c,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[a,[u,"NextBook"],[c,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[u,"Voice"],a,[c,l]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[u,"LvTel"],a,[c,l]],[/android.+;\s(PH-1)\s/i],[a,[u,"Essential"],[c,l]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[a,[u,"Envizen"],[c,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[u,a,[c,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[a,[u,"MachSpeed"],[c,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[u,a,[c,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[a,[u,"Rotor"],[c,f]],[/android.+(KS(.+))\s+build/i],[a,[u,"Amazon"],[c,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[u,a,[c,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,b.lowerize],u,a],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,p]],[/(android[\w\.\s\-]{0,9});.+build/i],[a,[u,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[s,[d,m.str,g.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[d,m.str,g.os.windows.version]],[/\((bb)(10);/i],[[s,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[s,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[s,"Symbian"],d],[/\((series40);/i],[s],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[s,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[s,d],[/(haiku)\s(\w+)/i],[s,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[s,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,d]]},h=function(e,n){if("object"===typeof e&&(n=e,e=void 0),!(this instanceof h))return new h(e,n).getResult();var i=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),t=n?b.extend(w,n):w;return this.getBrowser=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,t.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return m.rgx.call(e,i,t.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return m.rgx.call(e,i,t.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,t.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=e,this},this};h.VERSION="0.7.21",h.BROWSER={NAME:s,MAJOR:"major",VERSION:d},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:a,VENDOR:u,TYPE:c,CONSOLE:"console",MOBILE:l,SMARTTV:p,TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:s,VERSION:d},h.OS={NAME:s,VERSION:d},"undefined"!==typeof n?("undefined"!==typeof e&&e.exports&&(n=e.exports=h),n.UAParser=h):void 0===(t=function(){return h}.call(n,i,n,e))||(e.exports=t);var v=r&&(r.jQuery||r.Zepto);if(v&&!v.ua){var y=new h;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var n=y.getResult();for(var i in n)v.ua[i]=n[i]}}}("object"===typeof window?window:this)},KQm4:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var t=i("a3WO");var r=i("25BE"),o=i("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(t.a)(e)}(e)||Object(r.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},LybE:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));i("KQm4"),i("wx14");var t=i("U8pU"),r=(i("17x9"),i("bv9d"),{xs:0,sm:600,md:960,lg:1280,xl:1920}),o={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(r[e],"px)")}};function a(e,n,i){if(Array.isArray(n)){var r=e.theme.breakpoints||o;return n.reduce((function(e,t,o){return e[r.up(r.keys[o])]=i(n[o]),e}),{})}if("object"===Object(t.a)(n)){var a=e.theme.breakpoints||o;return Object.keys(n).reduce((function(e,t){return e[a.up(t)]=i(n[t]),e}),{})}return i(n)}},ODXe:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var t=i("DSFK");var r=i("BsWD"),o=i("PYwp");function a(e,n){return Object(t.a)(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],t=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(i.push(a.value),!n||i.length!==n);t=!0);}catch(c){r=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(r)throw o}}return i}}(e,n)||Object(r.a)(e,n)||Object(o.a)()}},OKji:function(e,n,i){"use strict";var t=i("q1tI"),r=i.n(t).a.createContext(null);n.a=r},PYwp:function(e,n,i){"use strict";function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(n,"a",(function(){return t}))},TqRt:function(e,n){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},U8pU:function(e,n,i){"use strict";function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.d(n,"a",(function(){return t}))},a3WO:function(e,n,i){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}i.d(n,"a",(function(){return t}))},aXM8:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var t=i("q1tI"),r=i.n(t),o=i("OKji");function a(){return r.a.useContext(o.a)}},bv9d:function(e,n,i){"use strict";var t=i("2+6g");n.a=function(e,n){return n?Object(t.a)(e,n,{clone:!1}):e}},"hfi/":function(e,n,i){"use strict";var t="function"===typeof Symbol&&Symbol.for;n.a=t?Symbol.for("mui.nested"):"__THEME_NESTED__"},o0o1:function(e,n,i){e.exports=i("ls82")},rePB:function(e,n,i){"use strict";function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}i.d(n,"a",(function(){return t}))},viY9:function(e,n,i){"use strict";var t=i("rePB"),r=i("Ff2n"),o=i("2+6g"),a=i("wx14"),s=["xs","sm","md","lg","xl"];function c(e,n,i){var r;return Object(a.a)({gutters:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({paddingLeft:n(2),paddingRight:n(2)},i,Object(t.a)({},e.up("sm"),Object(a.a)({paddingLeft:n(3),paddingRight:n(3)},i[e.up("sm")])))},toolbar:(r={minHeight:56},Object(t.a)(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),Object(t.a)(r,e.up("sm"),{minHeight:64}),r)},i)}var u={black:"#000",white:"#fff"},d={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},l={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},f={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},m={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},g={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},w=i("ye/S"),h={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:u.white,default:d[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},v={text:{primary:u.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:d[800],default:"#303030"},action:{active:u.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function y(e,n,i,t){var r=t.light||t,o=t.dark||1.5*t;e[n]||(e.hasOwnProperty(i)?e[n]=e[i]:"light"===n?e.light=Object(w.d)(e.main,r):"dark"===n&&(e.dark=Object(w.a)(e.main,o)))}function x(e){return Math.round(1e5*e)/1e5}var O={textTransform:"uppercase"},A='"Roboto", "Helvetica", "Arial", sans-serif';function k(e,n){var i="function"===typeof n?n(e):n,t=i.fontFamily,s=void 0===t?A:t,c=i.fontSize,u=void 0===c?14:c,d=i.fontWeightLight,l=void 0===d?300:d,f=i.fontWeightRegular,p=void 0===f?400:f,b=i.fontWeightMedium,m=void 0===b?500:b,g=i.fontWeightBold,w=void 0===g?700:g,h=i.htmlFontSize,v=void 0===h?16:h,y=i.allVariants,k=i.pxToRem,S=Object(r.a)(i,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var j=u/14,T=k||function(e){return"".concat(e/v*j,"rem")},E=function(e,n,i,t,r){return Object(a.a)({fontFamily:s,fontWeight:e,fontSize:T(n),lineHeight:i},s===A?{letterSpacing:"".concat(x(t/n),"em")}:{},{},r,{},y)},M={h1:E(l,96,1.167,-1.5),h2:E(l,60,1.2,-.5),h3:E(p,48,1.167,0),h4:E(p,34,1.235,.25),h5:E(p,24,1.334,0),h6:E(m,20,1.6,.15),subtitle1:E(p,16,1.75,.15),subtitle2:E(m,14,1.57,.1),body1:E(p,16,1.5,.15),body2:E(p,14,1.43,.15),button:E(m,14,1.75,.4,O),caption:E(p,12,1.66,.4),overline:E(p,12,2.66,1,O)};return Object(o.a)(Object(a.a)({htmlFontSize:v,pxToRem:T,round:x,fontFamily:s,fontSize:u,fontWeightLight:l,fontWeightRegular:p,fontWeightMedium:m,fontWeightBold:w},M),S,{clone:!1})}var S=.2,j=.14,T=.12;function E(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(S,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(j,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(T,")")].join(",")}var M=["none",E(0,2,1,-1,0,1,1,0,0,1,3,0),E(0,3,1,-2,0,2,2,0,0,1,5,0),E(0,3,3,-2,0,3,4,0,0,1,8,0),E(0,2,4,-1,0,4,5,0,0,1,10,0),E(0,3,5,-1,0,5,8,0,0,1,14,0),E(0,3,5,-1,0,6,10,0,0,1,18,0),E(0,4,5,-2,0,7,10,1,0,2,16,1),E(0,5,5,-3,0,8,10,1,0,3,14,2),E(0,5,6,-3,0,9,12,1,0,3,16,2),E(0,6,6,-3,0,10,14,1,0,4,18,3),E(0,6,7,-4,0,11,15,1,0,4,20,3),E(0,7,8,-4,0,12,17,2,0,5,22,4),E(0,7,8,-4,0,13,19,2,0,5,24,4),E(0,7,9,-4,0,14,21,2,0,5,26,4),E(0,8,9,-5,0,15,22,2,0,6,28,5),E(0,8,10,-5,0,16,24,2,0,6,30,5),E(0,8,11,-5,0,17,26,2,0,6,32,5),E(0,9,11,-5,0,18,28,2,0,7,34,6),E(0,9,12,-6,0,19,29,2,0,7,36,6),E(0,10,13,-6,0,20,31,3,0,8,38,7),E(0,10,13,-6,0,21,33,3,0,8,40,7),E(0,10,14,-6,0,22,35,3,0,8,42,7),E(0,11,14,-7,0,23,36,3,0,9,44,8),E(0,11,15,-7,0,24,38,3,0,9,46,8)],B={borderRadius:4},R=i("+Hmc");var N=i("wpWl"),I=i("HwzS");n.a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.breakpoints,i=void 0===n?{}:n,t=e.mixins,x=void 0===t?{}:t,O=e.palette,A=void 0===O?{}:O,S=e.spacing,j=e.typography,T=void 0===j?{}:j,E=Object(r.a)(e,["breakpoints","mixins","palette","spacing","typography"]),C=function(e){var n=e.primary,i=void 0===n?{light:l[300],main:l[500],dark:l[700]}:n,t=e.secondary,s=void 0===t?{light:f.A200,main:f.A400,dark:f.A700}:t,c=e.error,x=void 0===c?{light:p[300],main:p[500],dark:p[700]}:c,O=e.warning,A=void 0===O?{light:b[300],main:b[500],dark:b[700]}:O,k=e.info,S=void 0===k?{light:m[300],main:m[500],dark:m[700]}:k,j=e.success,T=void 0===j?{light:g[300],main:g[500],dark:g[700]}:j,E=e.type,M=void 0===E?"light":E,B=e.contrastThreshold,R=void 0===B?3:B,N=e.tonalOffset,I=void 0===N?.2:N,C=Object(r.a)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function z(e){return Object(w.c)(e,v.text.primary)>=R?v.text.primary:h.text.primary}var _=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=Object(a.a)({},e)).main&&e[n]&&(e.main=e[n]),!e.main)throw new Error(["Material-UI: the color provided to augmentColor(color) is invalid.","The color object needs to have a `main` property or a `".concat(n,"` property.")].join("\n"));if("string"!==typeof e.main)throw new Error(["Material-UI: the color provided to augmentColor(color) is invalid.","`color.main` should be a string, but `".concat(JSON.stringify(e.main),"` was provided instead."),"","Did you intend to use one of the following approaches?","",'import {\xa0green } from "@material-ui/core/colors";',"","const theme1 = createMuiTheme({ palette: {","  primary: green,","} });","","const theme2 = createMuiTheme({ palette: {","  primary: { main: green[500] },","} });"].join("\n"));return y(e,"light",i,I),y(e,"dark",t,I),e.contrastText||(e.contrastText=z(e.main)),e},V={dark:v,light:h};return Object(o.a)(Object(a.a)({common:u,type:M,primary:_(i),secondary:_(s,"A400","A200","A700"),error:_(x),warning:_(A),info:_(S),success:_(T),grey:d,contrastThreshold:R,getContrastText:z,augmentColor:_,tonalOffset:I},V[M]),C)}(A),z=function(e){var n=e.values,i=void 0===n?{xs:0,sm:600,md:960,lg:1280,xl:1920}:n,t=e.unit,o=void 0===t?"px":t,c=e.step,u=void 0===c?5:c,d=Object(r.a)(e,["values","unit","step"]);function l(e){var n="number"===typeof i[e]?i[e]:e;return"@media (min-width:".concat(n).concat(o,")")}function f(e,n){var t=s.indexOf(n);return t===s.length-1?l(e):"@media (min-width:".concat("number"===typeof i[e]?i[e]:e).concat(o,") and ")+"(max-width:".concat((-1!==t&&"number"===typeof i[s[t+1]]?i[s[t+1]]:n)-u/100).concat(o,")")}return Object(a.a)({keys:s,values:i,up:l,down:function(e){var n=s.indexOf(e)+1,t=i[s[n]];return n===s.length?l("xs"):"@media (max-width:".concat(("number"===typeof t&&n>0?t:e)-u/100).concat(o,")")},between:f,only:function(e){return f(e,e)},width:function(e){return i[e]}},d)}(i),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var n=Object(R.a)({spacing:e}),i=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return 0===i.length?n(1):1===i.length?n(i[0]):i.map((function(e){if("string"===typeof e)return e;var i=n(e);return"number"===typeof i?"".concat(i,"px"):i})).join(" ")};return Object.defineProperty(i,"unit",{get:function(){return e}}),i.mui=!0,i}(S),V=Object(o.a)({breakpoints:z,direction:"ltr",mixins:c(z,_,x),overrides:{},palette:C,props:{},shadows:M,typography:k(C,T),spacing:_,shape:B,transitions:N.a,zIndex:I.a},E),D=arguments.length,L=new Array(D>1?D-1:0),P=1;P<D;P++)L[P-1]=arguments[P];return V=L.reduce((function(e,n){return Object(o.a)(e,n)}),V)}},vuIU:function(e,n,i){"use strict";function t(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}i.d(n,"a",(function(){return r}))},wpWl:function(e,n,i){"use strict";i.d(n,"b",(function(){return o}));var t=i("Ff2n"),r={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},o={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function a(e){return"".concat(Math.round(e),"ms")}n.a={easing:r,duration:o,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.duration,s=void 0===i?o.standard:i,c=n.easing,u=void 0===c?r.easeInOut:c,d=n.delay,l=void 0===d?0:d;Object(t.a)(n,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"===typeof s?s:a(s)," ").concat(u," ").concat("string"===typeof l?l:a(l))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}}},xk4V:function(e,n,i){var t=i("4fRq"),r=i("I2ZF");e.exports=function(e,n,i){var o=n&&i||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||t)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var s=0;s<16;++s)n[o+s]=a[s];return n||r(a)}},"ye/S":function(e,n,i){"use strict";function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(n,e),i)}function r(e){if(e.type)return e;if("#"===e.charAt(0))return r(function(e){e=e.substr(1);var n=new RegExp(".{1,".concat(e.length/3,"}"),"g"),i=e.match(n);return i&&1===i[0].length&&(i=i.map((function(e){return e+e}))),i?"rgb(".concat(i.map((function(e){return parseInt(e,16)})).join(", "),")"):""}(e));var n=e.indexOf("("),i=e.substring(0,n);if(-1===["rgb","rgba","hsl","hsla"].indexOf(i))throw new Error(["Material-UI: unsupported `".concat(e,"` color."),"We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."].join("\n"));var t=e.substring(n+1,e.length-1).split(",");return{type:i,values:t=t.map((function(e){return parseFloat(e)}))}}function o(e){var n=e.type,i=e.values;return-1!==n.indexOf("rgb")?i=i.map((function(e,n){return n<3?parseInt(e,10):e})):-1!==n.indexOf("hsl")&&(i[1]="".concat(i[1],"%"),i[2]="".concat(i[2],"%")),"".concat(n,"(").concat(i.join(", "),")")}function a(e,n){var i=s(e),t=s(n);return(Math.max(i,t)+.05)/(Math.min(i,t)+.05)}function s(e){var n="hsl"===(e=r(e)).type?r(function(e){var n=(e=r(e)).values,i=n[0],t=n[1]/100,a=n[2]/100,s=t*Math.min(a,1-a),c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+i/30)%12;return a-s*Math.max(Math.min(n-3,9-n,1),-1)},u="rgb",d=[Math.round(255*c(0)),Math.round(255*c(8)),Math.round(255*c(4))];return"hsla"===e.type&&(u+="a",d.push(n[3])),o({type:u,values:d})}(e)).values:e.values;return n=n.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*n[0]+.7152*n[1]+.0722*n[2]).toFixed(3))}function c(e,n){return e=r(e),n=t(n),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),e.values[3]=n,o(e)}function u(e,n){if(e=r(e),n=t(n),-1!==e.type.indexOf("hsl"))e.values[2]*=1-n;else if(-1!==e.type.indexOf("rgb"))for(var i=0;i<3;i+=1)e.values[i]*=1-n;return o(e)}function d(e,n){if(e=r(e),n=t(n),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*n;else if(-1!==e.type.indexOf("rgb"))for(var i=0;i<3;i+=1)e.values[i]+=(255-e.values[i])*n;return o(e)}i.d(n,"c",(function(){return a})),i.d(n,"b",(function(){return c})),i.d(n,"a",(function(){return u})),i.d(n,"d",(function(){return d}))}}]);