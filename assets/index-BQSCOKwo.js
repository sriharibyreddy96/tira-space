var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Gd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function ge(){j(de),j(fe),j(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Gd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),tp._currentValue=se)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:_p(e.type)):e}function lt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[dt])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return Ee.call(jt,e)?!0:Ee.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(Cu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=f({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=f({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(f({},Mn,{dataTransfer:0})),Fn=wn(f({},Dn,{relatedTarget:0})),In=wn(f({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(f({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(f({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(f({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(f({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(f({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(f({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(f({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(f({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var P=mn&&`TextEvent`in window&&!Qn,$n=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Zn&&nr(e,t)?(e=bn(),yn=vn=_n=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=kd(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){Sd(e,0)}function pr(e){if(Bt(St(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(mn){var gr;if(mn){var _r=`oninput`in document;if(!_r){var F=document.createElement(`div`);F.setAttribute(`oninput`,`return;`),_r=typeof F.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function vr(){ur&&(ur.detachEvent(`onpropertychange`,yr),dr=ur=null)}function yr(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,sn(e)),fn(fr,t)}}function br(e,t,n){e===`focusin`?(vr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Sr(e,t){if(e===`click`)return pr(t)}function Cr(e,t){if(e===`input`||e===`change`)return pr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=mn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==Vt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=kd(Pr,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};mn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Dt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Kf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=di(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=di(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=di(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var I=null,Ii=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Y(bd[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Fd(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(I=e.return;I;)switch(I.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:I=I.return}}function Ui(e){if(e!==I)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Kd(e.type,e.memoizedProps)),n=!n),n&&Ii&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=pf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=pf(e)}else t===27?(t=Ii,ef(e.type)?(e=ff,ff=null,Ii=e):Ii=t):Ii=I?df(e.stateNode.nextSibling):null;return!0}function Wi(){Ii=I=null,L=!1}function Gi(){var e=Li;return e!==null&&(q===null?q=e:q.push.apply(q,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){M(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,j(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[tp]:e.push(tp))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,R=null;function ha(e,t){if(fa===null){var n=fa=[];pa=0,ma=md(),R={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(ga,ga),t}function ga(){if(--pa===0&&fa!==null){R!==null&&(R.status=`fulfilled`);var e=fa;fa=null,ma=0,R=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=k.S;k.S=function(e,t){ru=je(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=ue(null);function ba(){var e=ya.current;return e===null?Hl.pooledCache:e}function xa(e,t){t===null?M(ya,ya.current):M(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:la._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=Hl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=hi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case O:return t=ka(t),f(e,t,n)}if(oe(t)||re(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ka(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ka(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=ka(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function z(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=R;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(G&p)===p:(r&p)===p){p!==0&&p===ma&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Va=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=ue(null),$a=ue(0);function eo(e,t){e=ql,M($a,e),M(Qa,t),ql=e|t.baseLanes}function to(){M($a,ql),M(Qa,Qa.current)}function no(){ql=$a.current,j(Qa),j($a)}var ro=ue(null),io=null;function ao(e){var t=e.alternate;M(uo,uo.current&1),M(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){M(uo,uo.current),M(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(M(uo,uo.current),M(ro,e),io===null&&(io=e)):co(e)}function co(){M(uo,uo.current),M(ro,ro.current)}function lo(e){j(ro),io===e&&(io=null),j(uo)}var uo=ue(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cf(n)||lf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,H=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){k.H=zs;var t=V!==null&&V.next!==null;if(po=0,H=V=B=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,H=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}po=0,H=V=B=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return H===null?B.memoizedState=H=e:H=H.next=e,H}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=H===null?B.memoizedState:H.next;if(t!==null)H=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},H===null?B.memoizedState=H=e:H=H.next=e}return H}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Oa(yo,e,t),t=B,(H===null?t.memoizedState:H.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((po&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Yl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ic=!0,d&&(n=R,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||H!==null&&H.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),Hl===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&vu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=Hl.formState;if(n!==null){a:{var r=B;if(L){if(Ii){b:{for(var i=Ii,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=df(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ii=df(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),B.lanes|=e,Yl|=e,n)}function Ss(e,t,n,r){return Tr(n,t)?n:Qa.current===null?!(po&42)||po&1073741824&&!(G&261930)?(ic=!0,e.memoizedState=n):(e=_u(),B.lanes|=e,Yl|=e,t):(e=xs(e,n,r),Tr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),gu(e)):Ps(e,t,r,gu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,se,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},gu())}function Os(){return ra(tp)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Wa(n);var r=z(t,e,n);r!==null&&(vu(r,t,n),Ga(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(vu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,gu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),Hl===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return vu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&vu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var zs={readContext:ra,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Hl===null)throw Error(i(349));G&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=Hl.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=z(e,i,r),t!==null&&(vu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=z(e,i,r),t!==null&&(vu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=z(e,r,n),t!==null&&(vu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Au():n.alternate===null&&Jl===0&&(Jl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Au(),!1}if(L)return t=ro.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ka(e,a),Jl!==4&&(Jl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),eu===null?eu=[o]:eu.push(o),Jl!==4&&(Jl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),to(),co(t)):(xa(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),to(),so(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=Ii)?(e=sf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,I=t,Ii=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=Hl,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),vu(r,e,s),rc;Au(),t=pc(e,t,n)}else e=o.treeContext,Ii=df(s.nextSibling),I=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ql),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(uo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?ao(t):co(t),(e=Ii)?(e=sf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,I=t,Ii=null)):e=null,e===null)throw Bi(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),lf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=Hl,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),vu(s,e,r),rc;cf(c)||Au(),t=Ec(e,t,n)}else cf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ii=df(c.nextSibling),I=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(uo,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(uo,uo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ii=df(e.firstChild),I=t,L=!0,Li=null,Ri=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Ud(pe.current).createElement(n),r[dt]=t,r[ft]=e,Ld(r,n,e),wt(r),t.stateNode=r):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&L&&(r=t.stateNode=hf(t.type,t.pendingProps,pe.current),I=t,Ri=!0,a=Ii,ef(t.type)?(ff=a,Ii=df(r.firstChild)):Ii=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=Ii)&&(r=af(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,I=t,Ii=df(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Kd(a,o)?r=null:s!==null&&Kd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),tp._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=Ii)&&(n=of(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,I=t,Ii=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=ba(),a===null&&(a=Hl,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Ua(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qf(t))if(Du())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:N(),e.lanes|=t,$l|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zc(t),null;case 1:return zc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),zc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(zc(t),Fc(t,a,null,r,n)):(zc(t),Ic(t,o))):o?o===e.memoizedState?(zc(t),t.flags&=-16777217):(Pc(t),zc(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),zc(t),Fc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}e=de.current,Ui(t)?Vi(t,e):(e=hf(a,r,n),t.stateNode=e,Pc(t))}return zc(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}if(o=de.current,Ui(t))Vi(t,o);else{var s=Ud(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Ld(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return zc(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=I,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Fd(e.nodeValue,n)),e||Bi(t,!0)}else e=Ud(e).createTextNode(r),e[dt]=t,t.stateNode=e}return zc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return zc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),zc(t),null);case 4:return ge(),e===null&&Td(t.stateNode.containerInfo),zc(t),null;case 10:return Zi(t.type),zc(t),null;case 19:if(j(uo),r=t.memoizedState,r===null)return zc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Jl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return M(uo,uo.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>iu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return zc(t),null}else 2*je()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(zc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=uo.current,M(uo,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(zc(t),t.subtreeFlags&6&&(t.flags|=8192)):zc(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),zc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(uo),null;case 4:return ge(),null;case 10:return Zi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&j(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Hc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:j(uo);break;case 10:Zi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&j(ya);break;case 24:Zi(la)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){J(e,e.return,t)}}}function Kc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[ft]=t}catch(t){J(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ef(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ef(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[dt]=e,t[ft]=n}catch(t){J(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Vd=up,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},up=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:rf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Uc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),uf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?Tl(e,n,(n.subtreeFlags&8772)!=0):Cl(e,n),nl=i,rl=a}break;case 30:break;default:Cl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=ul,i=dl;ef(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),gf(n.stateNode),ul=r,dl=i;break;case 5:rl||Jc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null)if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:ul!==null&&(dl?(e=ul,tf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):tf(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),fl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,fl(e,t,n),rl=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){J(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){J(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ef(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Ld(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Wf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Wf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Gf(a,e.type,e.stateNode);else e.stateNode=zf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Gf(a,e.type,e.stateNode):zf(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Uf=null,a=yl,yl=yf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){J(e,e.return,t)}il&&(il=!1,Sl(e));break;case 4:r=yl,yl=yf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,vl(t,e),rl=d,nl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?nf(m,!0):nf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),wl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),wl(t);break;case 27:gf(t.stateNode);case 26:case 5:Jc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Uc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),qc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Jf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=yf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Bl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,Hl=null,W=null,G=0,K=0,Ul=null,Wl=!1,Gl=!1,Kl=!1,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=null,q=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return U&2&&G!==0?G&-G:k.T===null?ct():md()}function _u(){if(Ql===0)if(!(G&536870912)||L){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Ql=e}else Ql=536870912;return e=ro.current,e!==null&&(e.flags|=32),Ql}function vu(e,t,n){(e===Hl&&(K===2||K===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,G,Ql,!1)),tt(e,n),(!(U&2)||e!==Hl)&&(e===Hl&&(!(U&2)&&(Xl|=n),Jl===4&&Su(e,G,Ql,!1)),od(e))}function yu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Gl&&!r&&Su(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=eu;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(Kl&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,a=4;break a}o=q,q=a,o!==null&&(q===null?q=o:q.push.apply(q,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Ql,!Wl);break a;case 2:q=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-je(),10<a)){if(Su(r,t,Ql,!Wl),Ze(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Yd(bu.bind(null,r,n,q,au,tu,t,Ql,Xl,$l,Wl,o,`Throttled`,-0,0),a);break a}bu(r,n,q,au,tu,t,Ql,Xl,$l,Wl,o,null,-0,0)}}break}while(1);od(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Pl(t,a,d);var m=(a&62914560)===a?nu-je():(a&4194048)===a?ru-je():0;if(m=Xf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Zl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function Cu(){return U&6?!0:(sd(0,!1),!1)}function wu(){if(W!==null){if(K===0)var e=W.return;else e=W,Yi=Ji=null,ko(e),Na=null,Pa=0,e=W;for(;e!==null;)Hc(e.alternate,e),e=e.return;W=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),Hl=e,W=n=pi(e.current,null),G=t,K=0,Ul=null,Wl=!1,Gl=Qe(e,t),Kl=!1,$l=Ql=Zl=Xl=Yl=Jl=0,q=eu=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return ql=t,ri(),n}function Eu(e,t){B=null,k.H=zs,t===Ca||t===Ta?(t=ja(),K=3):t===wa?(t=ja(),K=4):K=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ul=t,W===null&&(Jl=1,Zs(e,xi(t,e.current)))}function Du(){var e=ro.current;return e===null?!0:(G&4194048)===G?io===null:(G&62914560)===G||G&536870912?e===io:!1}function Ou(){var e=k.H;return k.H=zs,e===null?zs:e}function ku(){var e=k.A;return k.A=Bl,e}function Au(){Jl=4,Wl||(G&4194048)!==G&&ro.current!==null||(Gl=!0),!(Yl&134217727)&&!(Xl&134217727)||Hl===null||Su(Hl,G,Ql,!1)}function ju(e,t,n){var r=U;U|=2;var i=Ou(),a=ku();(Hl!==e||G!==t)&&(au=null,Tu(e,t)),t=!1;var o=Jl;a:do try{if(K!==0&&W!==null){var s=W,c=Ul;switch(K){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=K;if(K=0,Ul=null,Lu(e,s,c,l),n&&Gl){o=0;break a}break;default:l=K,K=0,Ul=null,Lu(e,s,c,l)}}Mu(),o=Jl;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,U=r,k.H=i,k.A=a,W===null&&(Hl=null,G=0,ri()),o}function Mu(){for(;W!==null;)Fu(W)}function Nu(e,t){var n=U;U|=2;var r=Ou(),a=ku();Hl!==e||G!==t?(au=null,iu=je()+500,Tu(e,t)):Gl=Qe(e,t);a:do try{if(K!==0&&W!==null){t=W;var o=Ul;b:switch(K){case 1:K=0,Ul=null,Lu(e,t,o,1);break;case 2:case 9:if(Da(o)){K=0,Ul=null,Iu(t);break}t=function(){K!==2&&K!==9||Hl!==e||(K=7),od(e)},o.then(t,t);break a;case 3:K=7;break a;case 4:K=5;break a;case 7:Da(o)?(K=0,Ul=null,Iu(t)):(K=0,Ul=null,Lu(e,t,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var c=W;if(s?qf(s):c.stateNode.complete){K=0,Ul=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,Ru(u))}break b}}K=0,Ul=null,Lu(e,t,o,5);break;case 6:K=0,Ul=null,Lu(e,t,o,6);break;case 8:wu(),Jl=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,U=n,W===null?(Hl=null,G=0,ri(),Jl):0}function Pu(){for(;W!==null&&!ke();)Fu(W)}function Fu(e){var t=Nc(e.alternate,e,ql);e.memoizedProps=e.pendingProps,t===null?Ru(e):W=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:ko(t);default:Hc(n,t),t=W=mi(t,ql),t=Nc(n,t,ql)}e.memoizedProps=e.pendingProps,t===null?Ru(e):W=t}function Lu(e,t,n,r){Yi=Ji=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,G)){Jl=1,Zs(e,xi(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;Jl=1,Zs(e,xi(n,e.current)),W=null;return}t.flags&32768?(L||r===1?e=!0:Gl||G&536870912?e=!1:(Wl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Wl);return}e=t.return;var n=Bc(t.alternate,t,ql);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Jl===0&&(Jl=5)}function zu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);Jl=6,W=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(su!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,nt(e,n,o,s,c,l),e===Hl&&(W=Hl=null,G=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Fe,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=U,U|=4;try{sl(e,t,n)}finally{U=s,A.p=a,k.T=r}}su=1,Vu(),Hu(),Uu()}}function Vu(){if(su===1){su=0;var e=cu,t=lu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=U;U|=4;try{bl(t,e);var a=Hd,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}up=!!Vd,Hd=Vd=null}finally{U=i,A.p=r,k.T=n}}e.current=t,su=2}}function Hu(){if(su===2){su=0;var e=cu,t=lu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=U;U|=4;try{cl(e,t.alternate,t)}finally{U=i,A.p=r,k.T=n}}su=3}}function Uu(){if(su===4||su===3){su=0,Ae();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),st(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}uu&3&&Gu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,sd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=st(uu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,sd(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{A.p=a,k.T=r,Wu(e,t)}}function qu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=z(e,t,2),e!==null&&(tt(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=xi(n,e),n=ec(2),r=z(t,n,2),r!==null&&(tc(n,r,t,e),tt(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Kl=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Hl===e&&(G&n)===n&&(Jl===4||Jl===3&&(G&62914560)===G&&300>je()-nu?!(U&2)&&Tu(e,0):Zl|=n,$l===G&&($l=0)),od(e)}function Xu(e,t){t===0&&(t=N()),e=oi(e,t),e!==null&&(tt(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return De(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=G,a=Ze(r,r===Hl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,fd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Jd()&&(e=ad);for(var t=je(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}su!==0&&su!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Hl,n=G,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(K===2||K===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),st(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=dd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=G;return r=Ze(e,e===Hl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),ud(e,je()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(Gu())return null;yu(e,t,!0)}function pd(){Qd(function(){U&6?De(Ne,cd):ld()})}function md(){if(ad===0){var e=ma;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<Zr.length;vd++){var yd=Zr[vd];Qr(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var wd=`_reactListening`+Math.random().toString(36).slice(2);function Td(e){if(!e[wd]){e[wd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||Cd(t,!1,e),Cd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wd]||(t[wd]=!0,Cd(`selectionchange`,!1,t))}}function Ed(e,t,n,r){switch(_p(t)){case 2:var i=dp;break;case 8:i=fp;break;default:i=pp}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Ur:case Wr:case Gr:l=In;break;case Yr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Od(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ad,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&jd(s,c,l,d,!1),u!==null&&f!==null&&jd(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c))if(hr)v=Cr;else{v=xr;var y=br}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=mr):v=Sr;if(v&&=v(e,r)){lr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ir?nr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&($n&&n.locale!==`ko`&&(ir||x!==`onCompositionStart`?x===`onCompositionEnd`&&ir&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ir=!0)),y=kd(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=rr(n),b!==null&&(x.data=b)))),(b=P?ar(e,n):or(e,n))&&(x=kd(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function Od(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Od(e,i,a)),i=pn(e,t),i!=null&&r.push(Od(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ad(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Od(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Od(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function Pd(e){return(typeof e==`string`?e:``+e).replace(Md,`
`).replace(Nd,``)}function Fd(e,t){return t=Pd(t),Pd(e)===t}function X(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,a.name,a,null),X(e,t,`formEncType`,a.formEncType,a,null),X(e,t,`formMethod`,a.formMethod,a,null),X(e,t,`formTarget`,a.formTarget,a,null)):(X(e,t,`encType`,a.encType,a,null),X(e,t,`method`,a.method,a,null),X(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Id(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,o,s,n,null)}}a&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:X(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:X(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:X(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Y(bd[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||X(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&X(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&X(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Vd=null,Hd=null;function Ud(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qd=null;function Jd(){var e=window.event;return e&&e.type===`popstate`?e===qd?!1:(qd=e,!0):(qd=null,!1)}var Yd=typeof setTimeout==`function`?setTimeout:void 0,Xd=typeof clearTimeout==`function`?clearTimeout:void 0,Zd=typeof Promise==`function`?Promise:void 0,Qd=typeof queueMicrotask==`function`?queueMicrotask:Zd===void 0?Yd:function(e){return Zd.resolve(null).then(e).catch($d)};function $d(e){setTimeout(function(){throw e})}function ef(e){return e===`head`}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)gf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,gf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&gf(e.ownerDocument.body);n=i}while(n);Fp(t)}function nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function rf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rf(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function af(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=df(e.nextSibling),e===null)break}return null}function of(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=df(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=df(e.nextSibling),e===null))return null;return e}function cf(e){return e.data===`$?`||e.data===`$~`}function lf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function uf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function df(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var ff=null;function pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return df(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hf(e,t,n){switch(t=Ud(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var _f=new Map,vf=new Set;function yf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bf=A.d;A.d={f:xf,r:Sf,D:Tf,C:Ef,L:Df,m:Of,X:Af,S:kf,M:jf};function xf(){var e=bf.f(),t=Cu();return e||t}function Sf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):bf.r(e)}var Cf=typeof document>`u`?null:document;function wf(e,t,n){var r=Cf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),vf.has(i)||(vf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e){bf.D(e),wf(`dns-prefetch`,e,null)}function Ef(e,t){bf.C(e,t),wf(`preconnect`,e,t)}function Df(e,t,n){bf.L(e,t,n);var r=Cf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Nf(e);break;case`script`:a=Lf(e)}_f.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),_f.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Pf(a))||t===`script`&&r.querySelector(Rf(a))||(t=r.createElement(`link`),Ld(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Of(e,t){bf.m(e,t);var n=Cf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Lf(e)}if(!_f.has(a)&&(e=f({rel:`modulepreload`,href:e},t),_f.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Rf(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),wt(r),n.head.appendChild(r)}}}function kf(e,t,n){bf.S(e,t,n);var r=Cf;if(r&&e){var i=Ct(r).hoistableStyles,a=Nf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Pf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=_f.get(a))&&Vf(e,n);var c=o=r.createElement(`link`);wt(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Bf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Af(e,t){bf.X(e,t);var n=Cf;if(n&&e){var r=Ct(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=f({src:e,async:!0},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),wt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t){bf.M(e,t);var n=Cf;if(n&&e){var r=Ct(n).hoistableScripts,i=Lf(e),a=r.get(i);a||(a=n.querySelector(Rf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=_f.get(i))&&Hf(e,t),a=n.createElement(`script`),wt(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t,n,r){var a=(a=pe.current)?yf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Nf(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Nf(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Pf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_f.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_f.set(e,n),o||If(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Lf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Nf(e){return`href="`+Ut(e)+`"`}function Pf(e){return`link[rel="stylesheet"][`+e+`]`}function Ff(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function If(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),wt(t),e.head.appendChild(t))}function Lf(e){return`[src="`+Ut(e)+`"]`}function Rf(e){return`script[async]`+e}function zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Ld(r,`style`,a),Bf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Nf(n.href);var o=e.querySelector(Pf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Ff(n),(a=_f.get(a))&&Vf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(o,`link`,r),t.state.loading|=4,Bf(o,n.precedence,e),t.instance=o;case`script`:return o=Lf(n.src),(a=e.querySelector(Rf(o)))?(t.instance=a,wt(a),a):(r=n,(a=_f.get(o))&&(r=f({},n),Hf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Ld(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Bf(r,n.precedence,e));return t.instance}function Bf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Uf=null;function Wf(e,t,n){if(Uf===null){var r=new Map,i=Uf=new Map;i.set(n,r)}else i=Uf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Gf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Kf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function qf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Jf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Nf(r.href),a=t.querySelector(Pf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Zf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Ff(r),(i=_f.get(i))&&Vf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Zf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Yf=0;function Xf(e,t){return e.stylesheets&&e.count===0&&$f(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Yf===0&&(Yf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qf=null;function $f(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qf=new Map,t.forEach(ep,e),Qf=null,Zf.call(e))}function ep(e,t){if(!(t.state.loading&4)){var n=Qf.get(e);if(n)var r=n.get(null);else{n=new Map,Qf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Zf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var tp={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function np(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function rp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new np(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function ip(e){return e?(e=li,e):li}function ap(e,t,n,r,i,a){i=ip(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=z(e,r,t),n!==null&&(vu(n,e,t),Ga(n,e,t))}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sp(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function cp(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&vu(t,e,67108864),sp(e,67108864)}}function lp(e){if(e.tag===13||e.tag===31){var t=gu();t=ot(t);var n=oi(e,t);n!==null&&vu(n,e,t),sp(e,t)}}var up=!0;function dp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,pp(e,t,n,r)}finally{A.p=a,k.T=i}}function fp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,pp(e,t,n,r)}finally{A.p=a,k.T=i}}function pp(e,t,n,r){if(up){var i=mp(r);if(i===null)Dd(e,t,r,hp,n),Ep(e,r);else if(Op(i,e,t,n,r))r.stopPropagation();else if(Ep(e,r),t&4&&-1<Tp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}od(a),!(U&6)&&(iu=je()+500,sd(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&vu(s,a,2),Cu(),sp(a,2)}if(a=mp(r),a===null&&Dd(e,t,r,hp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}function mp(e){return e=sn(e),gp(e)}var hp=null;function gp(e){if(hp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hp=e,null}function _p(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var vp=!1,yp=null,bp=null,xp=null,Sp=new Map,Cp=new Map,wp=[],Tp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ep(e,t){switch(e){case`focusin`:case`focusout`:yp=null;break;case`dragenter`:case`dragleave`:bp=null;break;case`mouseover`:case`mouseout`:xp=null;break;case`pointerover`:case`pointerout`:Sp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Cp.delete(t.pointerId)}}function Dp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,n,r,i){switch(t){case`focusin`:return yp=Dp(yp,e,t,n,r,i),!0;case`dragenter`:return bp=Dp(bp,e,t,n,r,i),!0;case`mouseover`:return xp=Dp(xp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Sp.set(a,Dp(Sp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Cp.set(a,Dp(Cp.get(a)||null,e,t,n,r,i)),!0}return!1}function kp(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){lp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ap(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&cp(t),e.blockedOn=n,!1;t.shift()}return!0}function jp(e,t,n){Ap(e)&&n.delete(t)}function Mp(){vp=!1,yp!==null&&Ap(yp)&&(yp=null),bp!==null&&Ap(bp)&&(bp=null),xp!==null&&Ap(xp)&&(xp=null),Sp.forEach(jp),Cp.forEach(jp)}function Np(e,n){e.blockedOn===n&&(e.blockedOn=null,vp||(vp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Mp)))}var Pp=null;function Z(e){Pp!==e&&(Pp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pp===e&&(Pp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(gp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Np(t,e)}yp!==null&&Np(yp,e),bp!==null&&Np(bp,e),xp!==null&&Np(xp,e),Sp.forEach(t),Cp.forEach(t);for(var n=0;n<wp.length;n++){var r=wp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wp.length&&(n=wp[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&wp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Z(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(gp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Z(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ap(n,gu(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ap(e.current,2,null,e,null,null),Cu(),t[pt]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wp.length&&t!==0&&t<wp[n].priority;n++);wp.splice(n,0,e),n===0&&kp(e)}};var zp=n.version;if(zp!==`19.2.5`)throw Error(i(527,zp,`19.2.5`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{Be=Vp.inject(Bp),Ve=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[pt]=t.current,Td(e),new Lp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()}));function b(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var x=o((()=>{})),S=c({default:()=>w}),C,w,T=o((()=>{x(),C=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,w=b(function(e){return C.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91})})),E=`-ms-`,D=`-moz-`,O=`-webkit-`,ee=`comm`,te=`rule`,ne=`decl`,re=`@import`,ie=`@namespace`,ae=`@keyframes`,oe=`@layer`,k=Math.abs,A=String.fromCharCode,se=Object.assign;function ce(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function le(e){return e.trim()}function ue(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function M(e,t,n){return e.indexOf(t,n)}function de(e,t){return e.charCodeAt(t)|0}function fe(e,t,n){return e.slice(t,n)}function pe(e){return e.length}function me(e){return e.length}function he(e,t){return t.push(e),e}function ge(e,t){return e.map(t).join(``)}function _e(e,t){return e.filter(function(e){return!ue(e,t)})}var ve=1,ye=1,be=0,xe=0,Se=0,Ce=``;function we(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ve,column:ye,length:o,return:``,siblings:s}}function Te(e,t){return se(we(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=Te(e.root,{children:[e]});he(e,e.siblings)}function De(){return Se}function Oe(){return Se=xe>0?de(Ce,--xe):0,ye--,Se===10&&(ye=1,ve--),Se}function ke(){return Se=xe<be?de(Ce,xe++):0,ye++,Se===10&&(ye=1,ve++),Se}function Ae(){return de(Ce,xe)}function je(){return xe}function Me(e,t){return fe(Ce,e,t)}function Ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return ve=ye=1,be=pe(Ce=e),xe=0,[]}function Fe(e){return Ce=``,e}function Ie(e){return le(Me(xe-1,ze(e===91?e+2:e===40?e+1:e)))}function Le(e){for(;(Se=Ae())&&Se<33;)ke();return Ne(e)>2||Ne(Se)>3?``:` `}function Re(e,t){for(;--t&&ke()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Me(e,je()+(t<6&&Ae()==32&&ke()==32))}function ze(e){for(;ke();)switch(Se){case e:return xe;case 34:case 39:e!==34&&e!==39&&ze(Se);break;case 40:e===41&&ze(e);break;case 92:ke();break}return xe}function Be(e,t){for(;ke()&&e+Se!==57&&!(e+Se===84&&Ae()===47););return`/*`+Me(t,xe-1)+`*`+A(e===47?e:ke())}function Ve(e){for(;!Ne(Ae());)ke();return Me(e,xe)}function He(e){return Fe(Ue(``,null,null,null,[``],e=Pe(e),0,[0],e))}function Ue(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ke()){case 40:if(m!=108&&de(C,d-1)==58){M(C+=j(Ie(v),`&`,`&\f`),`&\f`,k(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ie(v);break;case 9:case 10:case 13:case 32:C+=Le(m);break;case 92:C+=Re(je()-1,7);continue;case 47:switch(Ae()){case 42:case 47:he(Ge(Be(ke(),je()),t,n,c),c),(Ne(m||1)==5||Ne(Ae()||1)==5)&&pe(C)&&fe(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=pe(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(pe(C)-d||h===0&&m===47)&&he(p>32?Ke(C+`;`,r,n,d-1,c):Ke(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(he(S=We(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Ue(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(de(C,3)===110)break;case 108:if(de(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ue(e,S,S,r&&he(We(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ue(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+pe(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Oe()==125)continue}switch(C+=A(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(pe(C)-1)*_,_=1;break;case 64:Ae()===45&&(C+=Ie(ke())),f=Ae(),u=d=pe(y=C+=Ve(je())),v++;break;case 45:m===45&&pe(C)==2&&(h=0)}}return a}function We(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=me(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=fe(e,f+1,f=k(g=o[h])),b=e;v<m;++v)(b=le(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return we(e,t,n,i===0?te:s,c,l,u,d)}function Ge(e,t,n,r){return we(e,t,n,ee,A(De()),fe(e,2,-2),0,r)}function Ke(e,t,n,r,i){return we(e,t,n,ne,fe(e,0,r),fe(e,r+1,-1),r,i)}function qe(e,t,n){switch(ce(e,t)){case 5103:return O+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+D+e+E+e+e;case 5936:switch(de(e,t+11)){case 114:return O+e+E+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return O+e+E+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return O+e+E+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return O+e+E+e+e;case 6165:return O+e+E+`flex-`+e+e;case 5187:return O+e+j(e,/(\w+).+(:[^]+)/,O+`box-$1$2`+E+`flex-$1$2`)+e;case 5443:return O+e+E+`flex-item-`+j(e,/flex-|-self/g,``)+(ue(e,/flex-|baseline/)?``:E+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return O+e+E+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return O+e+E+j(e,`shrink`,`negative`)+e;case 5292:return O+e+E+j(e,`basis`,`preferred-size`)+e;case 6060:return O+`box-`+j(e,`-grow`,``)+O+e+E+j(e,`grow`,`positive`)+e;case 4554:return O+j(e,/([^-])(transform)/g,`$1`+O+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,O+`$1`),/(image-set)/,O+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,O+`box-pack:$3`+E+`flex-pack:$3`),/space-between/,`justify`)+O+e+e;case 4200:if(!ue(e,/flex-|baseline/))return E+`grid-column-align`+fe(e,t)+e;break;case 2592:case 3360:return E+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,ue(e.props,/grid-\w+-end/)})?~M(e+(n=n[t].value),`span`,0)?e:E+j(e,`-start`,``)+e+E+`grid-row-span:`+(~M(n,`span`,0)?ue(n,/\d+/):ue(n,/\d+/)-+ue(e,/\d+/))+`;`:E+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return ue(e.props,/grid-\w+-start/)})?e:E+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,O+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+O+`$2-$3$1`+D+(de(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~M(e,`stretch`,0)?qe(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return E+n+`:`+r+s+(i?E+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(de(e,t+6)===121)return j(e,`:`,`:`+O)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+O+(de(e,14)===45?`inline-`:``)+`box$3$1`+O+`$2$3$1`+E+`$2box$3`)+e;case 100:return j(e,`:`,`:`+E)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function Je(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ye(e,t,n,r){switch(e.type){case oe:if(e.children.length)break;case re:case ie:case ne:return e.return=e.return||e.value;case ee:return``;case ae:return e.return=e.value+`{`+Je(e.children,r)+`}`;case te:if(!pe(e.value=e.props.join(`,`)))return``}return pe(n=Je(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Xe(e){var t=me(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ze(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ne:e.return=qe(e.value,e.length,n);return;case ae:return Je([Te(e,{value:j(e.value,`@`,`@`+O)})],r);case te:if(e.length)return ge(n=e.props,function(t){switch(ue(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ee(Te(e,{props:[j(t,/:(read-\w+)/,`:`+D+`$1`)]})),Ee(Te(e,{props:[t]})),se(e,{props:_e(n,r)});break;case`::placeholder`:Ee(Te(e,{props:[j(t,/:(plac\w+)/,`:`+O+`input-$1`)]})),Ee(Te(e,{props:[j(t,/:(plac\w+)/,`:`+D+`$1`)]})),Ee(Te(e,{props:[j(t,/:(plac\w+)/,E+`input-$1`)]})),Ee(Te(e,{props:[t]})),se(e,{props:_e(n,r)});break}return``})}}var $e=u(y(),1),N=u(p()),et=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,tt=`active`,nt=`data-styled-version`,rt=`6.4.1`,it=`/*!sc*/
`,at=typeof window<`u`&&typeof document<`u`;function ot(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var st=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:ot(`REACT_APP_SC_DISABLE_SPEEDY`)??ot(`SC_DISABLE_SPEEDY`)??(typeof process>`u`||!1)),ct=`sc-keyframes-`,lt={};function ut(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var dt=new Map,ft=new Map,pt=1,mt=e=>{if(dt.has(e))return dt.get(e);for(;ft.has(pt);)pt++;let t=pt++;return dt.set(e,t),ft.set(t,e),t},ht=e=>ft.get(e),gt=(e,t)=>{pt=t+1,dt.set(e,t),ft.set(t,e)},_t=Object.freeze([]),vt=Object.freeze({});function yt(e,t,n=vt){return e.theme!==n.theme&&e.theme||t||n.theme}var bt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xt=/(^-|-$)/g;function St(e){return e.replace(bt,`-`).replace(xt,``)}var Ct=/(a)(d)/gi,wt=e=>String.fromCharCode(e+(e>25?39:97));function Tt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=wt(t%52)+n;return(wt(t%52)+n).replace(Ct,`$1-$2`)}var Et=5381,Dt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Ot=e=>Dt(Et,e);function kt(e){return Tt(Ot(e)>>>0)}function At(e){return e.displayName||e.name||`Component`}function jt(e){return typeof e==`string`&&!0}function Mt(e){return jt(e)?`styled.${e}`:`Styled(${At(e)})`}var Nt=Symbol.for(`react.memo`),Pt=Symbol.for(`react.forward_ref`),Ft={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},It={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rt={[Pt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Nt]:Lt};function zt(e){return(`type`in(t=e)&&t.type.$$typeof)===Nt?Lt:`$$typeof`in e?Rt[e.$$typeof]:Ft;var t}var Bt=Object.defineProperty,Vt=Object.getOwnPropertyNames,Ht=Object.getOwnPropertySymbols,Ut=Object.getOwnPropertyDescriptor,Wt=Object.getPrototypeOf,Gt=Object.prototype;function Kt(e,t,n){if(typeof t!=`string`){let r=Wt(t);r&&r!==Gt&&Kt(e,r,n);let i=Vt(t).concat(Ht(t)),a=zt(e),o=zt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in It||n&&n[s]||o&&s in o||a&&s in a)){let n=Ut(t,s);try{Bt(e,s,n)}catch{}}}}return e}function qt(e){return typeof e==`function`}function Jt(e){return typeof e==`object`&&`styledComponentId`in e}function Yt(e,t){return e&&t?e+` `+t:e||t||``}function Xt(e,t){return e.join(t||``)}function Zt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Qt(e,t,n=!1){if(!n&&!Zt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Qt(e[n],t[n]);else if(Zt(t))for(let n in t)e[n]=Qt(e[n],t[n]);return e}function $t(e,t){Object.defineProperty(e,`toString`,{value:t})}var en=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw ut(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+it;return t}},tn=`style[${et}][${nt}="${rt}"]`,nn=RegExp(`^${et}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),rn=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,an=e=>{if(!e)return document;if(rn(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(rn(t))return t}return document},on=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},sn=(e,t)=>{let n=(t.textContent??``).split(it),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(nn);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(gt(n,t),on(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},cn=e=>{let t=an(e.options.target).querySelectorAll(tn);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(et)!==tt&&(sn(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ln=!1;function un(){if(!1!==ln)return ln;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ln=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ln=t.getAttribute(`content`)||void 0}return ln=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var dn=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${et}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(et,tt),i.setAttribute(nt,rt);let s=t||un();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},fn=class{constructor(e,t){this.element=dn(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw ut(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},pn=class{constructor(e,t){this.element=dn(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},mn=at,hn={isServer:!at,useCSSOMInjection:!st},gn=class e{static registerId(e){return mt(e)}constructor(e=vt,t={},n){this.options=Object.assign(Object.assign({},hn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&at&&mn&&(mn=!1,cn(this)),$t(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=ht(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=et+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&at&&cn(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&at&&t.target!==this.options.target&&an(this.options.target)!==an(t.target)&&cn(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new fn(t,n):new pn(t,n))(this.options),new en(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){mt(e),e.startsWith(ct)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(mt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(mt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},_n=new WeakSet,vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in vn||e.startsWith(`--`)?String(t).trim():t+`px`}var bn=47;function xn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Sn=Symbol.for(`sc-keyframes`);function Cn(e){return typeof e==`object`&&!!e&&Sn in e}function wn(e){return qt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Tn=e=>e==null||!1===e||e===``,En=Symbol.for(`react.client.reference`);function Dn(e){return e.$$typeof===En}function On(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Tn(r)&&(Array.isArray(r)&&_n.has(r)||qt(r)?t.push(xn(n)+`:`,r,`;`):Zt(r)?(t.push(n+` {`),On(r,t),t.push(`}`)):t.push(xn(n)+`: `+yn(n,r)+`;`))}}function kn(e,t,n,r,i=[]){if(Tn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Dn(e)?i:wn(e)&&t?kn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)kn(e[a],t,n,r,i);return i}return Jt(e)?(i.push(`.${e.styledComponentId}`),i):Cn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Dn(e)?i:Zt(e)?(On(e,i),i):(i.push(e.toString()),i)}var An=Ot(rt),jn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Dt(An,t),this.baseStyle=n,gn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(wn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Xt(kn(r,e,t,n)))}else i+=Xt(kn(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Tt(Dt(Dt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Yt(r,a)}}return r}},Mn=/&/g;function Nn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Pn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==bn||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===bn&&(o=!1,c++);else if(l!==34&&l!==39||Nn(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Fn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Fn(a.children,t)}return e}function In({options:e=vt,plugins:t=_t}=vt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Mn,r).replace(i,a))}),e.prefix&&o.push(Qe),o.push(Ye);let s=[],c=Xe(o.concat(Ze(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Pn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Nn(e,o))if(s===0)if(t===bn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==bn);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===bn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===bn&&o+1<r&&e.charCodeAt(o+1)===bn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Pn(i)):l===0?e:Pn(e)}(t),d=He(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Fn(d,e.namespace)),s=[],Je(d,c),s},u=e,d=Et;for(let e=0;e<t.length;e++)t[e].name||ut(15),d=Dt(d,t[e].name);return u!=null&&u.namespace&&(d=Dt(d,u.namespace)),u!=null&&u.prefix&&(d=Dt(d,`p`)),l.hash=d===Et?``:d.toString(),l}var Ln=new gn,Rn=In(),zn=N.createContext({shouldForwardProp:void 0,styleSheet:Ln,stylis:Rn,stylisPlugins:void 0});zn.Consumer;function Bn(){return N.useContext(zn)}var Vn=N.createContext(void 0);Vn.Consumer;function Hn(e){let t=N.useContext(Vn),n=N.useMemo(()=>function(e,t){if(!e)throw ut(14);if(qt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw ut(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?N.createElement(Vn.Provider,{value:n},e.children):null}var Un=Object.prototype.hasOwnProperty,Wn={};function Gn(e,t){let n=typeof e==`string`?St(e):`sc`;Wn[n]=(Wn[n]||0)+1;let r=n+`-`+kt(rt+n+Wn[n]);return t?t+`-`+r:r}function Kn(e,t,n){let r=Jt(e),i=e,a=!jt(e),{attrs:o=_t,componentId:s=Gn(t.displayName,t.parentComponentId),displayName:c=Mt(e)}=t,l=t.displayName&&t.componentId?St(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new jn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=N.useContext(Vn),u=Bn(),d=e.shouldForwardProp||u.shouldForwardProp,f=yt(t,l,a)||vt,p,m;{let e=N.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Un.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=qt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Yt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Yt(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)Un.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Yt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[jt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,N.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=N.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Yt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,`defaultProps`,{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Qt(e,n,!0);return e}({},i.defaultProps,e):e}}),$t(m,()=>`.${m.styledComponentId}`),a&&Kt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var qn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Jn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yn=e=>(_n.add(e),e);function Xn(e,...t){if(qt(e)||Zt(e))return Yn(kn(Jn(_t,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?kn(n):Yn(kn(Jn(n,t)))}function Zn(e,t,n=vt){if(!t)throw ut(1,t);let r=(r,...i)=>e(t,n,Xn(r,...i));return r.attrs=r=>Zn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Zn(e,t,Object.assign(Object.assign({},n),r)),r}var Qn=e=>Zn(Kn,e),P=Qn;qn.forEach(e=>{P[e]=Qn(e)});var $n=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(qt(n)&&!Jt(n))return!1}return!0}(e),gn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Xt(kn(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function er(e,...t){let n=Xn(e,...t),r=`sc-global-${kt(JSON.stringify(n))}`,i=new $n(n,r),a=e=>{let t=Bn(),n=N.useContext(Vn),a;{let e=N.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=N.useRef(i);N.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),N.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,lt,n,o);else{let s=Object.assign(Object.assign({},t),{theme:yt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return N.memo(a)}var tr,nr=class{constructor(e,t){this[tr]=!0,this.inject=(e,t=Rn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=ct+e,this.rules=t,mt(this.id),$t(this,()=>{throw ut(12,String(this.name))})}getName(e=Rn){return e.hash?this.name+Tt(e.hash>>>0):this.name}};function rr(e,...t){let n=Xt(Xn(e,...t));return new nr(kt(n),n)}tr=Sn,`${et}`,`${et}`,`${et}`;var ir={primary:`#00308F`,white:`#ffffff`,light:`#f5f7ff`},ar=er`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background:#f5f7ff;
  }

  a{
    text-decoration:none;
  }
`,or={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sr=N.createContext&&N.createContext(or),cr=[`attr`,`size`,`title`];function lr(e,t){if(e==null)return{};var n,r,i=ur(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ur(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(null,arguments)}function fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fr(Object(n),!0).forEach(function(t){mr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mr(e,t,n){return(t=hr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hr(e){var t=gr(e,`string`);return typeof t==`symbol`?t:t+``}function gr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _r(e){return e&&e.map((e,t)=>N.createElement(e.tag,pr({key:t},e.attr),_r(e.child)))}function F(e){return t=>N.createElement(vr,dr({attr:pr({},e.attr)},t),_r(e.child))}function vr(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=lr(e,cr),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),N.createElement(`svg`,dr({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:pr(pr({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&N.createElement(`title`,null,i),e.children)};return sr===void 0?t(or):N.createElement(sr.Consumer,null,e=>t(e))}function yr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function br(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function xr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z`},child:[]}]})(e)}function Sr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function Cr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z`},child:[]}]})(e)}function wr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z`},child:[]}]})(e)}function Tr(e){return F({tag:`svg`,attr:{viewBox:`0 0 480 512`},child:[{tag:`path`,attr:{d:`M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5 20.6 24 49.5 36 78.4 35.9 26.4 0 52.8-10 72.9-30.1l246.3-245.7 11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2zM318 256H161l148-147.7 78.5 78.3L318 256z`},child:[]}]})(e)}function Er(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function Dr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Or(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z`},child:[]}]})(e)}function kr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z`},child:[]}]})(e)}function Ar(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z`},child:[]}]})(e)}function jr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z`},child:[]}]})(e)}function Mr(e){return F({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function Nr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function Pr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z`},child:[]}]})(e)}function Fr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.60969,310.04206l-96.70393,96.71625a31.88151,31.88151,0,0,1-45.00765,0L280.572,326.34115l-9.89231,9.90759a190.56343,190.56343,0,0,1-5.40716,168.52287c-4.50077,8.50115-16.39342,9.59505-23.20707,2.79725L134.54715,400.05428l-17.7999,17.79929c.70324,2.60972,1.60965,5.00067,1.60965,7.79793a32.00544,32.00544,0,1,1-32.00544-32.00434c2.79735,0,5.18838.90637,7.7982,1.60959l17.7999-17.79929L4.43129,269.94287c-6.798-6.81342-5.70409-18.6119,2.79735-23.20627a190.58161,190.58161,0,0,1,168.52864-5.407l9.79854-9.79821-80.31053-80.41716a32.002,32.002,0,0,1,0-45.09987L201.96474,9.29814A31.62639,31.62639,0,0,1,224.46868,0a31.99951,31.99951,0,0,1,22.59759,9.29814l80.32615,80.30777,47.805-47.89713a33.6075,33.6075,0,0,1,47.50808,0l47.50807,47.50645a33.63308,33.63308,0,0,1,0,47.50644l-47.805,47.89713L502.71908,265.036A31.78938,31.78938,0,0,1,502.60969,310.04206ZM219.56159,197.433l73.82505-73.82252-68.918-68.9-73.80942,73.80689Zm237.74352,90.106-68.90233-68.9156-73.825,73.82252,68.918,68.9Z`},child:[]}]})(e)}function Ir(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M305.44954,462.59c7.39157,7.29792,6.18829,20.09661-3.00038,25.00356-77.713,41.80281-176.72559,29.9105-242.34331-35.7082C-5.49624,386.28227-17.404,287.362,24.41381,209.554c4.89125-9.095,17.68975-10.29834,25.00318-3.00043L166.22872,323.36708l27.39411-27.39452c-.68759-2.60974-1.594-5.00071-1.594-7.81361a32.00407,32.00407,0,1,1,32.00407,32.00455c-2.79723,0-5.20378-.89075-7.79786-1.594l-27.40974,27.41015ZM511.9758,303.06732a16.10336,16.10336,0,0,1-16.002,17.00242H463.86031a15.96956,15.96956,0,0,1-15.89265-15.00213C440.46671,175.5492,336.45348,70.53427,207.03078,63.53328a15.84486,15.84486,0,0,1-15.00191-15.90852V16.02652A16.09389,16.09389,0,0,1,209.031.02425C372.25491,8.61922,503.47472,139.841,511.9758,303.06732Zm-96.01221-.29692a16.21093,16.21093,0,0,1-16.11142,17.29934H367.645a16.06862,16.06862,0,0,1-15.89265-14.70522c-6.90712-77.01094-68.118-138.91037-144.92467-145.22376a15.94,15.94,0,0,1-14.79876-15.89289V112.13393a16.134,16.134,0,0,1,17.29908-16.096C319.45132,104.5391,407.55627,192.64538,415.96359,302.7704Z`},child:[]}]})(e)}function Lr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function Rr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z`},child:[]}]})(e)}function zr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z`},child:[]}]})(e)}function Br(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function Vr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z`},child:[]}]})(e)}function Hr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z`},child:[]}]})(e)}function Ur(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function Wr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z`},child:[]}]})(e)}function Gr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z`},child:[]}]})(e)}function Kr(e){return F({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function qr(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z`},child:[]}]})(e)}function Jr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z`},child:[]}]})(e)}function Yr(e){return F({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z`},child:[]}]})(e)}function Xr(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z`},child:[]}]})(e)}function Zr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M304 384h272c17.67 0 32-14.33 32-32 0-123.71-100.29-224-224-224V64h176c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H144c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h176v64H112L68.8 70.4C65.78 66.37 61.03 64 56 64H16.01C5.6 64-2.04 73.78.49 83.88L32 192l160 64 86.4 115.2A31.992 31.992 0 0 0 304 384zm112-188.49C478.55 208.3 528.03 257.44 540.79 320H416V195.51zm219.37 263.3l-22.15-22.2c-6.25-6.26-16.24-6.1-22.64.01-7.09 6.77-13.84 11.25-24.64 11.25H240c-8.84 0-16 7.18-16 16.03v32.06c0 8.85 7.16 16.03 16 16.03h325.94c14.88 0 35.3-.47 68.45-29.52 7.02-6.14 7.57-17.05.98-23.66z`},child:[]}]})(e)}function Qr(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z`},child:[]}]})(e)}function $r(e){return F({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z`},child:[]}]})(e)}function ei(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z`},child:[]}]})(e)}function ti(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function ni(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function ri(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z`},child:[]}]})(e)}function ii(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z`},child:[]}]})(e)}function ai(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z`},child:[]}]})(e)}function oi(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z`},child:[]}]})(e)}function si(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z`},child:[]}]})(e)}function ci(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z`},child:[]}]})(e)}function li(e){return F({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z`},child:[]}]})(e)}function ui(e){return F({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function di(e){return F({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z`},child:[]}]})(e)}function fi(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function pi(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z`},child:[]}]})(e)}function mi(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function hi(e){return F({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z`},child:[]}]})(e)}function gi(e){return F({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z`},child:[]}]})(e)}function _i(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z`},child:[]}]})(e)}function vi(e){return F({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M150.94 192h33.73c11.01 0 18.61-10.83 14.86-21.18-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C203.29 74.83 195.68 64 184.67 64h-33.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128c0 18.12 2.64 35.79 7.54 52.76 1.94 6.74 8.39 11.24 15.4 11.24zM89.92 23.34C95.56 12.72 87.97 0 75.96 0H40.63c-6.27 0-12.14 3.59-14.74 9.31C9.4 45.54 0 85.65 0 128c0 24.75 3.12 68.33 26.69 118.86 2.62 5.63 8.42 9.14 14.61 9.14h34.84c12.02 0 19.61-12.74 13.95-23.37-49.78-93.32-16.71-178.15-.17-209.29zM614.06 9.29C611.46 3.58 605.6 0 599.33 0h-35.42c-11.98 0-19.66 12.66-14.02 23.25 18.27 34.29 48.42 119.42.28 209.23-5.72 10.68 1.8 23.52 13.91 23.52h35.23c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.94-118.71zM489.06 64h-33.73c-11.01 0-18.61 10.83-14.86 21.18 4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h33.73c7.02 0 13.46-4.49 15.41-11.24 4.9-16.97 7.53-34.64 7.53-52.76 0-18.12-2.64-35.79-7.54-52.76-1.94-6.75-8.39-11.24-15.4-11.24zm-116.3 100.12c7.05-10.29 11.2-22.71 11.2-36.12 0-35.35-28.63-64-63.96-64-35.32 0-63.96 28.65-63.96 64 0 13.41 4.15 25.83 11.2 36.12l-130.5 313.41c-3.4 8.15.46 17.52 8.61 20.92l29.51 12.31c8.15 3.4 17.52-.46 20.91-8.61L244.96 384h150.07l49.2 118.15c3.4 8.16 12.76 12.01 20.91 8.61l29.51-12.31c8.15-3.4 12-12.77 8.61-20.92l-130.5-313.41zM271.62 320L320 203.81 368.38 320h-96.76z`},child:[]}]})(e)}function yi(e){return F({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z`},child:[]}]})(e)}function bi(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function xi(e){return F({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z`},child:[]}]})(e)}var Si=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ci=s(((e,t)=>{t.exports=Si()})),wi=(0,N.createContext)({});function Ti(e){let t=(0,N.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ei=typeof window<`u`?N.useLayoutEffect:N.useEffect,Di=(0,N.createContext)(null);function Oi(e,t){e.indexOf(t)===-1&&e.push(t)}function ki(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ai=(e,t,n)=>n>t?t:n<e?e:n,ji={},Mi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ni(e){return typeof e==`object`&&!!e}var Pi=e=>/^0[^.\s]+$/u.test(e);function Fi(e){let t;return()=>(t===void 0&&(t=e()),t)}var I=e=>e,Ii=(e,t)=>n=>t(e(n)),L=(...e)=>e.reduce(Ii),Li=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Ri=class{constructor(){this.subscriptions=[]}add(e){return Oi(this.subscriptions,e),()=>ki(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},zi=e=>e*1e3,Bi=e=>e/1e3;function Vi(e,t){return t?1e3/t*e:0}var Hi=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ui=1e-7,Wi=12;function Gi(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Hi(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Ui&&++s<Wi);return o}function Ki(e,t,n,r){if(e===t&&n===r)return I;let i=t=>Gi(t,0,1,e,n);return e=>e===0||e===1?e:Hi(i(e),t,r)}var qi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ji=e=>t=>1-e(1-t),Yi=Ki(.33,1.53,.69,.99),Xi=Ji(Yi),Zi=qi(Xi),Qi=e=>e>=1?1:(e*=2)<1?.5*Xi(e):.5*(2-2**(-10*(e-1))),$i=e=>1-Math.sin(Math.acos(e)),ea=Ji($i),ta=qi($i),na=Ki(.42,0,1,1),ra=Ki(0,0,.58,1),ia=Ki(.42,0,.58,1),aa=e=>Array.isArray(e)&&typeof e[0]!=`number`,oa=e=>Array.isArray(e)&&typeof e[0]==`number`,sa={linear:I,easeIn:na,easeInOut:ia,easeOut:ra,circIn:$i,circInOut:ta,circOut:ea,backIn:Xi,backInOut:Zi,backOut:Yi,anticipate:Qi},ca=e=>typeof e==`string`,la=e=>{if(oa(e)){e.length;let[t,n,r,i]=e;return Ki(t,n,r,i)}else if(ca(e))return sa[e],`${e}`,sa[e];return e},ua=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],da={value:null,addProjectionMetrics:null};function fa(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&da.value&&da.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var pa=40;function ma(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ua.reduce((e,n)=>(e[n]=fa(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ji.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,pa),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:ua.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ua.length;t++)o[ua[t]].cancel(e)},state:i,steps:o}}var{schedule:R,cancel:ha,state:ga,steps:_a}=ma(typeof requestAnimationFrame<`u`?requestAnimationFrame:I,!0),va;function ya(){va=void 0}var ba={now:()=>(va===void 0&&ba.set(ga.isProcessing||ji.useManualTiming?ga.timestamp:performance.now()),va),set:e=>{va=e,queueMicrotask(ya)}},xa={layout:0,mainThread:0,waapi:0},Sa=e=>t=>typeof t==`string`&&t.startsWith(e),Ca=Sa(`--`),wa=Sa(`var(--`),Ta=e=>wa(e)?Ea.test(e.split(`/*`)[0].trim()):!1,Ea=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Da(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Oa={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},ka={...Oa,transform:e=>Ai(0,1,e)},Aa={...Oa,default:1},ja=e=>Math.round(e*1e5)/1e5,Ma=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Na(e){return e==null}var Pa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Fa=(e,t)=>n=>!!(typeof n==`string`&&Pa.test(n)&&n.startsWith(e)||t&&!Na(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ia=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Ma);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},La=e=>Ai(0,255,e),Ra={...Oa,transform:e=>Math.round(La(e))},za={test:Fa(`rgb`,`red`),parse:Ia(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Ra.transform(e)+`, `+Ra.transform(t)+`, `+Ra.transform(n)+`, `+ja(ka.transform(r))+`)`};function Ba(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Va={test:Fa(`#`),parse:Ba,transform:za.transform},Ha=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ua=Ha(`deg`),Wa=Ha(`%`),z=Ha(`px`),Ga=Ha(`vh`),Ka=Ha(`vw`),qa={...Wa,parse:e=>Wa.parse(e)/100,transform:e=>Wa.transform(e*100)},Ja={test:Fa(`hsl`,`hue`),parse:Ia(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Wa.transform(ja(t))+`, `+Wa.transform(ja(n))+`, `+ja(ka.transform(r))+`)`},Ya={test:e=>za.test(e)||Va.test(e)||Ja.test(e),parse:e=>za.test(e)?za.parse(e):Ja.test(e)?Ja.parse(e):Va.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?za.transform(e):Ja.transform(e),getAnimatableNone:e=>{let t=Ya.parse(e);return t.alpha=0,Ya.transform(t)}},Xa=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Za(e){return isNaN(e)&&typeof e==`string`&&(e.match(Ma)?.length||0)+(e.match(Xa)?.length||0)>0}var Qa=`number`,$a=`color`,eo=`var`,to=`var(`,no="${}",ro=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function io(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(ro,e=>(Ya.test(e)?(r.color.push(a),i.push($a),n.push(Ya.parse(e))):e.startsWith(to)?(r.var.push(a),i.push(eo),n.push(e)):(r.number.push(a),i.push(Qa),n.push(parseFloat(e))),++a,no)).split(no),indexes:r,types:i}}function ao(e){return io(e).values}function oo({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Qa?i+=ja(r[a]):e===$a?i+=Ya.transform(r[a]):i+=r[a]}return i}}function so(e){return oo(io(e))}var co=e=>typeof e==`number`?0:Ya.test(e)?Ya.getAnimatableNone(e):e,lo=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:co(e);function uo(e){let t=io(e);return oo(t)(t.values.map((e,n)=>lo(e,t.split[n])))}var fo={test:Za,parse:ao,createTransformer:so,getAnimatableNone:uo};function po(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function B({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=po(s,r,e+1/3),a=po(s,r,e),o=po(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function V(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,mo=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ho=[Va,za,Ja],go=e=>ho.find(t=>t.test(e));function _o(e){let t=go(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ja&&(n=B(n)),n}var vo=(e,t)=>{let n=_o(e),r=_o(t);if(!n||!r)return V(e,t);let i={...n};return e=>(i.red=mo(n.red,r.red,e),i.green=mo(n.green,r.green,e),i.blue=mo(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),za.transform(i))},yo=new Set([`none`,`hidden`]);function bo(e,t){return yo.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function xo(e,t){return n=>H(e,t,n)}function So(e){return typeof e==`number`?xo:typeof e==`string`?Ta(e)?V:Ya.test(e)?vo:Eo:Array.isArray(e)?Co:typeof e==`object`?Ya.test(e)?vo:wo:V}function Co(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>So(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function wo(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=So(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function To(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Eo=(e,t)=>{let n=fo.createTransformer(t),r=io(e),i=io(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yo.has(e)&&!i.values.length||yo.has(t)&&!r.values.length?bo(e,t):L(Co(To(r,i),i.values),n):(`${e}${t}`,V(e,t))};function Do(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):So(e)(e,t)}var Oo=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>R.update(t,e),stop:()=>ha(t),now:()=>ga.isProcessing?ga.timestamp:ba.now()}},ko=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ao=2e4;function jo(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Mo(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(jo(r),Ao);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Bi(i)}}var No={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Po(e,t){return e*Math.sqrt(1-t*t)}var Fo=12;function Io(e,t,n){let r=n;for(let n=1;n<Fo;n++)r-=e(r)/t(r);return r}var Lo=.001;function Ro({duration:e=No.duration,bounce:t=No.bounce,velocity:n=No.velocity,mass:r=No.mass}){let i,a;No.maxDuration;let o=1-t;o=Ai(No.minDamping,No.maxDamping,o),e=Ai(No.minDuration,No.maxDuration,Bi(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Po(t,o),c=Math.exp(-i);return Lo-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Po(t**2,o);return(-i(t)+Lo>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Lo+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Io(i,a,s);if(e=zi(e),isNaN(c))return{stiffness:No.stiffness,damping:No.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var zo=[`duration`,`bounce`],Bo=[`stiffness`,`damping`,`mass`];function Vo(e,t){return t.some(t=>e[t]!==void 0)}function Ho(e){let t={velocity:No.velocity,stiffness:No.stiffness,damping:No.damping,mass:No.mass,isResolvedFromDuration:!1,...e};if(!Vo(e,Bo)&&Vo(e,zo))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ai(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:No.mass,stiffness:i,damping:a}}else{let n=Ro({...e,velocity:0});t={...t,...n,mass:No.mass},t.isResolvedFromDuration=!0}return t}function Uo(e=No.visualDuration,t=No.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Ho({...n,velocity:-Bi(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Bi(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?No.restSpeed.granular:No.restSpeed.default,i||=v?No.restDelta.granular:No.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Po(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>zi(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=zi(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=zi(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(jo(T),Ao),t=ko(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}Uo.applyToOptions=e=>{let t=Mo(e,100,Uo);return e.ease=t.ease,e.duration=zi(t.duration),e.type=`keyframes`,e};var Wo=5;function Go(e,t,n){let r=Math.max(t-Wo,0);return Vi(n-e(r),t-r)}function Ko({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Uo({keyframes:[f.value,m(f.value)],velocity:Go(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function qo(e,t,n){let r=[],i=n||ji.mix||Do,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=L(Array.isArray(t)?t[n]||I:t,a)),r.push(a)}return r}function Jo(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=qo(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Li(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ai(e[0],e[a-1],t)):l}function Yo(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Li(0,t,r);e.push(H(n,1,i))}}function Xo(e){let t=[0];return Yo(t,e.length-1),t}function Zo(e,t){return e.map(e=>e*t)}function Qo(e,t){return e.map(()=>t||ia).splice(0,e.length-1)}function $o({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=aa(r)?r.map(la):la(r),a={done:!1,value:t[0]},o=Jo(Zo(n&&n.length===t.length?n:Xo(t),e),t,{ease:Array.isArray(i)?i:Qo(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var es=e=>e!==null;function ts(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(es),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var ns={decay:Ko,inertia:Ko,tween:$o,keyframes:$o,spring:Uo};function rs(e){typeof e.type==`string`&&(e.type=ns[e.type])}var is=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},as=e=>e/100,os=class extends is{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==ba.now()&&this.tick(ba.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},xa.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;rs(e);let{type:t=$o,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||$o;s!==$o&&typeof o[0]!=`number`&&(this.mixKeyframes=L(as,Do(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=jo(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ai(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Ko&&(b.value=ts(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Bi(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Bi(e)}get time(){return Bi(this.currentTime)}set time(e){e=zi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Go(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(ba.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Bi(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Oo,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(ba.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,xa.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function ss(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var cs=e=>e*180/Math.PI,ls=e=>ds(cs(Math.atan2(e[1],e[0]))),us={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ls,rotateZ:ls,skewX:e=>cs(Math.atan(e[1])),skewY:e=>cs(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ds=e=>(e%=360,e<0&&(e+=360),e),fs=ls,ps=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ms=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),hs={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ps,scaleY:ms,scale:e=>(ps(e)+ms(e))/2,rotateX:e=>ds(cs(Math.atan2(e[6],e[5]))),rotateY:e=>ds(cs(Math.atan2(-e[2],e[0]))),rotateZ:fs,rotate:fs,skewX:e=>cs(Math.atan(e[4])),skewY:e=>cs(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function gs(e){return+!!e.includes(`scale`)}function _s(e,t){if(!e||e===`none`)return gs(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=hs,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=us,i=t}if(!i)return gs(t);let a=r[t],o=i[1].split(`,`).map(ys);return typeof a==`function`?a(o):o[a]}var vs=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return _s(n,t)};function ys(e){return parseFloat(e.trim())}var bs=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],xs=new Set(bs),Ss=e=>e===Oa||e===z,Cs=new Set([`x`,`y`,`z`]),ws=bs.filter(e=>!Cs.has(e));function Ts(e){let t=[];return ws.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Es={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>_s(t,`x`),y:(e,{transform:t})=>_s(t,`y`)};Es.translateX=Es.x,Es.translateY=Es.y;var Ds=new Set,Os=!1,ks=!1,As=!1;function js(){if(ks){let e=Array.from(Ds).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Ts(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}ks=!1,Os=!1,Ds.forEach(e=>e.complete(As)),Ds.clear()}function Ms(){Ds.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ks=!0)})}function Ns(){As=!0,Ms(),js(),As=!1}var Ps=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Ds.add(this),Os||(Os=!0,R.read(Ms),R.resolveKeyframes(js))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}ss(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ds.delete(this)}cancel(){this.state===`scheduled`&&(Ds.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Fs=e=>e.startsWith(`--`);function Is(e,t,n){Fs(t)?e.style.setProperty(t,n):e.style[t]=n}var Ls={};function Rs(e,t){let n=Fi(e);return()=>Ls[t]??n()}var zs=Rs(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Bs=Rs(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Vs=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Hs={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Vs([0,.65,.55,1]),circOut:Vs([.55,0,1,.45]),backIn:Vs([.31,.01,.66,-.59]),backOut:Vs([.33,1.53,.69,.99])};function Us(e,t){if(e)return typeof e==`function`?Bs()?ko(e,t):`ease-out`:oa(e)?Vs(e):Array.isArray(e)?e.map(e=>Us(e,t)||Hs.easeOut):Hs[e]}function Ws(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Us(s,i);Array.isArray(d)&&(u.easing=d),da.value&&xa.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return da.value&&p.finished.finally(()=>{xa.waapi--}),p}function Gs(e){return typeof e==`function`&&`applyToOptions`in e}function Ks({type:e,...t}){return Gs(e)&&Bs()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var qs=class extends is{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Ks(e);this.animation=Ws(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=ts(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Is(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Bi(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Bi(e)}get time(){return Bi(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=zi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&zs()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),I):r(this)}},Js={anticipate:Qi,backInOut:Zi,circInOut:ta};function Ys(e){return e in Js}function Xs(e){typeof e.ease==`string`&&Ys(e.ease)&&(e.ease=Js[e.ease])}var Zs=10,Qs=class extends qs{constructor(e){Xs(e),rs(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new os({...a,autoplay:!1}),s=Math.max(Zs,ba.now()-this.startTime),c=Ai(0,Zs,s-Zs),l=o.sample(s).value,{name:u}=this.options;i&&u&&Is(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},$s=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(fo.test(e)||e===`0`)&&!e.startsWith(`url(`));function ec(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function tc(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=$s(i,t),s=$s(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ec(e)||(n===`spring`||Gs(n))&&r}function nc(e){e.duration=0,e.type=`keyframes`}var rc=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ic=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ac(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ic.test(e[t]))return!0;return!1}var oc=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),sc=Fi(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function cc(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return sc()&&n&&(rc.has(n)||oc.has(n)&&ac(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var lc=40,uc=class extends is{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ba.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Ps;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=ba.now();let u=!0;tc(e,i,a,o)||(u=!1,(ji.instantAnimations||!s)&&l?.(ts(e,n,t)),e[0]=e[e.length-1],nc(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>lc?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&cc(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Qs({...d,element:p})}catch{m=new os(d)}else m=new os(d);m.finished.then(()=>{this.notifyFinished()}).catch(I),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ns()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function dc(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var fc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pc(e){let t=fc.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function mc(e,t,n=1){`${e}`;let[r,i]=pc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Mi(e)?parseFloat(e):e}return Ta(i)?mc(i,t,n+1):i}var hc={type:`spring`,stiffness:500,damping:25,restSpeed:10},gc=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_c={type:`keyframes`,duration:.8},vc={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},yc=(e,{keyframes:t})=>t.length>2?_c:xs.has(e)?e.startsWith(`scale`)?gc(t[1]):hc:vc;function bc(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function xc(e,t){let n=e?.[t]??e?.default??e;return n===e?n:bc(n,e)}var Sc=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Cc(e){for(let t in e)if(!Sc.has(t))return!0;return!1}var wc=(e,t,n,r={},i,a)=>o=>{let s=xc(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=zi(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Cc(s)||Object.assign(u,yc(e,u)),u.duration&&=zi(u.duration),u.repeatDelay&&=zi(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(nc(u),u.delay===0&&(d=!0)),(ji.instantAnimations||ji.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,nc(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=ts(u.keyframes,s);if(e!==void 0){R.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new os(u):new uc(u)};function Tc(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ec(e,t,n,r){if(typeof t==`function`){let[i,a]=Tc(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Tc(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Dc(e,t,n){let r=e.getProps();return Ec(r,t,n===void 0?r.custom:n,e)}var Oc=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...bs]),kc=30,Ac=e=>!isNaN(parseFloat(e)),jc={current:void 0},Mc=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=ba.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ba.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ac(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ri);let n=this.events[e].add(t);return e===`change`?()=>{n(),R.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return jc.current&&jc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=ba.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>kc)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,kc);return Vi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Nc(e,t){return new Mc(e,t)}var Pc=e=>Array.isArray(e);function Fc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Nc(n))}function Ic(e){return Pc(e)?e[e.length-1]||0:e}function Lc(e,t){let{transitionEnd:n={},transition:r={},...i}=Dc(e,t)||{};i={...i,...n};for(let t in i)Fc(e,t,Ic(i[t]))}var Rc=e=>!!(e&&e.getVelocity);function zc(e){return!!(Rc(e)&&e.add)}function Bc(e,t){let n=e.getValue(`willChange`);if(zc(n))return n.add(t);if(!n&&ji.WillChange){let n=new ji.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Vc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Hc=`data-`+Vc(`framerAppearId`);function Uc(e){return e.props[Hc]}function Wc({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Gc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?bc(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Wc(d,t))continue;let o={delay:n,...xc(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){R.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Uc(e);if(n){let e=window.MotionHandoffAnimation(n,t,R);e!==null&&(o.startTime=e,f=!0)}}Bc(e,t);let p=l??e.shouldReduceMotion;r.start(wc(t,r,i,p&&Oc.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>R.update(()=>{o&&Lc(e,o)});u.length?Promise.all(u).then(t):t()}return u}function Kc(e,t,n={}){let r=Dc(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Gc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return qc(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function qc(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Kc(c,t,{...o,delay:n+(typeof r==`function`?0:r)+dc(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Jc(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Kc(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Kc(e,t,n);else{let i=typeof t==`function`?Dc(e,t,n.custom):t;r=Promise.all(Gc(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Yc={test:e=>e===`auto`,parse:e=>e},Xc=e=>t=>t.test(e),Zc=[Oa,z,Wa,Ua,Ka,Ga,Yc],Qc=e=>Zc.find(Xc(e));function $c(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Pi(e)}var el=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function tl(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ma)||[];if(!r)return e;let i=n.replace(r,``),a=+!!el.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var nl=/\b([a-z-]*)\(.*?\)/gu,rl={...fo,getAnimatableNone:e=>{let t=e.match(nl);return t?t.map(tl).join(` `):e}},il={...fo,getAnimatableNone:e=>{let t=fo.parse(e);return fo.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},al={...Oa,transform:Math.round},ol={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,inset:z,insetBlock:z,insetBlockStart:z,insetBlockEnd:z,insetInline:z,insetInlineStart:z,insetInlineEnd:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,paddingBlock:z,paddingBlockStart:z,paddingBlockEnd:z,paddingInline:z,paddingInlineStart:z,paddingInlineEnd:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,marginBlock:z,marginBlockStart:z,marginBlockEnd:z,marginInline:z,marginInlineStart:z,marginInlineEnd:z,fontSize:z,backgroundPositionX:z,backgroundPositionY:z,rotate:Ua,rotateX:Ua,rotateY:Ua,rotateZ:Ua,scale:Aa,scaleX:Aa,scaleY:Aa,scaleZ:Aa,skew:Ua,skewX:Ua,skewY:Ua,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:ka,originX:qa,originY:qa,originZ:z,zIndex:al,fillOpacity:ka,strokeOpacity:ka,numOctaves:al},sl={...ol,color:Ya,backgroundColor:Ya,outlineColor:Ya,fill:Ya,stroke:Ya,borderColor:Ya,borderTopColor:Ya,borderRightColor:Ya,borderBottomColor:Ya,borderLeftColor:Ya,filter:rl,WebkitFilter:rl,mask:il,WebkitMask:il},cl=e=>sl[e],ll=new Set([rl,il]);function ul(e,t){let n=cl(e);return ll.has(n)||(n=fo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var dl=new Set([`auto`,`none`,`0`]);function fl(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!dl.has(t)&&io(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=ul(n,i)}var pl=class extends Ps{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ta(r))){let i=mc(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Oc.has(n)||e.length!==2)return;let[r,i]=e,a=Qc(r),o=Qc(i);if(Da(r)!==Da(i)&&Es[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ss(a)&&Ss(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Es[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||$c(e[t]))&&n.push(t);n.length&&fl(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Es[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Es[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ml(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var hl=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function gl(e){return Ni(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:_l,cancel:vl}=ma(queueMicrotask,!1),yl={x:!1,y:!1};function bl(){return yl.x||yl.y}function xl(e){return e===`x`||e===`y`?yl[e]?null:(yl[e]=!0,()=>{yl[e]=!1}):yl.x||yl.y?null:(yl.x=yl.y=!0,()=>{yl.x=yl.y=!1})}function Sl(e,t){let n=ml(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Cl(e){return!(e.pointerType===`touch`||bl())}function wl(e,t,n={}){let[r,i,a]=Sl(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Cl(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Tl=(e,t)=>t?e===t?!0:Tl(e,t.parentElement):!1,El=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Dl=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ol(e){return Dl.has(e.tagName)||e.isContentEditable===!0}var kl=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Al(e){return kl.has(e.tagName)||e.isContentEditable===!0}var jl=new WeakSet;function Ml(e){return t=>{t.key===`Enter`&&e(t)}}function Nl(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Pl=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ml(()=>{if(jl.has(n))return;Nl(n,`down`);let e=Ml(()=>{Nl(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Nl(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Fl(e){return El(e)&&!bl()}var Il=new WeakSet;function Ll(e,t,n={}){let[r,i,a]=Sl(e,n),o=e=>{let r=e.currentTarget;if(!Fl(e)||Il.has(e))return;jl.add(r),n.stopPropagation&&Il.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),jl.has(r)&&jl.delete(r),Fl(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Tl(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),gl(e)&&(e.addEventListener(`focus`,e=>Pl(e,i)),!Ol(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Rl(e){return Ni(e)&&`ownerSVGElement`in e}var zl=new WeakMap,Bl,Vl=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Rl(r)&&`getBBox`in r?r.getBBox()[t]:r[n],U=Vl(`inline`,`width`,`offsetWidth`),Hl=Vl(`block`,`height`,`offsetHeight`);function W({target:e,borderBoxSize:t}){zl.get(e)?.forEach(n=>{n(e,{get width(){return U(e,t)},get height(){return Hl(e,t)}})})}function G(e){e.forEach(W)}function K(){typeof ResizeObserver>`u`||(Bl=new ResizeObserver(G))}function Ul(e,t){Bl||K();let n=ml(e);return n.forEach(e=>{let n=zl.get(e);n||(n=new Set,zl.set(e,n)),n.add(t),Bl?.observe(e)}),()=>{n.forEach(e=>{let n=zl.get(e);n?.delete(t),n?.size||Bl?.unobserve(e)})}}var Wl=new Set,Gl;function Kl(){Gl=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Wl.forEach(t=>t(e))},window.addEventListener(`resize`,Gl)}function ql(e){return Wl.add(e),Gl||Kl(),()=>{Wl.delete(e),!Wl.size&&typeof Gl==`function`&&(window.removeEventListener(`resize`,Gl),Gl=void 0)}}function Jl(e,t){return typeof e==`function`?ql(e):Ul(e,t)}function Yl(e){return Rl(e)&&e.tagName===`svg`}var Xl=[...Zc,Ya,fo],Zl=e=>Xl.find(Xc(e)),Ql=()=>({translate:0,scale:1,origin:0,originPoint:0}),$l=()=>({x:Ql(),y:Ql()}),eu=()=>({min:0,max:0}),q=()=>({x:eu(),y:eu()}),tu=new WeakMap;function nu(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function ru(e){return typeof e==`string`||Array.isArray(e)}var iu=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],au=[`initial`,...iu];function ou(e){return nu(e.animate)||au.some(t=>ru(e[t]))}function su(e){return!!(ou(e)||e.variants)}function cu(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Rc(i))e.addValue(r,i);else if(Rc(a))e.addValue(r,Nc(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Nc(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var lu={current:null},uu={current:!1},du=typeof window<`u`;function fu(){if(uu.current=!0,du)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>lu.current=e.matches;e.addEventListener(`change`,t),t()}else lu.current=!1}var pu=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],mu={};function hu(e){mu=e}function gu(){return mu}var _u=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ps,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=ba.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,R.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=ou(t),this.isVariantNode=su(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Rc(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,tu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(uu.current||fu(),this.shouldReduceMotion=lu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),ha(this.notifyUpdate),ha(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&rc.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new qs({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:zi(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=xs.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&R.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in mu){let t=mu[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):q()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<pu.length;t++){let n=pu[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=cu(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Nc(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Mi(n)||Pi(n))?n=parseFloat(n):!Zl(n)&&fo.test(t)&&(n=ul(e,t)),this.setBaseTarget(e,Rc(n)?n.get():n)),Rc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ec(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Rc(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ri),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){_l.render(this.render)}},vu=class extends _u{constructor(){super(...arguments),this.KeyframeResolver=pl}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Rc(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},yu=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function bu({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function xu({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Su(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Cu(e){return e===void 0||e===1}function wu({scale:e,scaleX:t,scaleY:n}){return!Cu(e)||!Cu(t)||!Cu(n)}function Tu(e){return wu(e)||Eu(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Eu(e){return Du(e.x)||Du(e.y)}function Du(e){return e&&e!==`0%`}function Ou(e,t,n){return n+t*(e-n)}function ku(e,t,n,r,i){return i!==void 0&&(e=Ou(e,i,r)),Ou(e,n,r)+t}function Au(e,t=0,n=1,r,i){e.min=ku(e.min,t,n,r,i),e.max=ku(e.max,t,n,r,i)}function ju(e,{x:t,y:n}){Au(e.x,t.translate,t.scale,t.originPoint),Au(e.y,n.translate,n.scale,n.originPoint)}var Mu=.999999999999,Nu=1.0000000000001;function Pu(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Fu(e.x,-a.scroll.offset.x),Fu(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ju(e,o)),r&&Tu(a.latestValues)&&Ru(e,a.latestValues,a.layout?.layoutBox))}t.x<Nu&&t.x>Mu&&(t.x=1),t.y<Nu&&t.y>Mu&&(t.y=1)}function Fu(e,t){e.min+=t,e.max+=t}function Iu(e,t,n,r,i=.5){Au(e,t,n,H(e.min,e.max,i),r)}function Lu(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Ru(e,t,n){let r=n??e;Iu(e.x,Lu(t.x,r.x),t.scaleX,t.scale,t.originX),Iu(e.y,Lu(t.y,r.y),t.scaleY,t.scale,t.originY)}function zu(e,t){return bu(Su(e.getBoundingClientRect(),t))}function Bu(e,t,n){let r=zu(e,n),{scroll:i}=t;return i&&(Fu(r.x,i.offset.x),Fu(r.y,i.offset.y)),r}var Vu={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Hu=bs.length;function Uu(e,t,n){let r=``,i=!0;for(let a=0;a<Hu;a++){let o=bs[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=hl(s,ol[o]);if(!c){i=!1;let t=Vu[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Wu(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(xs.has(e)){o=!0;continue}else if(Ca(e)){i[e]=n;continue}else{let t=hl(n,ol[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Uu(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Gu(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Ku(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var qu={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(z.test(e))e=parseFloat(e);else return e;return`${Ku(e,t.target.x)}% ${Ku(e,t.target.y)}%`}},J={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=fo.parse(e);if(i.length>5)return r;let a=fo.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ju={borderRadius:{...qu,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:qu,borderTopRightRadius:qu,borderBottomLeftRadius:qu,borderBottomRightRadius:qu,boxShadow:J};function Yu(e,{layout:t,layoutId:n}){return xs.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ju[e]||e===`opacity`)}function Xu(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Rc(r[t])||i&&Rc(i[t])||Yu(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Zu(e){return window.getComputedStyle(e)}var Qu=class extends vu{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Gu}readValueFromInstance(e,t){if(xs.has(t))return this.projection?.isProjecting?gs(t):vs(e,t);{let n=Zu(e),r=(Ca(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return zu(e,t)}build(e,t,n){Wu(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Xu(e,t,n)}},$u={offset:`stroke-dashoffset`,array:`stroke-dasharray`},ed={offset:`strokeDashoffset`,array:`strokeDasharray`};function td(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?$u:ed;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var nd=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function rd(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Wu(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of nd)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&td(d,i,a,o,!1)}var id=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ad=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function od(e,t,n,r){Gu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(id.has(n)?n:Vc(n),t.attrs[n])}function sd(e,t,n){let r=Xu(e,t,n);for(let n in e)if(Rc(e[n])||Rc(t[n])){let t=bs.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var cd=class extends vu{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=q}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(xs.has(t)){let e=cl(t);return e&&e.default||0}return t=id.has(t)?t:Vc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return sd(e,t,n)}build(e,t,n){rd(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){od(e,t,n,r)}mount(e){this.isSVGTag=ad(e.tagName),super.mount(e)}},ld=au.length;function ud(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ud(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ld;n++){let r=au[n],i=e.props[r];(ru(i)||i===!1)&&(t[r]=i)}return t}function dd(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var fd=[...iu].reverse(),pd=iu.length;function md(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Jc(e,t,n)))}function hd(e){let t=md(e),n=vd(),r=!0,i=!1,a=t=>(n,r)=>{let i=Dc(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=ud(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<pd;t++){let p=fd[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=ru(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||nu(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=gd(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Pc(t)&&Pc(n)?!dd(t,n):t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Dc(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=dc(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Dc(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=vd(),i=!0}}}function gd(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!dd(t,e):!1}function _d(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vd(){return{animate:_d(!0),whileInView:_d(),whileHover:_d(),whileTap:_d(),whileDrag:_d(),whileFocus:_d(),exit:_d()}}function yd(e,t){e.min=t.min,e.max=t.max}function bd(e,t){yd(e.x,t.x),yd(e.y,t.y)}function xd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Sd=1e-4,Y=1-Sd,Cd=1+Sd,wd=.01,Td=0-wd,Ed=0+wd;function Dd(e){return e.max-e.min}function Od(e,t,n){return Math.abs(e-t)<=n}function kd(e,t,n,r=.5){e.origin=r,e.originPoint=H(t.min,t.max,e.origin),e.scale=Dd(n)/Dd(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Y&&e.scale<=Cd||isNaN(e.scale))&&(e.scale=1),(e.translate>=Td&&e.translate<=Ed||isNaN(e.translate))&&(e.translate=0)}function Ad(e,t,n,r){kd(e.x,t.x,n.x,r?r.originX:void 0),kd(e.y,t.y,n.y,r?r.originY:void 0)}function jd(e,t,n,r=0){e.min=(r?H(n.min,n.max,r):n.min)+t.min,e.max=e.min+Dd(t)}function Md(e,t,n,r){jd(e.x,t.x,n.x,r?.x),jd(e.y,t.y,n.y,r?.y)}function Nd(e,t,n,r=0){let i=r?H(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Dd(t)}function Pd(e,t,n,r){Nd(e.x,t.x,n.x,r?.x),Nd(e.y,t.y,n.y,r?.y)}function Fd(e,t,n,r,i){return e-=t,e=Ou(e,1/n,r),i!==void 0&&(e=Ou(e,1/i,r)),e}function X(e,t=0,n=1,r=.5,i,a=e,o=e){if(Wa.test(t)&&(t=parseFloat(t),t=H(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=H(a.min,a.max,r);e===a&&(s-=t),e.min=Fd(e.min,t,n,s,i),e.max=Fd(e.max,t,n,s,i)}function Id(e,t,[n,r,i],a,o){X(e,t[n],t[r],t[i],t.scale,a,o)}var Ld=[`x`,`scaleX`,`originX`],Rd=[`y`,`scaleY`,`originY`];function zd(e,t,n,r){Id(e.x,t,Ld,n?n.x:void 0,r?r.x:void 0),Id(e.y,t,Rd,n?n.y:void 0,r?r.y:void 0)}function Bd(e){return e.translate===0&&e.scale===1}function Vd(e){return Bd(e.x)&&Bd(e.y)}function Hd(e,t){return e.min===t.min&&e.max===t.max}function Ud(e,t){return Hd(e.x,t.x)&&Hd(e.y,t.y)}function Wd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Gd(e,t){return Wd(e.x,t.x)&&Wd(e.y,t.y)}function Kd(e){return Dd(e.x)/Dd(e.y)}function qd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Jd(e){return[e(`x`),e(`y`)]}function Yd(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Xd=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Zd=Xd.length,Qd=e=>typeof e==`string`?parseFloat(e):e,$d=e=>typeof e==`number`||z.test(e);function ef(e,t,n,r,i,a){i?(e.opacity=H(0,n.opacity??1,nf(r)),e.opacityExit=H(t.opacity??1,0,rf(r))):a&&(e.opacity=H(t.opacity??1,n.opacity??1,r));for(let i=0;i<Zd;i++){let a=Xd[i],o=tf(t,a),s=tf(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||$d(o)===$d(s)?(e[a]=Math.max(H(Qd(o),Qd(s),r),0),(Wa.test(s)||Wa.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,r))}function tf(e,t){return e[t]===void 0?e.borderRadius:e[t]}var nf=af(0,.5,ea),rf=af(.5,.95,I);function af(e,t,n){return r=>r<e?0:r>t?1:n(Li(e,t,r))}function of(e,t,n){let r=Rc(e)?e:Nc(e);return r.start(wc(``,r,t,n)),r.animation}function sf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var cf=(e,t)=>e.depth-t.depth,lf=class{constructor(){this.children=[],this.isDirty=!1}add(e){Oi(this.children,e),this.isDirty=!0}remove(e){ki(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cf),this.isDirty=!1,this.children.forEach(e)}};function uf(e,t){let n=ba.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(ha(r),e(a-t))};return R.setup(r,!0),()=>ha(r)}function df(e){return Rc(e)?e.get():e}var ff=class{constructor(){this.members=[]}add(e){Oi(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ki(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ki(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},pf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},mf={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},hf=[``,`X`,`Y`,`Z`],gf=1e3,_f=0;function vf(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function yf(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Uc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,R,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&yf(r)}function bf({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=_f++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,da.value&&(mf.nodes=mf.calculatedTargetDeltas=mf.calculatedProjections=0),this.nodes.forEach(Cf),this.nodes.forEach(Mf),this.nodes.forEach(Nf),this.nodes.forEach(wf),da.addProjectionMetrics&&da.addProjectionMetrics(mf)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new lf)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ri),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Rl(t)&&!Yl(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;R.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=uf(i,250),pf.hasAnimatedSinceResize&&(pf.hasAnimatedSinceResize=!1,this.nodes.forEach(jf)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Bf,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Gd(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...xc(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||jf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ha(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Pf),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Df),this.nodes.forEach(Ef);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Of);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(kf),this.nodes.forEach(Af),this.nodes.forEach(xf),this.nodes.forEach(Sf)):this.nodes.forEach(Of),this.clearAllSnapshots();let e=ba.now();ga.delta=Ai(0,1e3/60,e-ga.timestamp),ga.timestamp=e,ga.isProcessing=!0,_a.update.process(ga),_a.preRender.process(ga),_a.render.process(ga),ga.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_l.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Tf),this.sharedNodes.forEach(Ff)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,R.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){R.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Dd(this.snapshot.measuredBox.x)&&!Dd(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=q(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Vd(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Tu(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Wf(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return q();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Kf))){let{scroll:e}=this.root;e&&(Fu(t.x,e.offset.x),Fu(t.y,e.offset.y))}return t}removeElementScroll(e){let t=q();if(bd(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&bd(t,e),Fu(t.x,i.offset.x),Fu(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||q();bd(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Fu(r.x,-n.scroll.offset.x),Fu(r.y,-n.scroll.offset.y)),Tu(n.latestValues)&&Ru(r,n.latestValues,n.layout?.layoutBox)}return Tu(this.latestValues)&&Ru(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=q();bd(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Tu(n.latestValues))continue;let r;n.instance&&(wu(n.latestValues)&&n.updateSnapshot(),r=q(),bd(r,n.measurePageBox())),zd(t,n.latestValues,n.snapshot?.layoutBox,r)}return Tu(this.latestValues)&&zd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ga.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=ga.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=q(),this.targetWithTransforms=q()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Md(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):bd(this.target,this.layout.layoutBox),ju(this.target,this.targetDelta)):bd(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),da.value&&mf.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||wu(this.parent.latestValues)||Eu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=q(),this.relativeTargetOrigin=q(),Pd(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),bd(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ga.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;bd(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Pu(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=q());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(xd(this.prevProjectionDelta.x,this.projectionDelta.x),xd(this.prevProjectionDelta.y,this.projectionDelta.y)),Ad(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!qd(this.projectionDelta.x,this.prevProjectionDelta.x)||!qd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),da.value&&mf.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$l(),this.projectionDelta=$l(),this.projectionDeltaWithTransform=$l()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=$l();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=q(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(zf));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;If(a.x,e.x,n),If(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pd(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Rf(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Ud(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=q(),bd(d,this.relativeTarget)),s&&(this.animationValues=i,ef(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(ha(this.pendingAnimation),void 0),this.pendingAnimation=R.update(()=>{pf.hasAnimatedSinceResize=!0,xa.layout++,this.motionValue||=Nc(0),this.motionValue.jump(0,!1),this.currentAnimation=of(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{xa.layout--},onComplete:()=>{xa.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Gf(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||q();let t=Dd(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Dd(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}bd(t,n),Ru(t,i),Ad(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ff),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&vf(`z`,e,r,this.animationValues);for(let t=0;t<hf.length;t++)vf(`rotate${hf[t]}`,e,r,this.animationValues),vf(`skew${hf[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=df(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=df(t?.pointerEvents)||``),this.hasProjected&&!Tu(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Yd(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Ju){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ju[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?df(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Ef),this.root.sharedNodes.clear()}}}function xf(e){e.updateLayout()}function Sf(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Jd(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Dd(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;yd(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Gf(i,t.layoutBox,n)&&Jd(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Dd(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=$l();Ad(o,n,t.layoutBox);let s=$l();a?Ad(s,e.applyTransform(r,!0),t.measuredBox):Ad(s,n,t.layoutBox);let c=!Vd(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=q();Pd(s,t.layoutBox,i.layoutBox,o);let c=q();Pd(c,n,a.layoutBox,o),Gd(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Cf(e){da.value&&mf.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function wf(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Tf(e){e.clearSnapshot()}function Ef(e){e.clearMeasurements()}function Df(e){e.isLayoutDirty=!0,e.updateLayout()}function Of(e){e.isLayoutDirty=!1}function kf(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Af(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function jf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Mf(e){e.resolveTargetDelta()}function Nf(e){e.calcProjection()}function Pf(e){e.resetSkewAndRotation()}function Ff(e){e.removeLeadSnapshot()}function If(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Lf(e,t,n,r){e.min=H(t.min,n.min,r),e.max=H(t.max,n.max,r)}function Rf(e,t,n,r){Lf(e.x,t.x,n.x,r),Lf(e.y,t.y,n.y,r)}function zf(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Bf={duration:.45,ease:[.4,0,.1,1]},Vf=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Hf=Vf(`applewebkit/`)&&!Vf(`chrome/`)?Math.round:I;function Uf(e){e.min=Hf(e.min),e.max=Hf(e.max)}function Wf(e){Uf(e.x),Uf(e.y)}function Gf(e,t,n){return e===`position`||e===`preserve-aspect`&&!Od(Kd(t),Kd(n),.2)}function Kf(e){return e!==e.root&&e.scroll?.wasRoot}var qf=bf({attachResizeListener:(e,t)=>sf(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Jf={current:void 0},Yf=bf({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jf.current){let e=new qf({});e.mount(window),e.setOptions({layoutScroll:!0}),Jf.current=e}return Jf.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Xf=(0,N.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Zf(e=!0){let t=(0,N.useContext)(Di);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,N.useId)();(0,N.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,N.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Qf=(0,N.createContext)({strict:!1}),$f={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},ep=!1;function tp(){if(ep)return;let e={};for(let t in $f)e[t]={isEnabled:e=>$f[t].some(t=>!!e[t])};hu(e),ep=!0}function np(){return tp(),gu()}function rp(e){let t=np();for(let n in e)t[n]={...t[n],...e[n]};hu(t)}var ip=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function ap(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ip.has(e)}var op=e=>!ap(e);function sp(e){typeof e==`function`&&(op=t=>t.startsWith(`on`)?!ap(t):e(t))}try{sp((T(),d(S)).default)}catch{}function cp(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||Rc(e[i])||(op(i)||n===!0&&ap(i)||!t&&!ap(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var lp=(0,N.createContext)({});function up(e,t){if(ou(e)){let{initial:t,animate:n}=e;return{initial:t===!1||ru(t)?t:void 0,animate:ru(n)?n:void 0}}return e.inherit===!1?{}:t}function dp(e){let{initial:t,animate:n}=up(e,(0,N.useContext)(lp));return(0,N.useMemo)(()=>({initial:t,animate:n}),[fp(t),fp(n)])}function fp(e){return Array.isArray(e)?e.join(` `):e}var pp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mp(e,t,n){for(let r in t)!Rc(t[r])&&!Yu(r,n)&&(e[r]=t[r])}function hp({transformTemplate:e},t){return(0,N.useMemo)(()=>{let n=pp();return Wu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function gp(e,t){let n=e.style||{},r={};return mp(r,n,e),Object.assign(r,hp(e,t)),r}function _p(e,t){let n={},r=gp(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var vp=()=>({...pp(),attrs:{}});function yp(e,t,n,r){let i=(0,N.useMemo)(()=>{let n=vp();return rd(n,t,ad(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};mp(t,e.style,e),i.style={...t,...i.style}}return i}var bp=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function xp(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(bp.indexOf(e)>-1||/[A-Z]/u.test(e))}function Sp(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??xp(e)?yp:_p)(t,r,i,e),c=cp(t,typeof e==`string`,a),l=e===N.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,N.useMemo)(()=>Rc(u)?u.get():u,[u]);return(0,N.createElement)(e,{...l,children:d})}function Cp({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:wp(n,r,i,e),renderState:t()}}function wp(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=df(a[e]);let{initial:o,animate:s}=e,c=ou(e),l=su(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!nu(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ec(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Tp=e=>(t,n)=>{let r=(0,N.useContext)(lp),i=(0,N.useContext)(Di),a=()=>Cp(e,t,r,i);return n?a():Ti(a)},Ep=Tp({scrapeMotionValuesFromProps:Xu,createRenderState:pp}),Dp=Tp({scrapeMotionValuesFromProps:sd,createRenderState:vp}),Op=Symbol.for(`motionComponentSymbol`);function kp(e,t,n){let r=(0,N.useRef)(n);(0,N.useInsertionEffect)(()=>{r.current=n});let i=(0,N.useRef)(null);return(0,N.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Ap=(0,N.createContext)({});function jp(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Mp(e,t,n,r,i,a){let{visualElement:o}=(0,N.useContext)(lp),s=(0,N.useContext)(Qf),c=(0,N.useContext)(Di),l=(0,N.useContext)(Xf),u=l.reducedMotion,d=l.skipAnimations,f=(0,N.useRef)(null),p=(0,N.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,N.useContext)(Ap);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Np(f.current,n,i,h);let g=(0,N.useRef)(!1);(0,N.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Hc],v=(0,N.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Ei(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,N.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Np(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Pp(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&jp(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Pp(e){if(e)return e.options.allowProjection===!1?Pp(e.parent):e.projection}var Z=Ci();function Fp(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&rp(r);let a=n?n===`svg`:xp(e),o=a?Dp:Ep;function s(n,s){let c,l={...(0,N.useContext)(Xf),...n,layoutId:Ip(n)},{isStatic:u}=l,d=dp(n),f=o(n,u);if(!u&&typeof window<`u`){Lp(l,r);let t=Rp(l);c=t.MeasureLayout,d.visualElement=Mp(e,f,l,i,t.ProjectionNode,a)}return(0,Z.jsxs)(lp.Provider,{value:d,children:[c&&d.visualElement?(0,Z.jsx)(c,{visualElement:d.visualElement,...l}):null,Sp(e,n,kp(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,N.forwardRef)(s);return c[Op]=e,c}function Ip({layoutId:e}){let t=(0,N.useContext)(wi).id;return t&&e!==void 0?t+`-`+e:e}function Lp(e,t){(0,N.useContext)(Qf).strict}function Rp(e){let{drag:t,layout:n}=np();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function zp(e,t){if(typeof Proxy>`u`)return Fp;let n=new Map,r=(n,r)=>Fp(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Fp(a,void 0,e,t)),n.get(a))})}var Bp=(e,t)=>t.isSVG??xp(e)?new cd(t):new Qu(t,{allowProjection:e!==N.Fragment}),Vp=class extends yu{constructor(e){super(e),e.animationState||=hd(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();nu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Hp=0,Up={animation:{Feature:Vp},exit:{Feature:class extends yu{constructor(){super(...arguments),this.id=Hp++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Dc(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Wp(e){return{point:{x:e.pageX,y:e.pageY}}}var Gp=e=>t=>El(t)&&e(t,Wp(t));function Kp(e,t,n,r){return sf(e,t,Gp(n),r)}var qp=({current:e})=>e?e.ownerDocument.defaultView:null,Jp=(e,t)=>Math.abs(e-t);function Yp(e,t){let n=Jp(e.x,t.x),r=Jp(e.y,t.y);return Math.sqrt(n**2+r**2)}var Xp=new Set([`auto`,`scroll`]),Zp=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Qp(this.lastRawMoveEventInfo,this.transformPagePoint));let e=em(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Yp(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ga;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Qp(t,this.transformPagePoint),R.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=em(e.type===`pointercancel`?this.lastMoveEventInfo:Qp(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!El(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Qp(Wp(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=ga;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,em(s,this.history)),this.removeListeners=L(Kp(this.contextWindow,`pointermove`,this.handlePointerMove),Kp(this.contextWindow,`pointerup`,this.handlePointerUp),Kp(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Xp.has(e.overflowX)||Xp.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),R.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ha(this.updatePoint)}};function Qp(e,t){return t?{point:t(e.point)}:e}function $p(e,t){return{x:e.x-t.x,y:e.y-t.y}}function em({point:e},t){return{point:e,delta:$p(e,nm(t)),offset:$p(e,tm(t)),velocity:rm(t,.1)}}function tm(e){return e[0]}function nm(e){return e[e.length-1]}function rm(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=nm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>zi(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>zi(t)*2&&(r=e[1]);let a=Bi(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function im(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?H(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?H(n,e,r.max):Math.min(e,n)),e}function am(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function om(e,{top:t,left:n,bottom:r,right:i}){return{x:am(e.x,n,i),y:am(e.y,t,r)}}function sm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function cm(e,t){return{x:sm(e.x,t.x),y:sm(e.y,t.y)}}function lm(e,t){let n=.5,r=Dd(e),i=Dd(t);return i>r?n=Li(t.min,t.max-r,e.min):r>i&&(n=Li(e.min,e.max-i,t.min)),Ai(0,1,n)}function um(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var dm=.35;function fm(e=dm){return e===!1?e=0:e===!0&&(e=dm),{x:pm(e,`left`,`right`),y:pm(e,`top`,`bottom`)}}function pm(e,t,n){return{min:mm(e,t),max:mm(e,n)}}function mm(e,t){return typeof e==`number`?e:e[t]||0}var hm=new WeakMap,gm=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=q(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Wp(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xl(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jd(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Wa.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Dd(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&R.update(()=>i(e,t),!1,!0),Bc(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=bm(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&R.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Zp(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:qp(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&R.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!ym(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=im(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&jp(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=om(n.layoutBox,e):this.constraints=!1,this.elastic=fm(t),r!==this.constraints&&!jp(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Jd(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=um(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!jp(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Bu(n,r.root,this.visualElement.getTransformPagePoint()),a=cm(r.layout.layoutBox,i);if(t){let e=t(xu(a));this.hasMutatedConstraints=!!e,e&&(a=bu(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Jd(o=>{if(!ym(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Bc(this.visualElement,e),n.start(wc(e,n,0,t,this.visualElement,!1))}stopAnimation(){Jd(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Jd(t=>{let{drag:n}=this.getProps();if(!ym(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-H(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!jp(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Jd(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=lm({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jd(t=>{if(!ym(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(H(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;hm.set(this.visualElement,this);let e=this.visualElement.current,t=Kp(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Al(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();jp(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=vm(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),R.read(r);let o=sf(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Jd(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=dm,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function _m(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function vm(e,t,n){let r=Jl(e,_m(n)),i=Jl(t,_m(n));return()=>{r(),i()}}function ym(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function bm(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var xm=class extends yu{constructor(e){super(e),this.removeGroupControls=I,this.removeListeners=I,this.controls=new gm(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||I}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Sm=e=>(t,n)=>{e&&R.update(()=>e(t,n),!1,!0)},Cm=class extends yu{constructor(){super(...arguments),this.removePointerDownListener=I}onPointerDown(e){this.session=new Zp(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qp(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Sm(e),onStart:Sm(t),onMove:Sm(n),onEnd:(e,t)=>{delete this.session,r&&R.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Kp(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},wm=!1,Tm=class extends N.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),wm&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),pf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),wm=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||R.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),_l.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;wm=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Em(e){let[t,n]=Zf(),r=(0,N.useContext)(wi);return(0,Z.jsx)(Tm,{...e,layoutGroup:r,switchLayoutGroup:(0,N.useContext)(Ap),isPresent:t,safeToRemove:n})}var Dm={pan:{Feature:Cm},drag:{Feature:xm,ProjectionNode:Yf,MeasureLayout:Em}};function Om(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&R.postRender(()=>i(t,Wp(t)))}var km=class extends yu{mount(){let{current:e}=this.node;e&&(this.unmount=wl(e,(e,t)=>(Om(this.node,t,`Start`),e=>Om(this.node,e,`End`))))}unmount(){}},Am=class extends yu{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=L(sf(this.node.current,`focus`,()=>this.onFocus()),sf(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function jm(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&R.postRender(()=>i(t,Wp(t)))}var Mm=class extends yu{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Ll(e,(e,t)=>(jm(this.node,t,`Start`),(e,{success:t})=>jm(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Nm=new WeakMap,Pm=new WeakMap,Fm=e=>{let t=Nm.get(e.target);t&&t(e)},Im=e=>{e.forEach(Fm)};function Lm({root:e,...t}){let n=e||document;Pm.has(n)||Pm.set(n,{});let r=Pm.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Im,{root:e,...t})),r[i]}function Rm(e,t,n){let r=Lm(t);return Nm.set(e,n),r.observe(e),()=>{Nm.delete(e),r.unobserve(e)}}var zm={some:0,all:1},Bm=class extends yu{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:zm[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Rm(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Vm(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Vm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Hm={inView:{Feature:Bm},tap:{Feature:Mm},focus:{Feature:Am},hover:{Feature:km}},Um={layout:{ProjectionNode:Yf,MeasureLayout:Em}},Q=zp({...Up,...Hm,...Dm,...Um},Bp),Wm=`/tira-space/assets/Logo1-v5mz_h4u.png`,Gm=()=>{let[e,t]=(0,N.useState)(!1);return(0,Z.jsxs)(Km,{children:[(0,Z.jsx)(qm,{children:(0,Z.jsx)(`img`,{src:Wm,alt:`logo`})}),(0,Z.jsxs)(Jm,{children:[(0,Z.jsx)(`a`,{href:`/`,children:`Home`}),(0,Z.jsx)(`a`,{href:`/tira-space/about`,children:`About`}),(0,Z.jsx)(`a`,{href:`/tira-space/services`,children:`Services`}),(0,Z.jsx)(`a`,{href:`/tira-space/products`,children:`Products`}),(0,Z.jsx)(`a`,{href:`/tira-space/research`,children:`Research`}),(0,Z.jsx)(`a`,{href:`/tira-space/careers`,children:`Careers`}),(0,Z.jsx)(`a`,{href:`/tira-space/contact`,children:`Contact`})]}),(0,Z.jsx)(Ym,{onClick:()=>t(!e),children:e?(0,Z.jsx)(Mr,{}):(0,Z.jsx)(bi,{})}),e&&(0,Z.jsxs)(Xm,{as:Q.div,initial:{x:`100%`},animate:{x:0},exit:{x:`100%`},transition:{duration:.4},children:[(0,Z.jsx)(`a`,{href:`/`,children:`Home`}),(0,Z.jsx)(`a`,{href:`/tira-space/about`,children:`About`}),(0,Z.jsx)(`a`,{href:`/tira-space/services`,children:`Services`}),(0,Z.jsx)(`a`,{href:`/tira-space/products`,children:`Products`}),(0,Z.jsx)(`a`,{href:`/tira-space/research`,children:`Research`}),(0,Z.jsx)(`a`,{href:`/tira-space/careers`,children:`Careers`}),(0,Z.jsx)(`a`,{href:`/tira-space/contact`,children:`Contact`})]})]})},Km=P.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px; /* ✅ fixed height (no extra gap) */
  background: #00308f;
  display: flex;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
`,qm=P.div`
  img {
    height: 50px;
    border-radius: 10px;
    padding: 5px;
    background: white;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }
  }
`,Jm=P.div`
  display: flex;
  gap: 30px;
  margin-left: auto; /* ✅ pushes links to right */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    /* underline animation */
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 2px;
      background: white;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Ym=P.div`
  display: none;
  margin-left: auto;
  color: white;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,Xm=P(Q.div)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 260px;
  height: calc(100vh - 70px); /* ✅ no extra space */
  background: #00308f;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      padding-left: 10px;
      color: #ddd;
    }
  }
`,Zm=()=>(0,Z.jsxs)(Qm,{children:[(0,Z.jsxs)($m,{children:[(0,Z.jsxs)(eh,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},children:[(0,Z.jsx)(`h2`,{children:`TIRA SPACE`}),(0,Z.jsx)(`p`,{children:`Innovating Space, Radar & AI-driven solutions for the future.`})]}),(0,Z.jsxs)(eh,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.1},children:[(0,Z.jsx)(`h3`,{children:`Quick Links`}),(0,Z.jsx)(`a`,{href:`/`,children:`Home`}),(0,Z.jsx)(`a`,{href:`/services`,children:`Services`}),(0,Z.jsx)(`a`,{href:`/products`,children:`Products`}),(0,Z.jsx)(`a`,{href:`/contact`,children:`Contact`})]}),(0,Z.jsxs)(eh,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.2},children:[(0,Z.jsx)(`h3`,{children:`Services`}),(0,Z.jsx)(`a`,{href:`#`,children:`Hardware Design`}),(0,Z.jsx)(`a`,{href:`#`,children:`Software Design`}),(0,Z.jsx)(`a`,{href:`#`,children:`Testing & Analysis`}),(0,Z.jsx)(`a`,{href:`#`,children:`Automation`})]}),(0,Z.jsxs)(eh,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.3},children:[(0,Z.jsx)(`h3`,{children:`Contact`}),(0,Z.jsx)(`p`,{children:`📍 India`}),(0,Z.jsx)(`p`,{children:`📧 info@tira.com`}),(0,Z.jsx)(`p`,{children:`📞 +91 9876543210`}),(0,Z.jsxs)(th,{children:[(0,Z.jsx)(Cr,{}),(0,Z.jsx)(Sr,{}),(0,Z.jsx)(br,{}),(0,Z.jsx)(yr,{})]})]})]}),(0,Z.jsx)(nh,{}),(0,Z.jsx)(rh,{children:`© 2026 Tira Space Technologies PVT Limited. All Rights Reserved.`})]}),Qm=P.footer`
  background: linear-gradient(135deg, #00308F, #001f5c);
  color: white;
  padding: 60px 40px 30px;
`,$m=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`,eh=P.div`
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 15px;
    position: relative;

    &::after {
      content: "";
      width: 40px;
      height: 2px;
      background: #4da3ff;
      display: block;
      margin-top: 5px;
    }
  }

  p {
    color: #ddd;
    margin-bottom: 10px;
    font-size: 14px;
  }

  a {
    display: block;
    margin-bottom: 8px;
    color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      color: #4da3ff;
      padding-left: 5px;
    }
  }
`,th=P.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;

  svg {
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #4da3ff;
      transform: scale(1.2);
    }
  }

  /* Center on mobile */
  @media (max-width: 576px) {
    justify-content: center;
  }
`,nh=P.div`
  margin: 30px 0 20px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`,rh=P.div`
  text-align: center;
  font-size: 14px;
  color: #bbb;
`,ih=`modulepreload`,ah=function(e){return`/tira-space/`+e},oh={},sh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ah(t,n),t in oh)return;oh[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ih,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ch=`popstate`;function lh(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function uh(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return hh(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:gh(t)}return vh(t,n,null,e)}function dh(e,t){if(e===!1||e==null)throw Error(t)}function fh(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ph(){return Math.random().toString(36).substring(2,10)}function mh(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function hh(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?_h(t):t,state:n,key:t&&t.key||r||ph(),unstable_mask:i}}function gh({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function _h(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function vh(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=lh(e)?e:hh(h.location,e,t);n&&n(r,e),l=u()+1;let d=mh(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=lh(e)?e:hh(h.location,e,t);n&&n(r,e),l=u();let i=mh(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return yh(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ch,d),c=e,()=>{i.removeEventListener(ch,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function yh(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),dh(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:gh(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function bh(e,t,n=`/`){return xh(e,t,n,!1)}function xh(e,t,n,r){let i=zh((typeof t==`string`?_h(t):t).pathname||`/`,n);if(i==null)return null;let a=Ch(e);Th(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Rh(i);o=Fh(a[e],t,r)}return o}function Sh(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function Ch(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;dh(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Jh([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(dh(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Ch(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Nh(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of wh(e.path))a(e,t,!0,n)}),t}function wh(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=wh(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function Th(e){e.sort((e,t)=>e.score===t.score?Ph(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Eh=/^:[\w-]+$/,Dh=3,Oh=2,kh=1,Ah=10,jh=-2,Mh=e=>e===`*`;function Nh(e,t){let n=e.split(`/`),r=n.length;return n.some(Mh)&&(r+=jh),t&&(r+=Oh),n.filter(e=>!Mh(e)).reduce((e,t)=>e+(Eh.test(t)?Dh:t===``?kh:Ah),r)}function Ph(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Fh(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Ih({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Ih({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Jh([a,u.pathname]),pathnameBase:Xh(Jh([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Jh([a,u.pathnameBase]))}return o}function Ih(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Lh(e,t=!1,n=!0){fh(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Rh(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return fh(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function zh(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Vh(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?_h(e):e,a;return n?(n=qh(n),a=n.startsWith(`/`)?Hh(n.substring(1),`/`):Hh(n,t)):a=t,{pathname:a,search:Zh(r),hash:Qh(i)}}function Hh(e,t){let n=Yh(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Uh(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wh(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Gh(e){let t=Wh(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Kh(e,t,n,r=!1){let i;typeof e==`string`?i=_h(e):(i={...e},dh(!i.pathname||!i.pathname.includes(`?`),Uh(`?`,`pathname`,`search`,i)),dh(!i.pathname||!i.pathname.includes(`#`),Uh(`#`,`pathname`,`hash`,i)),dh(!i.search||!i.search.includes(`#`),Uh(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Vh(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var qh=e=>e.replace(/\/\/+/g,`/`),Jh=e=>qh(e.join(`/`)),Yh=e=>e.replace(/\/+$/,``),Xh=e=>Yh(e).replace(/^\/*/,`/`),Zh=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Qh=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,$h=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function eg(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function tg(e){return Jh(e.map(e=>e.route.path).filter(Boolean))||`/`}var ng=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function rg(e,t){let n=e;if(typeof n!=`string`||!Bh.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ng)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=zh(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{fh(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ig=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(ig);var ag=[`GET`,...ig];new Set(ag);var og=N.createContext(null);og.displayName=`DataRouter`;var sg=N.createContext(null);sg.displayName=`DataRouterState`;var cg=N.createContext(!1);function lg(){return N.useContext(cg)}var ug=N.createContext({isTransitioning:!1});ug.displayName=`ViewTransition`;var dg=N.createContext(new Map);dg.displayName=`Fetchers`;var fg=N.createContext(null);fg.displayName=`Await`;var pg=N.createContext(null);pg.displayName=`Navigation`;var mg=N.createContext(null);mg.displayName=`Location`;var hg=N.createContext({outlet:null,matches:[],isDataRoute:!1});hg.displayName=`Route`;var gg=N.createContext(null);gg.displayName=`RouteError`;var _g=`REACT_ROUTER_ERROR`,vg=`REDIRECT`,yg=`ROUTE_ERROR_RESPONSE`;function bg(e){if(e.startsWith(`${_g}:${vg}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function xg(e){if(e.startsWith(`${_g}:${yg}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new $h(t.status,t.statusText,t.data)}catch{}}function Sg(e,{relative:t}={}){dh(Cg(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=N.useContext(pg),{hash:i,pathname:a,search:o}=kg(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Jh([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Cg(){return N.useContext(mg)!=null}function wg(){return dh(Cg(),`useLocation() may be used only in the context of a <Router> component.`),N.useContext(mg).location}var Tg=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Eg(e){N.useContext(pg).static||N.useLayoutEffect(e)}function Dg(){let{isDataRoute:e}=N.useContext(hg);return e?Jg():Og()}function Og(){dh(Cg(),`useNavigate() may be used only in the context of a <Router> component.`);let e=N.useContext(og),{basename:t,navigator:n}=N.useContext(pg),{matches:r}=N.useContext(hg),{pathname:i}=wg(),a=JSON.stringify(Gh(r)),o=N.useRef(!1);return Eg(()=>{o.current=!0}),N.useCallback((r,s={})=>{if(fh(o.current,Tg),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Kh(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Jh([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}N.createContext(null);function kg(e,{relative:t}={}){let{matches:n}=N.useContext(hg),{pathname:r}=wg(),i=JSON.stringify(Gh(n));return N.useMemo(()=>Kh(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ag(e,t){return jg(e,t)}function jg(e,t,n){dh(Cg(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=N.useContext(pg),{matches:i}=N.useContext(hg),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Xg(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=wg(),d;if(t){let e=typeof t==`string`?_h(t):t;dh(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=bh(e,{pathname:p});fh(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),fh(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Rg(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Jh([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Jh([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?N.createElement(mg.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function Mg(){let e=qg(),t=eg(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=N.createElement(N.Fragment,null,N.createElement(`p`,null,`💿 Hey developer 👋`),N.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,N.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,N.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),N.createElement(N.Fragment,null,N.createElement(`h2`,null,`Unexpected Application Error!`),N.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?N.createElement(`pre`,{style:i},n):null,o)}var Ng=N.createElement(Mg,null),Pg=class extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=xg(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:N.createElement(hg.Provider,{value:this.props.routeContext},N.createElement(gg.Provider,{value:e,children:this.props.component}));return this.context?N.createElement(Ig,{error:e},t):t}};Pg.contextType=cg;var Fg=new WeakMap;function Ig({children:e,error:t}){let{basename:n}=N.useContext(pg);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=bg(t.digest);if(e){let r=Fg.get(t);if(r)throw r;let i=rg(e.location,n);if(ng&&!Fg.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Fg.set(t,n),n}return N.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Lg({routeContext:e,match:t,children:n}){let r=N.useContext(og);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(hg.Provider,{value:e},n)}function Rg(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);dh(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:tg(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ng,o&&(s<0&&c===0?(Xg(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?N.createElement(n.route.Component,null):n.route.element?n.route.element:e,N.createElement(Lg,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?N.createElement(Pg,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function zg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bg(e){let t=N.useContext(og);return dh(t,zg(e)),t}function Vg(e){let t=N.useContext(sg);return dh(t,zg(e)),t}function Hg(e){let t=N.useContext(hg);return dh(t,zg(e)),t}function Ug(e){let t=Hg(e),n=t.matches[t.matches.length-1];return dh(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Wg(){return Ug(`useRouteId`)}function Gg(){return Vg(`useNavigation`).navigation}function Kg(){let{matches:e,loaderData:t}=Vg(`useMatches`);return N.useMemo(()=>e.map(e=>Sh(e,t)),[e,t])}function qg(){let e=N.useContext(gg),t=Vg(`useRouteError`),n=Ug(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Jg(){let{router:e}=Bg(`useNavigate`),t=Ug(`useNavigate`),n=N.useRef(!1);return Eg(()=>{n.current=!0}),N.useCallback(async(r,i={})=>{fh(n.current,Tg),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Yg={};function Xg(e,t,n){!t&&!Yg[e]&&(Yg[e]=!0,fh(!1,n))}N.memo(Zg);function Zg({routes:e,future:t,state:n,isStatic:r,onError:i}){return jg(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Qg(e){dh(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function $g({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){dh(!Cg(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=N.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=_h(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=N.useMemo(()=>{let e=zh(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return fh(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:N.createElement(pg.Provider,{value:c},N.createElement(mg.Provider,{children:t,value:h}))}function e_({children:e,location:t}){return Ag(t_(e),t)}N.Component;function t_(e,t=[]){let n=[];return N.Children.forEach(e,(e,r)=>{if(!N.isValidElement(e))return;let i=[...t,r];if(e.type===N.Fragment){n.push.apply(n,t_(e.props.children,i));return}dh(e.type===Qg,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dh(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=t_(e.props.children,i)),n.push(a)}),n}var n_=`get`,r_=`application/x-www-form-urlencoded`;function i_(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function a_(e){return i_(e)&&e.tagName.toLowerCase()===`button`}function o_(e){return i_(e)&&e.tagName.toLowerCase()===`form`}function s_(e){return i_(e)&&e.tagName.toLowerCase()===`input`}function c_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l_(e,t){return e.button===0&&(!t||t===`_self`)&&!c_(e)}var u_=null;function d_(){if(u_===null)try{new FormData(document.createElement(`form`),0),u_=!1}catch{u_=!0}return u_}var f_=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function p_(e){return e!=null&&!f_.has(e)?(fh(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${r_}"`),null):e}function m_(e,t){let n,r,i,a,o;if(o_(e)){let o=e.getAttribute(`action`);r=o?zh(o,t):null,n=e.getAttribute(`method`)||n_,i=p_(e.getAttribute(`enctype`))||r_,a=new FormData(e)}else if(a_(e)||s_(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?zh(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||n_,i=p_(e.getAttribute(`formenctype`))||p_(o.getAttribute(`enctype`))||r_,a=new FormData(o,e),!d_()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(i_(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=n_,r=null,i=r_,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var h_={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},g_=/[&><\u2028\u2029]/g;function __(e){return e.replace(g_,e=>h_[e])}function v_(e,t){if(e===!1||e==null)throw Error(t)}function y_(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&zh(i.pathname,t)===`/`?i.pathname=`${Yh(t)}/_root.${r}`:i.pathname=`${Yh(i.pathname)}.${r}`,i}async function b_(e,t){if(e.id in t)return t[e.id];try{let n=await sh(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function x_(e){return e!=null&&typeof e.page==`string`}function S_(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function C_(e,t,n){return O_((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await b_(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(S_).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function w_(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function T_(e,t,{includeHydrateFallback:n}={}){return E_(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function E_(e){return[...new Set(e)]}function D_(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function O_(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!x_(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(D_(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function k_(){let e=N.useContext(og);return v_(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function A_(){let e=N.useContext(sg);return v_(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var j_=N.createContext(void 0);j_.displayName=`FrameworkContext`;function M_(){let e=N.useContext(j_);return v_(e,`You must render this element inside a <HydratedRouter> element`),e}function N_(e,t){let n=N.useContext(j_),[r,i]=N.useState(!1),[a,o]=N.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=N.useRef(null);N.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),N.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:P_(s,p),onBlur:P_(c,m),onMouseEnter:P_(l,p),onMouseLeave:P_(u,m),onTouchStart:P_(d,p)}]:[a,f,{}]:[!1,f,{}]}function P_(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function F_({page:e,...t}){let n=lg(),{router:r}=k_(),i=N.useMemo(()=>bh(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?N.createElement(L_,{page:e,matches:i,...t}):N.createElement(R_,{page:e,matches:i,...t}):null}function I_(e){let{manifest:t,routeModules:n}=M_(),[r,i]=N.useState([]);return N.useEffect(()=>{let r=!1;return C_(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function L_({page:e,matches:t,...n}){let r=wg(),{future:i}=M_(),{basename:a}=k_(),o=N.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=y_(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return N.createElement(N.Fragment,null,o.map(e=>N.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function R_({page:e,matches:t,...n}){let r=wg(),{future:i,manifest:a,routeModules:o}=M_(),{basename:s}=k_(),{loaderData:c,matches:l}=A_(),u=N.useMemo(()=>w_(e,t,l,a,r,`data`),[e,t,l,a,r]),d=N.useMemo(()=>w_(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=N.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=y_(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=N.useMemo(()=>T_(d,a),[d,a]),m=I_(d);return N.createElement(N.Fragment,null,f.map(e=>N.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>N.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>N.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function z_(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}N.Component;var B_=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{B_&&(window.__reactRouterVersion=`7.14.1`)}catch{}function V_({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=N.useRef();i.current??=uh({window:r,v5Compat:!0});let a=i.current,[o,s]=N.useState({action:a.action,location:a.location}),c=N.useCallback(e=>{n===!1?s(e):N.startTransition(()=>s(e))},[n]);return N.useLayoutEffect(()=>a.listen(c),[a,c]),N.createElement($g,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function H_({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=N.useState({action:n.action,location:n.location}),o=N.useCallback(e=>{r===!1?a(e):N.startTransition(()=>a(e))},[r]);return N.useLayoutEffect(()=>n.listen(o),[n,o]),N.createElement($g,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}H_.displayName=`unstable_HistoryRouter`;var U_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W_=N.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=N.useContext(pg),v=typeof l==`string`&&U_.test(l),y=rg(l,h);l=y.to;let b=Sg(l,{relative:r}),x=wg(),S=null;if(o){let e=Kh(o,[],x.unstable_mask?x.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Jh([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=N_(n,p),E=Z_(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||E(t)}let O=!(y.isExternal||i),ee=N.createElement(`a`,{...p,...T,href:(O?S:void 0)||y.absoluteURL||b,onClick:O?D:e,ref:z_(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?N.createElement(N.Fragment,null,ee,N.createElement(F_,{page:b})):ee});W_.displayName=`Link`;var G_=N.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=kg(a,{relative:c.relative}),d=wg(),f=N.useContext(sg),{navigator:p,basename:m}=N.useContext(pg),h=f!=null&&sv(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=zh(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return N.createElement(W_,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});G_.displayName=`NavLink`;var K_=N.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=n_,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=N.useContext(pg),g=ev(),_=tv(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&U_.test(s);return N.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?N.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});K_.displayName=`Form`;function q_({getKey:e,storageKey:t,...n}){let r=N.useContext(j_),{basename:i}=N.useContext(pg),a=wg(),o=Kg();av({getKey:e,storageKey:t});let s=N.useMemo(()=>{if(!r||!e)return null;let t=iv(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return N.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${__(JSON.stringify(t||nv))}, ${__(JSON.stringify(s))})`}})}q_.displayName=`ScrollRestoration`;function J_(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y_(e){let t=N.useContext(og);return dh(t,J_(e)),t}function X_(e){let t=N.useContext(sg);return dh(t,J_(e)),t}function Z_(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Dg(),d=wg(),f=kg(e,{relative:o});return N.useCallback(p=>{if(l_(p,t)){p.preventDefault();let t=n===void 0?gh(d)===gh(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?N.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Q_=0,$_=()=>`__${String(++Q_)}__`;function ev(){let{router:e}=Y_(`useSubmit`),{basename:t}=N.useContext(pg),n=Wg(),r=e.fetch,i=e.navigate;return N.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=m_(e,t);a.navigate===!1?await r(a.fetcherKey||$_(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function tv(e,{relative:t}={}){let{basename:n}=N.useContext(pg),r=N.useContext(hg);dh(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...kg(e||`.`,{relative:t})},o=wg();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Jh([n,a.pathname])),gh(a)}var nv=`react-router-scroll-positions`,rv={};function iv(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:zh(e.pathname,n)||e.pathname},t)),i??=e.key,i}function av({getKey:e,storageKey:t}={}){let{router:n}=Y_(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=X_(`useScrollRestoration`),{basename:a}=N.useContext(pg),o=wg(),s=Kg(),c=Gg();N.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),ov(N.useCallback(()=>{if(c.state===`idle`){let t=iv(o,s,a,e);rv[t]=window.scrollY}try{sessionStorage.setItem(t||nv,JSON.stringify(rv))}catch(e){fh(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(N.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||nv);e&&(rv=JSON.parse(e))}catch{}},[t]),N.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(rv,()=>window.scrollY,e?(t,n)=>iv(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),N.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{fh(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function ov(e,t){let{capture:n}=t||{};N.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function sv(e,{relative:t}={}){let n=N.useContext(ug);dh(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Y_(`useViewTransitionState`),i=kg(e,{relative:t});if(!n.isTransitioning)return!1;let a=zh(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=zh(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ih(i.pathname,o)!=null||Ih(i.pathname,a)!=null}function cv(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function lv(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:cv(t[n])&&cv(e[n])&&Object.keys(t[n]).length>0&&lv(e[n],t[n])})}var uv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function dv(){let e=typeof document<`u`?document:{};return lv(e,uv),e}var fv={document:uv,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function pv(){let e=typeof window<`u`?window:{};return lv(e,fv),e}function mv(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function hv(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function gv(e,t=0){return setTimeout(e,t)}function _v(){return Date.now()}function vv(e){let t=pv(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function yv(e,t=`x`){let n=pv(),r,i,a,o=vv(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function bv(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function xv(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Sv(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!xv(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(bv(t[i])&&bv(r[i])?r[i].__swiper__?t[i]=r[i]:Sv(t[i],r[i]):!bv(t[i])&&bv(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:Sv(t[i],r[i])):t[i]=r[i])}}}return t}function Cv(e,t,n){e.style.setProperty(t,n)}function wv({swiper:e,targetPosition:t,side:n}){let r=pv(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function Tv(e,t=``){let n=pv(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function Ev(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function Dv(e,t){let n=pv(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=Ev(e,t)),r}function Ov(e){try{console.warn(e);return}catch{}}function kv(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:mv(t)),n}function Av(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function jv(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mv(e,t){return pv().getComputedStyle(e,null).getPropertyValue(t)}function Nv(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Pv(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Fv(e,t,n){let r=pv();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}function Iv(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function Lv(e,t=``){typeof trustedTypes<`u`?e.innerHTML=trustedTypes.createPolicy(`html`,{createHTML:e=>e}).createHTML(t):e.innerHTML=t}var Rv;function zv(){let e=pv(),t=dv();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Bv(){return Rv||=zv(),Rv}var Vv;function Hv({userAgent:e}={}){let t=Bv(),n=pv(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function Uv(e={}){return Vv||=Hv(e),Vv}var Wv;function Gv(){let e=pv(),t=Uv(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Kv(){return Wv||=Gv(),Wv}function qv({swiper:e,on:t,emit:n}){let r=pv(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function Jv({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=pv(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=Pv(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Yv={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Xv(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mv(r,`padding-left`)||0,10)-parseInt(Mv(r,`padding-right`)||0,10),n=n-parseInt(Mv(r,`padding-top`)||0,10)-parseInt(Mv(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Zv(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=Tv(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(Cv(r,`--swiper-centered-offset-before`,``),Cv(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(Cv(r,`--swiper-slides-offset-before`,`${m}px`),Cv(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),Mv(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Fv(i,`width`,!0):Fv(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Cv(r,`--swiper-centered-offset-before`,`${-d[0]}px`),Cv(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function Qv(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function $v(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var ey=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function ty(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),ey(c,h,n.slideVisibleClass),ey(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function ny(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var ry=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function iy(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>Tv(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=jv(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=Av(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{ry(e,e===c,n.slideActiveClass),ry(e,e===u,n.slideNextClass),ry(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var ay=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},oy=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},sy=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&oy(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&oy(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&oy(e,r)};function cy(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function ly(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=cy(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&sy(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function uy(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var dy={updateSize:Xv,updateSlides:Zv,updateAutoHeight:Qv,updateSlidesOffset:$v,updateSlidesProgress:ty,updateProgress:ny,updateSlidesClasses:iy,updateActiveIndex:ly,updateClickedSlide:uy};function fy(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=yv(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function py(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function my(){return-this.snapGrid[0]}function hy(){return-this.snapGrid[this.snapGrid.length-1]}function gy(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return wv({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var _y={getTranslate:fy,setTranslate:py,minTranslate:my,maxTranslate:hy,translateTo:gy};function vy(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function yy({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function by(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),yy({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function xy(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),yy({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var Sy={setTransition:vy,transitionStart:by,transitionEnd:xy};function Cy(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return wv({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=Kv().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function wy(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function Ty(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function Ey(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function Dy(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Oy(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function ky(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Tv(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),gv(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Ay={slideTo:Cy,slideToLoop:wy,slideNext:Ty,slidePrev:Ey,slideReset:Dy,slideToClosest:Oy,slideToClickedSlide:ky};function jy(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{Tv(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=Tv(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?kv(`swiper-slide`,[r.slideBlankClass]):kv(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):Ov(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):Ov(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function My({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?Ov(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&Ov("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,E=a&&T-_<y&&!v,D=E?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):D=i;let O=n===`next`||!n,ee=n===`prev`||!n,te=0,ne=0,re=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(re<x){te=Math.max(x-re,b);for(let e=0;e<x-re;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(re+y>T-x){ne=Math.max(re-(T-x*2),b),E&&(ne=Math.max(ne,y-T+_+1));for(let e=0;e<ne;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),ee&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),O&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&ee||w.length>0&&O)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&ee){if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D+te]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D+Math.ceil(te),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&O)if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D-ne]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D-ne,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function Ny(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Py={loopCreate:jy,loopFix:My,loopDestroy:Ny};function Fy(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Iy(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ly={setGrabCursor:Fy,unsetGrabCursor:Iy};function Ry(e,t=this){function n(t){if(!t||t===dv()||t===pv())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function zy(e,t,n){let r=pv(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function By(e){let t=this,n=dv(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){zy(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!Dv(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?Ry(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!zy(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=_v(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function Vy(e){let t=dv(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=_v());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Hy(e){let t=this,n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=_v(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=_v(),gv(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function Uy(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function Wy(e){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Gy(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function Ky(e){let t=this;ay(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update()}function qy(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var Jy=(e,t)=>{let n=dv(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,Uy,!0):e[l](`observerUpdate`,Uy,!0),i[c](`load`,e.onLoad,{capture:!0}))};function Yy(){let e=this,{params:t}=e;e.onTouchStart=By.bind(e),e.onTouchMove=Vy.bind(e),e.onTouchEnd=Hy.bind(e),e.onDocumentTouchStart=qy.bind(e),t.cssMode&&(e.onScroll=Gy.bind(e)),e.onClick=Wy.bind(e),e.onLoad=Ky.bind(e),Jy(e,`on`)}function Xy(){Jy(this,`off`)}var Zy={attachEvents:Yy,detachEvents:Xy},Qy=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function $y(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=dv(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=Qy(e,r),f=Qy(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),Sv(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function eb(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=pv(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var tb={setBreakpoint:$y,getBreakpoint:eb};function nb(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function rb(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=nb([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function ib(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var ab={addClasses:rb,removeClasses:ib};function ob(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var sb={checkOverflow:ob},cb={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function lb(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){Sv(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){Sv(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),Sv(t,n)}}var ub={eventsEmitter:Yv,update:dy,translate:_y,transition:Sy,slide:Ay,loop:Py,grabCursor:Ly,events:Zy,breakpoints:tb,checkOverflow:sb,classes:ab},db={},fb=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=Sv({},r),n&&!r.el&&(r.el=n);let i=dv();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=Sv({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=Bv(),a.device=Uv({userAgent:r.userAgent}),a.browser=Kv(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:lb(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=Sv({},Sv({},cb,o),db,r),a.originalParams=Sv({},a.params),a.passedParams=Sv({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=Nv(Tv(t,`.${n.slideClass}, swiper-slide`)[0]);return Nv(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=Tv(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&ay(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):Tv(n,r())[0];return!i&&t.params.createElements&&(i=kv(`div`,t.params.wrapperClass),n.append(i),Tv(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||Mv(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||Mv(n,`direction`)===`rtl`),wrongRTL:Mv(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?ay(t,e):e.addEventListener(`load`,e=>{ay(t,e.target)})}),sy(t),t.initialized=!0,sy(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),hv(n)),n.destroyed=!0,null)}static extendDefaults(e){Sv(db,e)}static get extendedDefaults(){return db}static get defaults(){return cb}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(ub).forEach(e=>{Object.keys(ub[e]).forEach(t=>{fb.prototype[t]=ub[e][t]})}),fb.use([qv,Jv]);var pb=`eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(`.`);function mb(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`&&!e.__swiper__}function hb(e,t){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:mb(t[n])&&mb(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:hb(e[n],t[n]):e[n]=t[n]})}function gb(e={}){return e.navigation&&e.navigation.nextEl===void 0&&e.navigation.prevEl===void 0}function _b(e={}){return e.pagination&&e.pagination.el===void 0}function vb(e={}){return e.scrollbar&&e.scrollbar.el===void 0}function yb(e=``){let t=e.split(` `).map(e=>e.trim()).filter(e=>!!e),n=[];return t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),n.join(` `)}function bb(e=``){return e?e.includes(`swiper-wrapper`)?e:`swiper-wrapper ${e}`:`swiper-wrapper`}function xb({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:o,paginationEl:s}){let c=r.filter(e=>e!==`children`&&e!==`direction`&&e!==`wrapperClass`),{params:l,pagination:u,navigation:d,scrollbar:f,virtual:p,thumbs:m}=e,h,g,_,v,y,b,x,S;r.includes(`thumbs`)&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&l.thumbs&&(!l.thumbs.swiper||l.thumbs.swiper.destroyed)&&(h=!0),r.includes(`controller`)&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(g=!0),r.includes(`pagination`)&&n.pagination&&(n.pagination.el||s)&&(l.pagination||l.pagination===!1)&&u&&!u.el&&(_=!0),r.includes(`scrollbar`)&&n.scrollbar&&(n.scrollbar.el||o)&&(l.scrollbar||l.scrollbar===!1)&&f&&!f.el&&(v=!0),r.includes(`navigation`)&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);let C=t=>{e[t]&&(e[t].destroy(),t===`navigation`?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),l[t].prevEl=void 0,l[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),l[t].el=void 0,e[t].el=void 0))};r.includes(`loop`)&&e.isElement&&(l.loop&&!n.loop?b=!0:!l.loop&&n.loop?x=!0:S=!0),c.forEach(e=>{if(mb(l[e])&&mb(n[e]))Object.assign(l[e],n[e]),(e===`navigation`||e===`pagination`||e===`scrollbar`)&&`enabled`in n[e]&&!n[e].enabled&&C(e);else{let t=n[e];(t===!0||t===!1)&&(e===`navigation`||e===`pagination`||e===`scrollbar`)?t===!1&&C(e):l[e]=n[e]}}),c.includes(`controller`)&&!g&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes(`children`)&&t&&p&&l.virtual.enabled?(p.slides=t,p.update(!0)):r.includes(`virtual`)&&p&&l.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes(`children`)&&t&&l.loop&&(S=!0),h&&m.init()&&m.update(!0),g&&(e.controller.control=l.controller.control),_&&(e.isElement&&(!s||typeof s==`string`)&&(s=document.createElement(`div`),s.classList.add(`swiper-pagination`),s.part.add(`pagination`),e.el.appendChild(s)),s&&(l.pagination.el=s),u.init(),u.render(),u.update()),v&&(e.isElement&&(!o||typeof o==`string`)&&(o=document.createElement(`div`),o.classList.add(`swiper-scrollbar`),o.part.add(`scrollbar`),e.el.appendChild(o)),o&&(l.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),y&&(e.isElement&&((!i||typeof i==`string`)&&(i=document.createElement(`div`),i.classList.add(`swiper-button-next`),Lv(i,e.navigation.arrowSvg),i.part.add(`button-next`),e.el.appendChild(i)),(!a||typeof a==`string`)&&(a=document.createElement(`div`),a.classList.add(`swiper-button-prev`),Lv(a,e.navigation.arrowSvg),a.part.add(`button-prev`),e.el.appendChild(a))),i&&(l.navigation.nextEl=i),a&&(l.navigation.prevEl=a),d.init(),d.update()),r.includes(`allowSlideNext`)&&(e.allowSlideNext=n.allowSlideNext),r.includes(`allowSlidePrev`)&&(e.allowSlidePrev=n.allowSlidePrev),r.includes(`direction`)&&e.changeDirection(n.direction,!1),(b||S)&&e.loopDestroy(),(x||S)&&e.loopCreate(),e.update()}function Sb(e={},t=!0){let n={on:{}},r={},i={};hb(n,cb),n._emitClasses=!0,n.init=!1;let a={},o=pb.map(e=>e.replace(/_/,``)),s=Object.assign({},e);return Object.keys(s).forEach(s=>{e[s]!==void 0&&(o.indexOf(s)>=0?mb(e[s])?(n[s]={},i[s]={},hb(n[s],e[s]),hb(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]==`function`?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])}),[`navigation`,`pagination`,`scrollbar`].forEach(e=>{n[e]===!0&&(n[e]={}),n[e]===!1&&delete n[e]}),{params:n,passedParams:i,rest:a,events:r}}function Cb({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},o){gb(o)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),_b(o)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),vb(o)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}function wb(e,t,n,r,i){let a=[];if(!t)return a;let o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){let e=r.map(i),t=n.map(i);e.join(``)!==t.join(``)&&o(`children`),r.length!==n.length&&o(`children`)}return pb.filter(e=>e[0]===`_`).map(e=>e.replace(/_/,``)).forEach(n=>{if(n in e&&n in t)if(mb(e[n])&&mb(t[n])){let r=Object.keys(e[n]),i=Object.keys(t[n]);r.length===i.length?(r.forEach(r=>{e[n][r]!==t[n][r]&&o(n)}),i.forEach(r=>{e[n][r]!==t[n][r]&&o(n)})):o(n)}else e[n]!==t[n]&&o(n)}),a}var Tb=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit(`_virtualUpdated`),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Eb(){return Eb=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eb.apply(this,arguments)}function Db(e){return e.type&&e.type.displayName&&e.type.displayName.includes(`SwiperSlide`)}function Ob(e){let t=[];return N.Children.toArray(e).forEach(e=>{Db(e)?t.push(e):e.props&&e.props.children&&Ob(e.props.children).forEach(e=>t.push(e))}),t}function kb(e){let t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return N.Children.toArray(e).forEach(e=>{if(Db(e))t.push(e);else if(e.props&&e.props.slot&&n[e.props.slot])n[e.props.slot].push(e);else if(e.props&&e.props.children){let r=Ob(e.props.children);r.length>0?r.forEach(e=>t.push(e)):n[`container-end`].push(e)}else n[`container-end`].push(e)}),{slides:t,slots:n}}function Ab(e,t,n){if(!n)return null;let r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},i=e.isHorizontal()?{[e.rtlTranslate?`right`:`left`]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,l=[];for(let e=s;e<c;e+=1)e>=a&&e<=o&&l.push(t[r(e)]);return l.map((t,n)=>N.cloneElement(t,{swiper:e,style:i,key:t.props.virtualIndex||t.key||`slide-${n}`}))}function jb(e,t){return typeof window>`u`?(0,N.useEffect)(e,t):(0,N.useLayoutEffect)(e,t)}var Mb=(0,N.createContext)(null),Nb=(0,N.createContext)(null),Pb=(0,N.forwardRef)(({className:e,tag:t=`div`,wrapperTag:n=`div`,children:r,onSwiper:i,...a}={},o)=>{let s=!1,[c,l]=(0,N.useState)(`swiper`),[u,d]=(0,N.useState)(null),[f,p]=(0,N.useState)(!1),m=(0,N.useRef)(!1),h=(0,N.useRef)(null),g=(0,N.useRef)(null),_=(0,N.useRef)(null),v=(0,N.useRef)(null),y=(0,N.useRef)(null),b=(0,N.useRef)(null),x=(0,N.useRef)(null),S=(0,N.useRef)(null),{params:C,passedParams:w,rest:T,events:E}=Sb(a),{slides:D,slots:O}=kb(r),ee=()=>{p(!f)};Object.assign(C.on,{_containerClasses(e,t){l(t)}});let te=()=>{Object.assign(C.on,E),s=!0;let e={...C};if(delete e.wrapperClass,g.current=new fb(e),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=D;let e={cache:!1,slides:D,renderExternal:d,renderExternalUpdate:!1};hb(g.current.params.virtual,e),hb(g.current.originalParams.virtual,e)}};h.current||te(),g.current&&g.current.on(`_beforeBreakpoint`,ee);let ne=()=>{s||!E||!g.current||Object.keys(E).forEach(e=>{g.current.on(e,E[e])})},re=()=>{!E||!g.current||Object.keys(E).forEach(e=>{g.current.off(e,E[e])})};(0,N.useEffect)(()=>()=>{g.current&&g.current.off(`_beforeBreakpoint`,ee)}),(0,N.useEffect)(()=>{!m.current&&g.current&&(g.current.emitSlidesClasses(),m.current=!0)}),jb(()=>{if(o&&(o.current=h.current),h.current)return g.current.destroyed&&te(),Cb({el:h.current,nextEl:y.current,prevEl:b.current,paginationEl:x.current,scrollbarEl:S.current,swiper:g.current},C),i&&!g.current.destroyed&&i(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),jb(()=>{ne();let e=wb(w,_.current,D,v.current,e=>e.key);return _.current=w,v.current=D,e.length&&g.current&&!g.current.destroyed&&xb({swiper:g.current,slides:D,passedParams:w,changedParams:e,nextEl:y.current,prevEl:b.current,scrollbarEl:S.current,paginationEl:x.current}),()=>{re()}}),jb(()=>{Tb(g.current)},[u]);function ie(){return C.virtual?Ab(g.current,D,u):D.map((e,t)=>N.cloneElement(e,{swiper:g.current,swiperSlideIndex:t}))}return N.createElement(t,Eb({ref:h,className:yb(`${c}${e?` ${e}`:``}`)},T),N.createElement(Nb.Provider,{value:g.current},O[`container-start`],N.createElement(n,{className:bb(C.wrapperClass)},O[`wrapper-start`],ie(),O[`wrapper-end`]),gb(C)&&N.createElement(N.Fragment,null,N.createElement(`div`,{ref:b,className:`swiper-button-prev`}),N.createElement(`div`,{ref:y,className:`swiper-button-next`})),vb(C)&&N.createElement(`div`,{ref:S,className:`swiper-scrollbar`}),_b(C)&&N.createElement(`div`,{ref:x,className:`swiper-pagination`}),O[`container-end`]))});Pb.displayName=`Swiper`;var Fb=(0,N.forwardRef)(({tag:e=`div`,children:t,className:n=``,swiper:r,zoom:i,lazy:a,virtualIndex:o,swiperSlideIndex:s,...c}={},l)=>{let u=(0,N.useRef)(null),[d,f]=(0,N.useState)(`swiper-slide`),[p,m]=(0,N.useState)(!1);function h(e,t,n){t===u.current&&f(n)}jb(()=>{if(s!==void 0&&(u.current.swiperSlideIndex=s),l&&(l.current=u.current),!(!u.current||!r)){if(r.destroyed){d!==`swiper-slide`&&f(`swiper-slide`);return}return r.on(`_slideClass`,h),()=>{r&&r.off(`_slideClass`,h)}}}),jb(()=>{r&&u.current&&!r.destroyed&&f(r.getSlideClasses(u.current))},[r]);let g={isActive:d.indexOf(`swiper-slide-active`)>=0,isVisible:d.indexOf(`swiper-slide-visible`)>=0,isFullyVisible:d.indexOf(`swiper-slide-fully-visible`)>=0,isPrev:d.indexOf(`swiper-slide-prev`)>=0,isNext:d.indexOf(`swiper-slide-next`)>=0},_=()=>typeof t==`function`?t(g):t;return N.createElement(e,Eb({ref:u,className:yb(`${d}${n?` ${n}`:``}`),"data-swiper-slide-index":o,onLoad:()=>{m(!0)}},c),i&&N.createElement(Mb.Provider,{value:g},N.createElement(`div`,{className:`swiper-zoom-container`,"data-swiper-zoom":typeof i==`number`?i:void 0},_(),a&&!p&&N.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}}))),!i&&N.createElement(Mb.Provider,{value:g},_(),a&&!p&&N.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}})))});Fb.displayName=`SwiperSlide`;function Ib(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=Tv(e.el,`.${r[i]}`)[0];a||(a=kv(`div`,r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Lb(e=``){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,`\\$1`).replace(/ /g,`.`)}`}function Rb({swiper:e,extendParams:t,on:n,emit:r}){let i=`swiper-pagination`;t({pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function s(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(t,n){let{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&(t.classList.add(`${r}-${n}`),t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&t.classList.add(`${r}-${n}-${n}`)))}function l(e,t,n){if(e%=n,t%=n,t===e+1)return`next`;if(t===e-1)return`previous`}function u(t){let n=t.target.closest(Lb(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();let r=Nv(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;let t=l(e.realIndex,r,e.slides.length);t===`next`?e.slideNext():t===`previous`?e.slidePrev():e.slideToLoop(r)}else e.slideTo(r)}function d(){let t=e.rtl,n=e.params.pagination;if(s())return;let i=e.pagination.el;i=Iv(i);let l,u,d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,f=e.params.loop?Math.ceil(d/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):e.snapIndex===void 0?(u=e.previousIndex||0,l=e.activeIndex||0):(l=e.snapIndex,u=e.previousSnapIndex),n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,s,d,f;if(n.dynamicBullets&&(a=Fv(r[0],e.isHorizontal()?`width`:`height`,!0),i.forEach(t=>{t.style[e.isHorizontal()?`width`:`height`]=`${a*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&u!==void 0&&(o+=l-(u||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(l-o,0),d=s+(Math.min(r.length,n.dynamicMainBullets)-1),f=(d+s)/2),r.forEach(e=>{let t=[...[``,`-next`,`-next-next`,`-prev`,`-prev-prev`,`-main`].map(e=>`${n.bulletActiveClass}${e}`)].map(e=>typeof e==`string`&&e.includes(` `)?e.split(` `):e).flat();e.classList.remove(...t)}),i.length>1)r.forEach(t=>{let r=Nv(t);r===l?t.classList.add(...n.bulletActiveClass.split(` `)):e.isElement&&t.setAttribute(`part`,`bullet`),n.dynamicBullets&&(r>=s&&r<=d&&t.classList.add(...`${n.bulletActiveClass}-main`.split(` `)),r===s&&c(t,`prev`),r===d&&c(t,`next`))});else{let t=r[l];if(t&&t.classList.add(...n.bulletActiveClass.split(` `)),e.isElement&&r.forEach((e,t)=>{e.setAttribute(`part`,t===l?`bullet-active`:`bullet`)}),n.dynamicBullets){let e=r[s],t=r[d];for(let e=s;e<=d;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(` `));c(e,`prev`),c(t,`next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),o=(a*i-a)/2-f*a,s=t?`right`:`left`;r.forEach(t=>{t.style[e.isHorizontal()?s:`top`]=`${o}px`})}}i.forEach((t,i)=>{if(n.type===`fraction`&&(t.querySelectorAll(Lb(n.currentClass)).forEach(e=>{e.textContent=n.formatFractionCurrent(l+1)}),t.querySelectorAll(Lb(n.totalClass)).forEach(e=>{e.textContent=n.formatFractionTotal(f)})),n.type===`progressbar`){let r;r=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let i=(l+1)/f,a=1,o=1;r===`horizontal`?a=i:o=i,t.querySelectorAll(Lb(n.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}n.type===`custom`&&n.renderCustom?(Lv(t,n.renderCustom(e,l+1,f)),i===0&&r(`paginationRender`,t)):(i===0&&r(`paginationRender`,t),r(`paginationUpdate`,t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](n.lockClass)})}function f(){let t=e.params.pagination;if(s())return;let n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,i=e.pagination.el;i=Iv(i);let a=``;if(t.type===`bullets`){let r=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?a+=t.renderBullet.call(e,n,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?`part="bullet"`:``} class="${t.bulletClass}"></${t.bulletElement}>`}t.type===`fraction`&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type===`progressbar`&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(n=>{t.type!==`custom`&&Lv(n,a||``),t.type===`bullets`&&e.pagination.bullets.push(...n.querySelectorAll(Lb(t.bulletClass)))}),t.type!==`custom`&&r(`paginationRender`,i[0])}function p(){e.params.pagination=Ib(e,e.originalParams.pagination,e.params.pagination,{el:`swiper-pagination`});let t=e.params.pagination;if(!t.el)return;let n;typeof t.el==`string`&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el==`string`&&(n=[...document.querySelectorAll(t.el)]),n||=t.el,!(!n||n.length===0)&&(e.params.uniqueNavElements&&typeof t.el==`string`&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.find(t=>Pv(t,`.swiper`)[0]===e.el))),Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=Iv(n),n.forEach(n=>{t.type===`bullets`&&t.clickable&&n.classList.add(...(t.clickableClass||``).split(` `)),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type===`bullets`&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener(`click`,u),e.enabled||n.classList.add(t.lockClass)}))}function m(){let t=e.params.pagination;if(s())return;let n=e.pagination.el;n&&(n=Iv(n),n.forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(n.classList.remove(...(t.clickableClass||``).split(` `)),n.removeEventListener(`click`,u))})),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(` `)))}n(`changeDirection`,()=>{if(!e.pagination||!e.pagination.el)return;let t=e.params.pagination,{el:n}=e.pagination;n=Iv(n),n.forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{e.params.pagination.enabled===!1?g():(p(),f(),d())}),n(`activeIndexChange`,()=>{e.snapIndex===void 0&&d()}),n(`snapIndexChange`,()=>{d()}),n(`snapGridLengthChange`,()=>{f(),d()}),n(`destroy`,()=>{m()}),n(`enable disable`,()=>{let{el:t}=e.pagination;t&&(t=Iv(t),t.forEach(t=>t.classList[e.enabled?`remove`:`add`](e.params.pagination.lockClass)))}),n(`lock unlock`,()=>{d()}),n(`click`,(t,n)=>{let i=n.target,a=Iv(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&a&&a.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;a[0].classList.contains(e.params.pagination.hiddenClass)===!0?r(`paginationShow`):r(`paginationHide`),a.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});let h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=Iv(t),t.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),p(),f(),d()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=Iv(t),t.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:h,disable:g,render:f,update:d,init:p,destroy:m})}function zb({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,m,h,g;function _(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener(`transitionend`,_),!(g||t.detail&&t.detail.bySwiperTouchMove)&&T())}let v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&=(c=l,!1);let t=e.autoplay.paused?l:u+c-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/s),o=requestAnimationFrame(()=>{v()})},y=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],t)return parseInt(t.getAttribute(`data-swiper-autoplay`),10)},b=()=>{let t=e.params.autoplay.delay,n=y();return!Number.isNaN(n)&&n>0&&(t=n),t},x=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=t;n===void 0&&(n=b(),s=n,c=n),l=n;let i=e.params.speed,d=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return n>0?(clearTimeout(a),a=setTimeout(()=>{d()},n)):requestAnimationFrame(()=>{d()}),n},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,x(),r(`autoplayStart`)},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r(`autoplayStop`)},w=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),t||(h=!0);let i=()=>{r(`autoplayPause`),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener(`transitionend`,_):T()};if(e.autoplay.paused=!0,n){i();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),i())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,x(l)):x(),e.autoplay.paused=!1,r(`autoplayResume`))},E=()=>{if(e.destroyed||!e.autoplay.running)return;let t=dv();t.visibilityState===`hidden`&&(h=!0,w(!0)),t.visibilityState===`visible`&&T()},D=t=>{t.pointerType===`mouse`&&(h=!0,g=!0,!(e.animating||e.autoplay.paused)&&w(!0))},O=t=>{t.pointerType===`mouse`&&(g=!1,e.autoplay.paused&&T())},ee=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,D),e.el.addEventListener(`pointerleave`,O))},te=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,D),e.el.removeEventListener(`pointerleave`,O))},ne=()=>{dv().addEventListener(`visibilitychange`,E)},re=()=>{dv().removeEventListener(`visibilitychange`,E)};n(`init`,()=>{e.params.autoplay.enabled&&(ee(),ne(),S())}),n(`destroy`,()=>{te(),re(),e.autoplay.running&&C()}),n(`_freeModeStaticRelease`,()=>{(p||h)&&T()}),n(`_freeModeNoMomentumRelease`,()=>{e.params.autoplay.disableOnInteraction?C():w(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?w(!0,!0):C())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}f=!0,p=!1,h=!1,m=setTimeout(()=>{h=!0,p=!0,w(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&T(),p=!1,f=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(l=b(),s=b())}),Object.assign(e.autoplay,{start:S,stop:C,pause:w,resume:T})}var Bb=`/tira-space/assets/Hero11-DGpO04bV.jpg`,Vb=`/tira-space/assets/Hero12-BgVbo8AK.jpg`,Hb=`/tira-space/assets/Hero13-DIIxQM1I.jpg`,Ub=`/tira-space/assets/Hero14-XgEhoo4U.jpg`,Wb=()=>{let e=(0,N.useRef)(null);return(0,Z.jsxs)(Gb,{children:[(0,Z.jsx)(qb,{onClick:()=>e.current.slidePrev(),children:(0,Z.jsx)(di,{})}),(0,Z.jsx)(Jb,{onClick:()=>e.current.slideNext(),children:(0,Z.jsx)(ui,{})}),(0,Z.jsx)(Pb,{modules:[Rb,zb],onSwiper:t=>e.current=t,pagination:{clickable:!0},autoplay:{delay:3500,disableOnInteraction:!1},loop:!0,children:[{img:Bb,text:`Radar Systems`},{img:Vb,text:`Satellite Tech`},{img:Hb,text:`AI Defense`},{img:Ub,text:`Space Innovation`}].map((e,t)=>(0,Z.jsx)(Fb,{children:(0,Z.jsxs)(Yb,{$bg:e.img,children:[(0,Z.jsx)(Xb,{}),(0,Z.jsx)(Zb,{children:e.text}),(0,Z.jsxs)(Qb,{as:Q.div,initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,Z.jsx)(`h1`,{children:e.text}),(0,Z.jsx)(`p`,{children:`Next Generation Space & Radar Technology`}),(0,Z.jsx)(`button`,{children:`Explore`})]})]})},t))})]})},Gb=P.section`
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
  }

  /* DOTS */
  .swiper-pagination-bullet {
    background: white;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #00308F;
    opacity: 1;
  }
`,Kb=P.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 55px;
  height: 55px;

  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.7);

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #00308F;
    border-color: #00308F;
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 0 15px rgba(0, 48, 143, 0.6);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`,qb=P(Kb)`
  left: 20px;
`,Jb=P(Kb)`
  right: 20px;
`,Yb=P.div`
  height: 90vh;
  width: 100%;
  position: relative;

  background: url(${e=>e.$bg}) center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 65vh;
  }
`,Xb=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
`,Zb=P.h1`
  position: absolute;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Qb=P.div`
  position: relative;
  color: white;
  max-width: 700px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 25px;
    color: #ddd;
    font-size: 18px;
  }

  button {
    padding: 12px 28px;
    background: #00308F;
    border: 2px solid #00308F;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0, 48, 143, 0.3);
  }

  button:hover {
    background: transparent;
    border-color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`,$b=`/tira-space/assets/About-DSdYuTP9.png`,ex=()=>(0,Z.jsx)(tx,{children:(0,Z.jsxs)(nx,{children:[(0,Z.jsx)(rx,{children:(0,Z.jsx)(`img`,{src:$b,alt:`About`})}),(0,Z.jsxs)(ix,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(ax,{children:`ABOUT COMPANY`}),(0,Z.jsxs)(ox,{children:[`Innovating Today, `,(0,Z.jsx)(`span`,{children:`Securing Tomorrow.`})]}),(0,Z.jsx)(sx,{children:`TIRA SPACE is a next-generation space technology and defense solutions company dedicated to building intelligent systems that empower a safer and smarter future.`}),(0,Z.jsx)(sx,{children:`We specialize in the design, development, and deployment of advanced satellite systems, AI-powered radar solutions, and end-to-end space technology services.`}),(0,Z.jsxs)(cx,{children:[(0,Z.jsxs)(lx,{children:[(0,Z.jsx)(ux,{children:(0,Z.jsx)(Ir,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Our Products`}),(0,Z.jsx)(`p`,{children:`Satellite systems, Radar solutions, AI-powered analytics.`})]})]}),(0,Z.jsxs)(lx,{children:[(0,Z.jsx)(ux,{children:(0,Z.jsx)(ai,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Our Services`}),(0,Z.jsx)(`p`,{children:`System integration, Custom engineering, Mission support.`})]})]}),(0,Z.jsxs)(lx,{children:[(0,Z.jsx)(ux,{children:(0,Z.jsx)(Gr,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Our Technology`}),(0,Z.jsx)(`p`,{children:`AI integration, Real-time processing, Secure communication.`})]})]}),(0,Z.jsxs)(lx,{children:[(0,Z.jsx)(ux,{children:(0,Z.jsx)(Nr,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Our Commitment`}),(0,Z.jsx)(`p`,{children:`Quality, Innovation, Reliability and Customer success.`})]})]})]}),(0,Z.jsxs)(dx,{children:[`At `,(0,Z.jsx)(`span`,{children:`TIRA SPACE`}),`, we combine innovation, expertise, and passion to deliver impactful space and defense solutions.`]})]})]})}),tx=P.section`
  padding: 80px 40px;
  background: #f8f9fc;
`,nx=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rx=P.div`
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  }
`,ix=P.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,ax=P.p`
  color: #00308F;
  font-weight: bold;
  letter-spacing: 2px;
`,ox=P.h2`
  font-size: 36px;
  line-height: 1.3;

  span {
    color: #00308F;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,sx=P.p`
  color: #555;
  line-height: 1.6;
`,cx=P.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,lx=P.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  h4 {
    margin: 0;
    color: #00308F;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #555;
  }
`,ux=P.div`
  font-size: 22px;
  color: #00308F;
  background: rgba(0, 48, 143, 0.1);
  padding: 10px;
  border-radius: 50%;
`,dx=P.p`
  margin-top: 10px;
  font-weight: 500;

  span {
    color: #00308F;
    font-weight: bold;
  }
`,fx=()=>(0,Z.jsxs)(px,{children:[(0,Z.jsxs)(mx,{children:[(0,Z.jsx)(`h1`,{children:`OUR SERVICES`}),(0,Z.jsxs)(`h2`,{children:[`What We `,(0,Z.jsx)(`span`,{children:`Offer`})]})]}),(0,Z.jsx)(hx,{children:[{title:`Hardware Design`,desc:`Advanced circuit design, embedded systems, and high-performance hardware development tailored for modern technology needs.`,icon:(0,Z.jsx)(Gr,{}),color:`#ff6b6b`},{title:`Software Design`,desc:`Robust and scalable software solutions with modern architecture, performance optimization, and seamless integration.`,icon:(0,Z.jsx)(oi,{}),color:`#4ecdc4`},{title:`Thickness Measurement`,desc:`Accurate thickness measurement solutions for all plating types ensuring precision, reliability, and compliance.`,icon:(0,Z.jsx)(Lr,{}),color:`#ffd93d`},{title:`Plating Testing & Analysis`,desc:`Comprehensive testing, validation, and detailed analysis reports for all plating processes and materials.`,icon:(0,Z.jsx)(ei,{}),color:`#6c5ce7`},{title:`Plating Suggestions`,desc:`Expert recommendations to resolve component-related plating issues with optimized performance and durability.`,icon:(0,Z.jsx)(Yr,{}),color:`#00b894`}].map((e,t)=>(0,Z.jsxs)(gx,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:t*.15},children:[(0,Z.jsx)(_x,{style:{background:e.color},children:e.icon}),(0,Z.jsx)(`h3`,{style:{color:e.color},children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),px=P.section`
  padding: 80px 40px;
  background: #f5f7ff;
`,mx=P.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    color: #00308F;
    font-size: 40px;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 36px;
    padding: 20px 0 0 0;

    span {
      color: #00308F;
    }
  }
`,hx=P.div`
  display: grid;
  gap: 30px;

  /* Laptop */
  grid-template-columns: repeat(3, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,gx=P.div`
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.4s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
  }
`,_x=P.div`
  width: 60px;
  height: 60px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  color: white;
  border-radius: 50%;

  transition: 0.3s;

  ${gx}:hover & {
    transform: rotate(10deg) scale(1.1);
  }
`,vx=`/tira-space/assets/Hero1-DXv4HOp2.jpg`,yx=()=>{let e=Dg();return(0,Z.jsxs)(bx,{children:[(0,Z.jsxs)(xx,{children:[(0,Z.jsx)(`p`,{children:`OUR PRODUCTS`}),(0,Z.jsxs)(`h2`,{children:[`Advanced Solutions, `,(0,Z.jsx)(`span`,{children:`Built for Tomorrow`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`High-performance systems engineered for space, defense and beyond.`})]}),(0,Z.jsx)(Sx,{children:[{id:`01`,title:`Tele Command Antennas`,img:vx,icon:(0,Z.jsx)(Ir,{}),color:`#1e3c72`,desc:`High precision Tele command antennas for reliable communication.`,features:[`High Gain & Efficiency`,`Wide Frequency Range`,`Robust & Reliable`,`Weather Resistant`]},{id:`02`,title:`Spiral Antennas`,img:vx,icon:(0,Z.jsx)(vi,{}),color:`#11998e`,desc:`Compact spiral antennas offering wideband performance.`,features:[`Wideband Performance`,`Lightweight Design`,`Compact Structure`,`High Durability`]},{id:`03`,title:`UHF & VHF Filters`,img:vx,icon:(0,Z.jsx)(wr,{}),color:`#f7971e`,desc:`High performance filters ensuring signal clarity.`,features:[`Low Insertion Loss`,`High Selectivity`,`Custom Configurations`,`Military Grade Quality`]},{id:`04`,title:`AI Engine & Embrai`,img:vx,icon:(0,Z.jsx)(Gr,{}),color:`#6a11cb`,desc:`Advanced AI engine for intelligent processing.`,features:[`AI/ML Algorithms`,`Real-time Processing`,`Edge Computing`,`Secure & Scalable`]},{id:`05`,title:`Navigation Systems`,img:vx,icon:(0,Z.jsx)(Jr,{}),color:`#2e7d32`,desc:`Reliable navigation systems for precise tracking.`,features:[`High Accuracy`,`Multi-GNSS Support`,`Real-time Tracking`,`Rugged & Reliable`]}].map((e,t)=>(0,Z.jsxs)(Cx,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.15},children:[(0,Z.jsxs)(wx,{$bg:e.img,children:[(0,Z.jsx)(`span`,{className:`number`,children:e.id}),(0,Z.jsx)(`h3`,{children:e.title})]}),(0,Z.jsx)(Tx,{style:{background:e.color},children:e.icon}),(0,Z.jsxs)(Ex,{style:{background:e.color},children:[(0,Z.jsx)(`p`,{children:e.desc}),(0,Z.jsx)(`ul`,{children:e.features.map((e,t)=>(0,Z.jsx)(`li`,{children:e},t))})]})]},t))}),(0,Z.jsx)(Dx,{onClick:()=>e(`/products`),children:`View All Products →`})]})},bx=P.section`
  padding: 80px 40px;
  background: #f5f7ff;
`,xx=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #555;
    margin-top: 10px;
  }
`,Sx=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Cx=P.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  height: 100%; /* 🔥 Equal height fix */

  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`,wx=P.div`
  height: 240px;
  background: url(${e=>e.$bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;
  color: white;

  display: flex;
  align-items: flex-end;

  h3 {
    z-index: 2;
    margin-bottom: 10px;
  }

  .number {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 60px;
    opacity: 0.1;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`,Tx=P.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 22px;

  position: absolute;
  top: 210px; /* 🔥 Adjusted */
  left: 50%;
  transform: translateX(-50%);

  border: 3px solid white;
  z-index: 5;
`,Ex=P.div`
  flex: 1; /* 🔥 Equal height content */
  padding: 50px 20px 30px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 15px;
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 13px;
      margin-bottom: 8px;
      position: relative;
      padding-left: 15px;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
      }
    }
  }
`,Dx=P.button`
  margin: 50px auto 0;
  display: block;

  padding: 14px 30px;
  background: #00308F;
  color: white;
  border: none;
  cursor: pointer;

  border-radius: 6px;
  font-size: 16px;

  transition: 0.3s;

  &:hover {
    background: #001f5c;
    transform: translateY(-2px);
  }
`,Ox=()=>(0,Z.jsxs)(kx,{children:[(0,Z.jsxs)(Ax,{children:[(0,Z.jsxs)(`h2`,{children:[`Why `,(0,Z.jsx)(`span`,{children:`Choose Us`})]}),(0,Z.jsx)(`p`,{children:`At TIRA SPACE, we combine innovation, precision, and expertise to deliver world-class space and defense solutions. Our commitment to quality and advanced engineering ensures reliable systems that meet the demands of tomorrow.`})]}),(0,Z.jsx)(jx,{children:[{icon:(0,Z.jsx)(Nr,{}),title:`Trusted & Secure`,desc:`We ensure high-level security standards with reliable and mission-critical solutions for defense and space applications.`,color:`#00308F`},{icon:(0,Z.jsx)(Rr,{}),title:`Innovation Driven`,desc:`Our cutting-edge technologies combine AI, satellite systems, and advanced radar solutions to deliver future-ready systems.`,color:`#1e90ff`},{icon:(0,Z.jsx)(ai,{}),title:`Advanced Engineering`,desc:`From hardware design to AI-powered software, we provide complete end-to-end engineering solutions.`,color:`#6a11cb`},{icon:(0,Z.jsx)(Er,{}),title:`Customer Focused`,desc:`We prioritize client satisfaction by delivering customized solutions and continuous support.`,color:`#2e7d32`}].map((e,t)=>(0,Z.jsxs)(Mx,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(Nx,{style:{background:e.color},children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),kx=P.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f5f7ff, #eef2ff);
`,Ax=P.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
  margin-bottom: 60px;

  h2 {
    font-size: 38px;
    margin-bottom: 15px;

    span {
      color: #00308F;
    }
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`,jx=P.div`
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Mx=P.div`
  background: white;
  padding: 40px 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    margin-top: 20px;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
`,Nx=P.div`
  width: 70px;
  height: 70px;
  margin: auto;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 28px;

  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`,Px=()=>{let e=Dg();return(0,Z.jsxs)(Fx,{children:[(0,Z.jsx)(Ix,{}),(0,Z.jsxs)(Lx,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.8},children:[(0,Z.jsxs)(`h2`,{children:[`Ready to Build the `,(0,Z.jsx)(`span`,{children:`Future with Us?`})]}),(0,Z.jsx)(`p`,{children:`Partner with TIRA SPACE to develop advanced space and defense solutions powered by innovation, precision, and cutting-edge technology.`}),(0,Z.jsxs)(Rx,{children:[(0,Z.jsx)(zx,{onClick:()=>e(`/contact`),children:`Contact Now`}),(0,Z.jsx)(Bx,{onClick:()=>e(`/services`),children:`Explore Services`})]})]})]})},Fx=P.section`
  position: relative;
  padding: 100px 20px;
  text-align: center;

  background: linear-gradient(135deg, #00308F, #001f5c);
  color: white;
  overflow: hidden;
`,Ix=P.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top right,
    rgba(255, 255, 255, 0.1),
    transparent 60%
  );
`,Lx=P.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  z-index: 2;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
    line-height: 1.3;

    span {
      color: #4da3ff;
    }
  }

  p {
    font-size: 16px;
    color: #ddd;
    margin-bottom: 35px;
    line-height: 1.6;
  }

  /* Tablet */
  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
  }
`,Rx=P.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  /* Mobile */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`,zx=P.button`
  padding: 14px 30px;
  background: white;
  color: #00308F;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    background: #e6ecff;
  }
`,Bx=P.button`
  padding: 14px 30px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: white;
    color: #00308F;
    transform: translateY(-3px);
  }
`,Vx=(e,t,n)=>{let[r,i]=(0,N.useState)(0);return(0,N.useEffect)(()=>{if(!n)return;let r=0,a=e/(t/16),o=setInterval(()=>{r+=a,r>=e?(i(e),clearInterval(o)):i(Math.floor(r))},16);return()=>clearInterval(o)},[n,e,t]),r},Hx=({value:e,label:t,color:n,start:r,delay:i})=>{let a=Vx(e,5e3,r);return(0,Z.jsxs)(Gx,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i},children:[(0,Z.jsxs)(Kx,{style:{color:n},children:[a,`+`]}),(0,Z.jsx)(qx,{children:t})]})},Ux=()=>{let e=(0,N.useRef)(null),[t,n]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(n(!0),t.disconnect())},{threshold:.4});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,Z.jsx)(Wx,{ref:e,children:[{value:150,label:`Projects`,color:`#ff6b6b`},{value:80,label:`Satellites`,color:`#4ecdc4`},{value:300,label:`Clients`,color:`#ffd93d`},{value:12,label:`Years`,color:`#1a73e8`}].map((e,n)=>(0,Z.jsx)(Hx,{value:e.value,label:e.label,color:e.color,start:t,delay:n*.2},n))})},Wx=P.section`
  padding: 80px 40px;
  background: #f5f7ff;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Gx=P.div`
  padding: 40px 20px;
  background: white;
  border-radius: 15px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`,Kx=P.h2`
  font-size: 42px;
  font-weight: bold;
`,qx=P.p`
  margin-top: 10px;
  font-size: 18px;
  color: #555;
`,Jx=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Wb,{}),(0,Z.jsx)(Ux,{}),(0,Z.jsx)(ex,{}),(0,Z.jsx)(fx,{}),(0,Z.jsx)(yx,{}),(0,Z.jsx)(Ox,{}),(0,Z.jsx)(Px,{})]}),$=`/tira-space/assets/Logo6-D5inMuRZ.jpg`,Yx=()=>(0,Z.jsx)(Xx,{children:(0,Z.jsxs)(Zx,{children:[(0,Z.jsx)(Qx,{as:Q.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.8},children:(0,Z.jsx)(`img`,{src:$,alt:`Tira Space`})}),(0,Z.jsxs)($x,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(eS,{children:`ABOUT TIRA SPACE`}),(0,Z.jsxs)(tS,{children:[`Innovating Space Technology with `,(0,Z.jsx)(`span`,{children:`AI & Radar Systems`})]}),(0,Z.jsx)(nS,{children:`TIRA SPACE is a next-generation space technology company focused on delivering advanced solutions in satellite systems, radar technologies, and AI-powered defense applications. We combine innovation, engineering excellence, and real-time intelligence to build solutions for the future.`}),(0,Z.jsx)(rS,{children:`From communication systems to AI-driven analytics, our mission is to empower industries with cutting-edge technologies that ensure security, precision, and scalability across space and terrestrial environments.`}),(0,Z.jsx)(iS,{children:`Explore More`})]})]})}),Xx=P.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f5f7ff, #eef2ff);
`,Zx=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  max-width: 1300px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Qx=P.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Mobile */
  @media (max-width: 576px) {
    height: 300px;
  }
`,$x=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,eS=P.p`
  color: #00308f;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
`,tS=P.h2`
  font-size: 38px;
  line-height: 1.3;
  margin-bottom: 20px;

  span {
    color: #00308f;
  }

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 28px;
  }
`,nS=P.p`
  color: #555;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
`,rS=P.p`
  color: #666;
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 1.6;
`,iS=P.button`
  width: fit-content;
  padding: 12px 28px;
  background: #00308f;
  color: white;
  border: 2px solid #00308f;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: transparent;
    color: #00308f;
  }
`,aS=()=>(0,Z.jsxs)(oS,{children:[(0,Z.jsxs)(sS,{children:[(0,Z.jsx)(`p`,{children:`OUR PURPOSE`}),(0,Z.jsxs)(`h2`,{children:[`Vision & `,(0,Z.jsx)(`span`,{children:`Mission`})]})]}),(0,Z.jsxs)(cS,{children:[(0,Z.jsxs)(lS,{as:Q.div,initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(uS,{children:(0,Z.jsx)(ti,{})}),(0,Z.jsx)(`h3`,{children:`Our Vision`}),(0,Z.jsx)(`p`,{children:`To become a global leader in space technology and defense solutions by driving innovation in AI-powered systems, satellite communication, and next-generation radar technologies for a safer and smarter world.`})]}),(0,Z.jsxs)(lS,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(uS,{children:(0,Z.jsx)(gi,{})}),(0,Z.jsx)(`h3`,{children:`Our Mission`}),(0,Z.jsx)(`p`,{children:`To design and deliver high-performance, reliable, and scalable solutions by integrating cutting-edge technologies, engineering excellence, and real-time intelligence across space and defense ecosystems.`})]})]})]}),oS=P.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #eef2ff, #f8f9ff);
`,sS=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308f;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`,cS=P.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: auto;

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,lS=P.div`
  padding: 40px 30px;
  border-radius: 20px;

  /* 🔥 Glassmorphism */
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 48, 143, 0.25);
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 22px;
  }

  p {
    color: #555;
    line-height: 1.6;
    font-size: 15px;
  }
`,uS=P.div`
  width: 70px;
  height: 70px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 28px;
  color: white;

  /* Gradient background */
  background: linear-gradient(135deg, #00308f, #5a8dee);

  box-shadow: 0 5px 20px rgba(0, 48, 143, 0.4);

  transition: 0.3s;

  ${lS}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 48, 143, 0.6);
  }
`,dS=()=>(0,Z.jsxs)(fS,{children:[(0,Z.jsxs)(pS,{children:[(0,Z.jsx)(`p`,{children:`OUR EXPERTISE`}),(0,Z.jsxs)(`h2`,{children:[`Core `,(0,Z.jsx)(`span`,{children:`Technologies`})]})]}),(0,Z.jsx)(mS,{children:[{icon:(0,Z.jsx)(yi,{}),title:`AI Systems`,desc:`Advanced AI & machine learning for real-time intelligence.`},{icon:(0,Z.jsx)(vi,{}),title:`Radar Technology`,desc:`High-precision radar systems for defense & surveillance.`},{icon:(0,Z.jsx)(Fr,{}),title:`Satellite Communication`,desc:`Reliable satellite communication for global connectivity.`},{icon:(0,Z.jsx)(Gr,{}),title:`RF Engineering`,desc:`Cutting-edge RF systems for signal processing & analysis.`}].map((e,t)=>(0,Z.jsxs)(hS,{as:Q.div,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(gS,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),fS=P.section`
  padding: 80px 40px;
  background: #050816; /* 🔥 Dark Tech Background */
  color: white;
`,pS=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #5a8dee;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;

    span {
      color: #5a8dee;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`,mS=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,hS=P.div`
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  position: relative;

  background: rgba(255, 255, 255, 0.02);

  /* 🔥 Neon Border */
  border: 1px solid rgba(90, 141, 238, 0.3);

  transition: 0.3s;

  /* Glow effect */
  &:hover {
    transform: translateY(-10px);
    border-color: #5a8dee;
    box-shadow: 0 0 20px rgba(90, 141, 238, 0.6);
  }

  h3 {
    margin-top: 15px;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #bbb;
    line-height: 1.5;
  }
`,gS=P.div`
  font-size: 40px;
  color: #5a8dee;

  transition: 0.3s;

  ${hS}:hover & {
    transform: scale(1.2) rotate(5deg);
    color: #ffffff;
  }
`,_S=()=>(0,Z.jsxs)(vS,{children:[(0,Z.jsxs)(yS,{children:[(0,Z.jsx)(`p`,{children:`OUR SOLUTIONS`}),(0,Z.jsxs)(`h2`,{children:[`Products & `,(0,Z.jsx)(`span`,{children:`Solutions`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Delivering cutting-edge technology solutions for space and defense.`})]}),(0,Z.jsx)(bS,{children:[{title:`Radar Systems`,img:Bb,desc:`Advanced radar solutions for defense and surveillance.`},{title:`AI Engine`,img:Vb,desc:`Next-gen AI processing for smart decision systems.`},{title:`Satellite Communication`,img:Hb,desc:`Reliable space communication technologies.`},{title:`RF Engineering`,img:Ub,desc:`High-frequency RF systems with precision engineering.`}].map((e,t)=>(0,Z.jsx)(xS,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:(0,Z.jsxs)(SS,{children:[(0,Z.jsxs)(wS,{$bg:e.img,children:[(0,Z.jsx)(TS,{}),(0,Z.jsx)(`h3`,{children:e.title})]}),(0,Z.jsxs)(ES,{children:[(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]})]})},t))})]}),vS=P.section`
  padding: 80px 40px;
  background: #0b0f1a;
  color: white;
`,yS=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #4ecdc4;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #4ecdc4;
    }
  }

  .sub {
    color: #bbb;
    margin-top: 10px;
  }
`,bS=P.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,xS=P.div`
  perspective: 1000px;
`,SS=P.div`
  position: relative;
  width: 100%;
  height: 260px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${xS}:hover & {
    transform: rotateY(180deg);
  }

  /* Disable flip on mobile */
  @media (max-width: 768px) {
    transform: none !important;
  }
`,CS=P.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  overflow: hidden;
`,wS=P(CS)`
  background: url(${e=>e.$bg}) center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  h3 {
    z-index: 2;
    font-size: 20px;
  }
`,TS=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
`,ES=P(CS)`
  background: #111827;
  transform: rotateY(180deg);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 10px;
    color: #4ecdc4;
  }

  p {
    color: #ccc;
    font-size: 14px;
  }

  /* Mobile fallback */
  @media (max-width: 768px) {
    transform: none;
    position: relative;
    margin-top: 10px;
    height: auto;
  }
`,DS=()=>(0,Z.jsxs)(OS,{children:[(0,Z.jsxs)(kS,{children:[(0,Z.jsx)(`p`,{children:`OUR INDUSTRIES`}),(0,Z.jsxs)(`h2`,{children:[`Industries We `,(0,Z.jsx)(`span`,{children:`Serve`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Delivering cutting-edge solutions across multiple critical sectors.`})]}),(0,Z.jsx)(AS,{children:[{title:`Defense`,icon:(0,Z.jsx)(Nr,{}),color:`#ff6b6b`},{title:`Space Research`,icon:(0,Z.jsx)(Fr,{}),color:`#4ecdc4`},{title:`Government`,icon:(0,Z.jsx)(Ar,{}),color:`#1a73e8`},{title:`Telecom`,icon:(0,Z.jsx)(vi,{}),color:`#f7971e`},{title:`Security`,icon:(0,Z.jsx)(Or,{}),color:`#6a11cb`}].map((e,t)=>(0,Z.jsxs)(jS,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:t*.15},viewport:{once:!0},children:[(0,Z.jsx)(MS,{style:{background:e.color},children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title})]},t))})]}),OS=P.section`
  padding: 80px 40px;
  background: #f8f9fc;
  text-align: center;
`,kS=P.div`
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`,AS=P.div`
  display: grid;
  gap: 30px;

  /* Laptop */
  grid-template-columns: repeat(5, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,jS=P.div`
  background: white;
  padding: 30px 20px;
  border-radius: 12px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.05);
  }
`,MS=P.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 26px;

  transition: 0.3s;

  ${jS}:hover & {
    transform: scale(1.2);
  }
`,NS=()=>{let e=[{icon:(0,Z.jsx)(zr,{}),text:`Advanced AI Research & Machine Learning Systems`},{icon:(0,Z.jsx)(Fr,{}),text:`Next-Gen Space Communication & Satellite Innovation`},{icon:(0,Z.jsx)(ei,{}),text:`Dedicated R&D Labs for Continuous Technological Growth`}];return(0,Z.jsx)(PS,{children:(0,Z.jsxs)(FS,{children:[(0,Z.jsxs)(IS,{as:Q.div,initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Z.jsx)(LS,{src:Vb,alt:`Research`}),(0,Z.jsx)(RS,{})]}),(0,Z.jsxs)(zS,{children:[(0,Z.jsx)(Q.p,{className:`tag`,initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},children:`RESEARCH & INNOVATION`}),(0,Z.jsxs)(Q.h2,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.3},children:[`Driving the Future with `,(0,Z.jsx)(`span`,{children:`Innovation`})]}),(0,Z.jsx)(Q.p,{className:`desc`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.4},children:`At TIRA SPACE, we continuously push the boundaries of technology through advanced research in AI, satellite systems, and defense innovations, building next-generation solutions for tomorrow.`}),(0,Z.jsx)(BS,{children:e.map((e,t)=>(0,Z.jsxs)(VS,{as:Q.div,initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{delay:t*.2},viewport:{once:!0},children:[(0,Z.jsx)(HS,{children:e.icon}),(0,Z.jsx)(`span`,{children:e.text})]},t))})]})]})})},PS=P.section`
  padding: 80px 40px;
  background: #0b0f1a;
  color: white;
`,FS=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1200px;
  margin: auto;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,IS=P.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  /* subtle parallax feel */
  &:hover img {
    transform: scale(1.05);
  }
`,LS=P.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s;
  border-radius: 20px;
`,RS=P.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;

  box-shadow: 0 0 40px rgba(0, 123, 255, 0.4);
  pointer-events: none;
`,zS=P.div`
  .tag {
    color: #4ecdc4;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    span {
      color: #4ecdc4;
    }
  }

  .desc {
    color: #bbb;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`,BS=P.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,VS=P.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 15px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  transition: 0.3s;

  &:hover {
    background: rgba(78, 205, 196, 0.1);
    transform: translateX(5px);
  }

  span {
    font-size: 14px;
    color: #ddd;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,HS=P.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;

  background: linear-gradient(135deg, #4ecdc4, #1a73e8);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: white;
`,US=rr`
  0% { transform: scale(1); }
  50% { transform: scale(1.12); }
  100% { transform: scale(1); }
`,WS=()=>(0,Z.jsxs)(GS,{children:[(0,Z.jsxs)(KS,{children:[(0,Z.jsx)(`p`,{children:`OUR PROMISE`}),(0,Z.jsxs)(`h2`,{children:[`Quality & `,(0,Z.jsx)(`span`,{children:`Commitment`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Delivering excellence through precision, reliability, and customer focus.`})]}),(0,Z.jsx)(qS,{children:[{title:`Quality Assurance`,desc:`Strict quality checks at every stage to ensure top-tier performance and reliability.`,icon:(0,Z.jsx)(fi,{}),color:`#4caf50`},{title:`Testing Standards`,desc:`Comprehensive testing aligned with global aerospace and defense standards.`,icon:(0,Z.jsx)(li,{}),color:`#1a73e8`},{title:`Secure Systems`,desc:`Advanced security protocols ensuring data integrity and operational safety.`,icon:(0,Z.jsx)(Nr,{}),color:`#00bcd4`},{title:`Customer Commitment`,desc:`Dedicated support and long-term partnerships focused on client success.`,icon:(0,Z.jsx)(kr,{}),color:`#2ecc71`}].map((e,t)=>(0,Z.jsxs)(JS,{as:Q.div,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{delay:t*.2},viewport:{once:!0},children:[(0,Z.jsx)(YS,{style:{background:e.color},children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),GS=P.section`
  padding: 80px 40px;
  background: #f4f8fb;
  text-align: center;
`,KS=P.div`
  margin-bottom: 50px;

  p {
    color: #1a73e8;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #1a73e8;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`,qS=P.div`
  display: grid;
  gap: 30px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,JS=P.div`
  background: white;
  padding: 30px 25px;
  border-radius: 15px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`,YS=P.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 26px;

  animation: ${US} 2s infinite;
`,XS=()=>(0,Z.jsxs)(ZS,{children:[(0,Z.jsxs)(QS,{children:[(0,Z.jsx)(`p`,{children:`OUR TEAM`}),(0,Z.jsxs)(`h2`,{children:[`Team & `,(0,Z.jsx)(`span`,{children:`Expertise`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`A team of experts driving innovation in space and defense technologies.`})]}),(0,Z.jsx)($S,{children:[{name:`Dr. Arjun Rao`,role:`Chief Scientist`,img:Bb},{name:`Priya Sharma`,role:`AI Engineer`,img:Vb},{name:`Rahul Verma`,role:`RF Specialist`,img:Hb}].map((e,t)=>(0,Z.jsxs)(eC,{as:Q.div,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{delay:t*.2},viewport:{once:!0},children:[(0,Z.jsxs)(tC,{children:[(0,Z.jsx)(`img`,{src:e.img,alt:e.name}),(0,Z.jsxs)(nC,{children:[(0,Z.jsx)(xr,{}),(0,Z.jsx)(br,{})]})]}),(0,Z.jsx)(`h3`,{children:e.name}),(0,Z.jsx)(`p`,{children:e.role})]},t))}),(0,Z.jsx)(rC,{children:[{value:`15+`,label:`Years Experience`},{value:`50+`,label:`Engineers`},{value:`120+`,label:`Projects Delivered`},{value:`10+`,label:`Global Clients`}].map((e,t)=>(0,Z.jsxs)(iC,{as:Q.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{delay:t*.15},viewport:{once:!0},children:[(0,Z.jsx)(`h2`,{children:e.value}),(0,Z.jsx)(`p`,{children:e.label})]},t))})]}),ZS=P.section`
  padding: 80px 40px;
  background: #ffffff;
  text-align: center;
`,QS=P.div`
  margin-bottom: 50px;

  p {
    color: #00308F;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`,$S=P.div`
  display: grid;
  gap: 30px;
  margin-bottom: 60px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,eC=P.div`
  background: #f8f9fc;
  border-radius: 15px;
  padding-bottom: 20px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    margin-top: 15px;
  }

  p {
    color: #777;
    font-size: 14px;
  }
`,tC=P.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.4s;
  }

  ${eC}:hover img {
    transform: scale(1.1);
  }
`,nC=P.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background: rgba(0, 48, 143, 0.7);

  opacity: 0;
  transition: 0.3s;

  svg {
    color: white;
    font-size: 22px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  ${eC}:hover & {
    opacity: 1;
  }
`,rC=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,iC=P.div`
  background: #00308F;
  color: white;
  padding: 30px;
  border-radius: 12px;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #001f5c;
  }
`,aC=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Yx,{}),(0,Z.jsx)(aS,{}),(0,Z.jsx)(dS,{}),(0,Z.jsx)(_S,{}),(0,Z.jsx)(DS,{}),(0,Z.jsx)(NS,{}),(0,Z.jsx)(WS,{}),(0,Z.jsx)(XS,{})]}),oC=()=>(0,Z.jsx)(sC,{children:(0,Z.jsxs)(cC,{children:[(0,Z.jsx)(lC,{as:Q.div,initial:{opacity:0,scale:1.1},whileInView:{opacity:1,scale:1},transition:{duration:.8},children:(0,Z.jsx)(`img`,{src:Hb,alt:`Hardware Design`})}),(0,Z.jsxs)(uC,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsxs)(`h2`,{children:[`Advanced `,(0,Z.jsx)(`span`,{children:`Hardware Design Solutions`})]}),(0,Z.jsx)(`p`,{className:`desc`,children:`We specialize in designing high-performance electronic systems with precision engineering. Our solutions ensure reliability, scalability, and seamless integration across advanced technology domains.`}),(0,Z.jsxs)(dC,{children:[(0,Z.jsxs)(fC,{children:[(0,Z.jsx)(pC,{children:(0,Z.jsx)(Gr,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`PCB Design`}),(0,Z.jsx)(`p`,{children:`High-quality multi-layer PCB design with optimized performance.`})]})]}),(0,Z.jsxs)(fC,{children:[(0,Z.jsx)(pC,{children:(0,Z.jsx)(Br,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Embedded Systems`}),(0,Z.jsx)(`p`,{children:`Real-time embedded solutions for mission-critical applications.`})]})]}),(0,Z.jsxs)(fC,{children:[(0,Z.jsx)(pC,{children:(0,Z.jsx)(ai,{})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Circuit Design`}),(0,Z.jsx)(`p`,{children:`Robust and efficient circuit architectures for complex systems.`})]})]})]}),(0,Z.jsx)(`button`,{children:`Explore Hardware Solutions`})]})]})}),sC=P.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #0a0f1c, #111a2e);
  color: white;
`,cC=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1200px;
  margin: auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,lC=P.div`
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.08);
  }
`,uC=P.div`
  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    span {
      color: #00d4ff;
    }
  }

  .desc {
    color: #bbb;
    margin-bottom: 25px;
    font-size: 16px;
  }

  button {
    margin-top: 20px;
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #00d4ff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #00d4ff;
      color: black;
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
    }
  }
`,dC=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,fC=P.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  h4 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }
`,pC=P.div`
  font-size: 28px;
  color: #00d4ff;
  transition: 0.3s;

  ${fC}:hover & {
    transform: rotate(10deg) scale(1.2);
    color: #00ffff;
  }
`,mC=()=>(0,Z.jsxs)(hC,{children:[(0,Z.jsxs)(gC,{children:[(0,Z.jsxs)(`h2`,{children:[`Custom Software `,(0,Z.jsx)(`span`,{children:`Development & Integration`})]}),(0,Z.jsx)(`p`,{children:`Delivering flexible, scalable, and integrated software solutions for modern engineering and technology ecosystems.`})]}),(0,Z.jsx)(_C,{children:[{icon:(0,Z.jsx)(oi,{}),title:`Web Applications`,desc:`Scalable and high-performance web platforms tailored to business needs.`,img:Bb},{icon:(0,Z.jsx)(ai,{}),title:`Embedded Software`,desc:`Real-time embedded solutions integrated with advanced hardware systems.`,img:Vb},{icon:(0,Z.jsx)(si,{}),title:`Automation Systems`,desc:`Smart automation solutions improving efficiency and system reliability.`,img:Hb},{icon:(0,Z.jsx)(Br,{}),title:`API Integration`,desc:`Seamless integration of APIs and interconnected system architectures.`,img:Ub}].map((e,t)=>(0,Z.jsxs)(vC,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(yC,{children:(0,Z.jsx)(`img`,{src:e.img,alt:e.title})}),(0,Z.jsxs)(bC,{children:[(0,Z.jsx)(xC,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]})]},t))})]}),hC=P.section`
  padding: 80px 40px;
  background: #f9fbff;
`,gC=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 34px;

    span {
      color: #00308F;
    }
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`,_C=P.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,vC=P.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
`,yC=P.div`
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
  }

  ${vC}:hover & img {
    transform: scale(1.08);
  }
`,bC=P.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`,xC=P.div`
  font-size: 30px;
  color: #00308F;
  margin-bottom: 10px;
  transition: 0.3s;

  ${vC}:hover & {
    transform: scale(1.2);
    color: #001f5c;
  }
`,SC=(e,t,n)=>{let[r,i]=(0,N.useState)(0);return(0,N.useEffect)(()=>{if(!n)return;let r=0,a=e/(t/16),o=setInterval(()=>{r+=a,r>=e?(i(e),clearInterval(o)):i(Math.floor(r))},16);return()=>clearInterval(o)},[n,e,t]),r},CC=({value:e,label:t,color:n,start:r,delay:i})=>{let a=SC(e,3e3,r);return(0,Z.jsxs)(MC,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:i},children:[(0,Z.jsx)(pi,{style:{color:n}}),(0,Z.jsxs)(`h3`,{style:{color:n},children:[a,`+`]}),(0,Z.jsx)(`p`,{children:t})]})},wC=()=>{let e=(0,N.useRef)(null),[t,n]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&n(!0)},{threshold:.4});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,Z.jsxs)(TC,{ref:e,children:[(0,Z.jsxs)(EC,{children:[(0,Z.jsx)(`h2`,{children:`Plating Thickness Measurement Technologies`}),(0,Z.jsx)(`p`,{children:`High-precision measurement systems ensuring accuracy, reliability, and superior industrial performance across multiple domains.`})]}),(0,Z.jsxs)(DC,{children:[(0,Z.jsxs)(OC,{children:[(0,Z.jsx)(kC,{children:(0,Z.jsx)(Lr,{})}),(0,Z.jsx)(`h3`,{children:`Advanced Measurement Systems`}),(0,Z.jsx)(`p`,{children:`We provide cutting-edge plating thickness measurement technologies ensuring micron-level precision, compliance with industry standards, and consistent performance.`}),[{label:`Precision Level`,value:95},{label:`Reliability`,value:92},{label:`Performance`,value:90}].map((e,n)=>(0,Z.jsxs)(AC,{children:[(0,Z.jsxs)(`div`,{className:`top`,children:[(0,Z.jsx)(`span`,{children:e.label}),(0,Z.jsxs)(`span`,{children:[e.value,`%`]})]}),(0,Z.jsx)(`div`,{className:`progress`,children:(0,Z.jsx)(Q.div,{className:`fill`,initial:{width:0},animate:{width:t?`${e.value}%`:0},transition:{duration:1,delay:n*.3}})})]},n))]}),(0,Z.jsx)(jC,{children:[{value:99,label:`Accuracy (%)`,color:`#00c6ff`},{value:50,label:`Industries Served`,color:`#ff6b6b`},{value:120,label:`Projects Done`,color:`#4caf50`}].map((e,n)=>(0,Z.jsx)(CC,{value:e.value,label:e.label,color:e.color,start:t,delay:n*.2},n))})]})]})},TC=P.section`
  padding: 80px 40px;
  background: #f9fbff;
`,EC=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 600px;
    margin-inline: auto;
  }
`,DC=P.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,OC=P.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`,kC=P.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #00308f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`,AC=P.div`
  margin-bottom: 15px;

  .top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .progress {
    height: 8px;
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 5px;
  }

  .fill {
    height: 100%;
    background: #00308f;
  }
`,jC=P.div`
  display: grid;
  gap: 20px;
`,MC=P.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  svg {
    font-size: 28px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 28px;
  }

  p {
    color: #555;
  }

  &:hover {
    transform: translateY(-6px);
  }
`,NC=()=>(0,Z.jsxs)(PC,{children:[(0,Z.jsxs)(FC,{children:[(0,Z.jsx)(`h2`,{children:`Comprehensive Plating Testing & Analysis`}),(0,Z.jsx)(`p`,{children:`Delivering accurate, reliable, and industry-grade testing solutions with detailed reporting and analysis.`})]}),(0,Z.jsx)(IC,{children:[{icon:(0,Z.jsx)(ei,{}),title:`Chemical Testing`,desc:`Advanced chemical analysis ensuring plating composition meets strict industrial standards.`},{icon:(0,Z.jsx)(Wr,{}),title:`Microscopic Inspection`,desc:`High-resolution inspection to detect surface defects and ensure coating uniformity.`},{icon:(0,Z.jsx)(mi,{}),title:`Performance Analysis`,desc:`Detailed performance reports with accuracy metrics and reliability benchmarks.`},{icon:(0,Z.jsx)(Tr,{}),title:`Durability Testing`,desc:`Stress and endurance testing to ensure long-lasting plating performance.`}].map((e,t)=>(0,Z.jsxs)(LC,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(RC,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),PC=P.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #eef2ff, #f8fbff);
`,FC=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 600px;
    margin-inline: auto;
  }
`,IC=P.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,LC=P.div`
  padding: 30px 20px;
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.3);

  text-align: center;
  transition: 0.3s;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    border-color: #00308f;
    box-shadow: 0 0 20px rgba(0, 48, 143, 0.3);
  }

  h3 {
    margin: 15px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`,RC=P.div`
  width: 60px;
  height: 60px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00308f;
  color: white;
  border-radius: 12px;
  font-size: 22px;

  transition: 0.3s;

  ${LC}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: #001f5c;
  }
`,zC=()=>(0,Z.jsx)(BC,{children:(0,Z.jsxs)(VC,{children:[(0,Z.jsxs)(HC,{as:Q.div,initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(`h2`,{children:`Component-Level Plating Consultation`}),(0,Z.jsx)(`p`,{className:`desc`,children:`We provide expert consultation to diagnose plating issues at the component level and deliver optimized, reliable solutions tailored to your application.`}),(0,Z.jsxs)(UC,{children:[(0,Z.jsxs)(WC,{children:[(0,Z.jsx)(jr,{}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Issue Diagnosis`}),(0,Z.jsx)(`p`,{children:`Identify root causes in plating defects and failures.`})]})]}),(0,Z.jsxs)(WC,{children:[(0,Z.jsx)(ai,{}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Smart Recommendations`}),(0,Z.jsx)(`p`,{children:`Custom solutions based on materials and use cases.`})]})]}),(0,Z.jsxs)(WC,{children:[(0,Z.jsx)(ii,{}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:`Expert Consultation`}),(0,Z.jsx)(`p`,{children:`Direct collaboration with engineering specialists.`})]})]})]}),(0,Z.jsx)(GC,{as:Q.div,animate:{scale:[1,1.03,1]},transition:{repeat:1/0,duration:2},children:`✔ Optimized plating strategies for maximum performance & durability`})]}),(0,Z.jsx)(KC,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:(0,Z.jsx)(`img`,{src:Bb,alt:`consultation`})})]})}),BC=P.section`
  padding: 80px 40px;
  background: #f5f8ff;
`,VC=P.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,HC=P.div`
  h2 {
    font-size: 32px;
    color: #00308f;
    margin-bottom: 15px;
  }

  .desc {
    color: #555;
    margin-bottom: 25px;
  }
`,UC=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,WC=P.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  svg {
    font-size: 22px;
    color: #00308f;
    margin-top: 5px;
  }

  h4 {
    margin: 0;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`,GC=P.div`
  margin-top: 30px;
  padding: 15px 20px;
  border-radius: 10px;

  background: #00308f;
  color: white;
  font-weight: 500;

  box-shadow: 0 5px 15px rgba(0, 48, 143, 0.3);
`,KC=P.div`
  img {
    width: 100%;
    border-radius: 15px;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
  }

  img:hover {
    transform: scale(1.05);
  }
`,qC=()=>(0,Z.jsxs)(JC,{children:[(0,Z.jsxs)(YC,{children:[(0,Z.jsx)(`h2`,{children:`Precision Engineering & Quality Assurance`}),(0,Z.jsx)(`p`,{children:`Delivering excellence through precision-driven engineering, rigorous testing, and uncompromised quality standards.`})]}),(0,Z.jsx)(XC,{children:[{icon:(0,Z.jsx)(Nr,{}),title:`Quality Standards`,desc:`We follow strict industry standards ensuring every product meets global compliance and reliability benchmarks.`,color:`#1e88e5`},{icon:(0,Z.jsx)(gi,{}),title:`High Accuracy`,desc:`Advanced calibration and testing methods guarantee precision and consistency in every solution delivered.`,color:`#43a047`},{icon:(0,Z.jsx)(hi,{}),title:`Certifications`,desc:`Our processes align with certified protocols ensuring trusted engineering and validated performance.`,color:`#fb8c00`},{icon:(0,Z.jsx)(fi,{}),title:`Reliability Assurance`,desc:`Robust testing ensures long-term durability, performance stability, and operational excellence.`,color:`#8e24aa`}].map((e,t)=>(0,Z.jsxs)(ZC,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(QC,{style:{background:e.color},children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),JC=P.section`
  padding: 80px 40px;
  background: #f5f8ff;
`,YC=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 650px;
    margin-inline: auto;
  }
`,XC=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,ZC=P.div`
  background: white;
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  h3 {
    margin: 15px 0;
    color: #222;
  }

  p {
    color: #666;
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`,QC=P.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;

  color: white;
  font-size: 24px;

  /* 🔥 Pulse Animation */
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 48, 143, 0.5);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(0, 48, 143, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 48, 143, 0);
    }
  }
`,$C=()=>{let e=[{icon:(0,Z.jsx)(ri,{}),title:`Design`,desc:`Concept development, system architecture, and engineering design planning.`},{icon:(0,Z.jsx)(ai,{}),title:`Development`,desc:`Hardware & software integration with precision engineering.`},{icon:(0,Z.jsx)(Tr,{}),title:`Testing`,desc:`Rigorous validation, calibration, and quality assurance checks.`},{icon:(0,Z.jsx)(Xr,{}),title:`Production`,desc:`Scalable manufacturing with advanced production systems.`},{icon:(0,Z.jsx)(Rr,{}),title:`Deployment`,desc:`Final delivery, implementation, and operational support.`}];return(0,Z.jsxs)(ew,{children:[(0,Z.jsxs)(tw,{children:[(0,Z.jsx)(`h2`,{children:`End-to-End Manufacturing Support`}),(0,Z.jsx)(`p`,{children:`From concept to deployment, we provide complete lifecycle support ensuring precision, quality, and seamless execution at every stage.`})]}),(0,Z.jsxs)(nw,{children:[(0,Z.jsx)(rw,{as:Q.div,initial:{width:0},whileInView:{width:`100%`},transition:{duration:1.2}}),e.map((e,t)=>(0,Z.jsxs)(iw,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(aw,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))]})]})},ew=P.section`
  padding: 80px 40px;
  background: #f5f8ff;
`,tw=P.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 32px;
    color: #00308f;
  }

  p {
    margin-top: 10px;
    color: #555;
    max-width: 650px;
    margin-inline: auto;
  }
`,nw=P.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  /* Tablet */
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  /* Mobile */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`,rw=P.div`
  position: absolute;
  top: 30px;
  left: 0;
  height: 4px;
  background: linear-gradient(to right, #00308f, #00c6ff);
  z-index: 0;

  width: 0;

  @media (max-width: 576px) {
    display: none;
  }
`,iw=P.div`
  position: relative;
  z-index: 1;

  flex: 1;
  text-align: center;
  max-width: 200px;

  h3 {
    margin-top: 15px;
    color: #00308f;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-top: 8px;
  }

  /* Tablet */
  @media (max-width: 992px) {
    flex: 0 0 45%;
    margin-bottom: 30px;
  }

  /* Mobile */
  @media (max-width: 576px) {
    max-width: 100%;
  }
`,aw=P.div`
  width: 60px;
  height: 60px;
  margin: auto;

  background: #00308f;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 24px;

  box-shadow: 0 6px 15px rgba(0, 48, 143, 0.3);

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #00c6ff;
  }
`,ow=()=>(0,Z.jsxs)(sw,{children:[(0,Z.jsxs)(cw,{children:[(0,Z.jsx)(`h2`,{children:`Technical Advisory & Optimization Services`}),(0,Z.jsx)(`p`,{children:`Empowering your systems with expert insights, performance optimization, and future-ready engineering strategies.`})]}),(0,Z.jsx)(lw,{children:[{icon:(0,Z.jsx)(pi,{}),title:`Performance Optimization`,desc:`Enhancing system efficiency through advanced analytics, tuning, and real-time monitoring solutions.`,gradient:`linear-gradient(135deg, #00c6ff, #0072ff)`},{icon:(0,Z.jsx)(yi,{}),title:`Technical Consulting`,desc:`Expert guidance for system architecture, design improvements, and future-ready technology adoption.`,gradient:`linear-gradient(135deg, #7f00ff, #e100ff)`},{icon:(0,Z.jsx)(ai,{}),title:`System Upgrades`,desc:`Seamless upgrades ensuring compatibility, improved performance, and long-term scalability.`,gradient:`linear-gradient(135deg, #43e97b, #38f9d7)`},{icon:(0,Z.jsx)(Yr,{}),title:`Innovation Strategy`,desc:`Strategic planning to integrate AI, automation, and cutting-edge solutions into your systems.`,gradient:`linear-gradient(135deg, #ff9a9e, #fad0c4)`}].map((e,t)=>(0,Z.jsxs)(uw,{as:Q.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{delay:t*.2},style:{background:e.gradient},children:[(0,Z.jsx)(dw,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),sw=P.section`
  padding: 80px 40px;
  background: #0b1220; /* dark premium background */
`,cw=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
    color: white;
  }

  p {
    margin-top: 10px;
    color: #bbb;
    max-width: 650px;
    margin-inline: auto;
  }
`,lw=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,uw=P.div`
  padding: 35px 25px;
  border-radius: 18px;
  color: white;
  position: relative;

  overflow: hidden;
  transition: 0.4s;

  /* Glow effect */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.9;
  }

  /* subtle overlay glow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: 0.4s;
  }

  &:hover::after {
    opacity: 1;
  }
`,dw=P.div`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);

  font-size: 24px;

  backdrop-filter: blur(10px);

  transition: 0.3s;

  &:hover {
    transform: rotate(8deg) scale(1.1);
  }
`,fw=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(oC,{}),(0,Z.jsx)(mC,{}),(0,Z.jsx)(wC,{}),(0,Z.jsx)(NC,{}),(0,Z.jsx)(zC,{}),(0,Z.jsx)(qC,{}),(0,Z.jsx)($C,{}),(0,Z.jsx)(ow,{})]}),pw=()=>(0,Z.jsxs)(mw,{children:[(0,Z.jsxs)(hw,{children:[(0,Z.jsx)(`p`,{children:`FEATURED SYSTEMS`}),(0,Z.jsxs)(`h2`,{children:[`Advanced `,(0,Z.jsx)(`span`,{children:`Defense Technologies`})]})]}),(0,Z.jsx)(gw,{children:[{title:`Radar Systems`,tagline:`Advanced Detection & Surveillance`,img:Bb,badge:`Defense Grade`},{title:`AI Engine`,tagline:`Next-Gen Intelligence Processing`,img:Vb,badge:`AI Powered`},{title:`Anti-Drone System`,tagline:`Smart Threat Neutralization`,img:Hb,badge:`High Precision`},{title:`Satellite Equipment`,tagline:`Reliable Space Communication`,img:Ub,badge:`Space Tech`}].map((e,t)=>(0,Z.jsx)(_w,{as:Q.div,initial:{opacity:0,y:60,scale:.95},whileInView:{opacity:1,y:0,scale:1},transition:{duration:.6,delay:t*.2},children:(0,Z.jsxs)(vw,{$bg:e.img,children:[(0,Z.jsx)(yw,{}),(0,Z.jsx)(bw,{children:e.badge}),(0,Z.jsxs)(xw,{children:[(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.tagline})]})]})},t))})]}),mw=P.section`
  padding: 80px 40px;
  background: #0b132b; /* Dark premium background */
`,hw=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #4ecdc4;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;
    color: white;

    span {
      color: #4ecdc4;
    }
  }
`,gw=P.div`
  display: grid;
  gap: 25px;

  /* Laptop */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet */
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,_w=P.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  cursor: pointer;
`,vw=P.div`
  height: 280px;
  background: url(${e=>e.$bg}) center/cover no-repeat;
  position: relative;

  display: flex;
  align-items: flex-end;
  padding: 20px;

  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.75);
  }
`,yw=P.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.4s;
`,bw=P.span`
  position: absolute;
  top: 15px;
  left: 15px;

  background: rgba(78, 205, 196, 0.9);
  color: #000;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;

  backdrop-filter: blur(5px);
`,xw=P.div`
  position: relative;
  z-index: 2;
  color: white;

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #ddd;
  }
`,Sw=()=>{let e=[{name:`Tele Command Antennas`,img:$},{name:`Spiral Antennas`,img:$},{name:`UHF & VHF Filters`,img:$},{name:`AI Engine & Embrai`,img:$},{name:`Navigation Systems`,img:$},{name:`100 Channel Acquisition Systems`,img:$},{name:`Anti-drone System`,img:$},{name:`Microwave & RF Systems`,img:$},{name:`Flair Unmanned Systems`,img:$},{name:`Radar Systems`,img:$},{name:`Satellite Equipment`,img:$},{name:`Laser Altimeter`,img:$},{name:`Sun Sensor`,img:$},{name:`Solar Panels`,img:$},{name:`Missile Systems`,img:$},{name:`Homeland Security`,img:$},{name:`Multi-Function Radar`,img:$},{name:`Antennas`,img:$},{name:`Automation Solutions`,img:$},{name:`RF PCB Production`,img:$}],t=[(0,Z.jsx)(Ir,{}),(0,Z.jsx)(vi,{}),(0,Z.jsx)(wr,{}),(0,Z.jsx)(Gr,{}),(0,Z.jsx)(Jr,{}),(0,Z.jsx)(zr,{}),(0,Z.jsx)(Nr,{}),(0,Z.jsx)(Xr,{})];return(0,Z.jsxs)(Cw,{children:[(0,Z.jsxs)(ww,{children:[(0,Z.jsx)(`p`,{children:`PRODUCT PORTFOLIO`}),(0,Z.jsxs)(`h2`,{children:[`Complete `,(0,Z.jsx)(`span`,{children:`Technology Solutions`})]})]}),(0,Z.jsx)(Tw,{children:e.map((e,n)=>(0,Z.jsx)(Ew,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:n*.05},children:(0,Z.jsxs)(Dw,{children:[(0,Z.jsxs)(Ow,{bg:e.img,children:[(0,Z.jsx)(kw,{}),(0,Z.jsx)(Aw,{children:t[n%t.length]}),(0,Z.jsxs)(jw,{children:[(0,Z.jsx)(`h3`,{children:e.name}),(0,Z.jsx)(`p`,{children:`Advanced defense-grade system`})]})]}),(0,Z.jsxs)(Mw,{children:[(0,Z.jsx)(`h3`,{children:e.name}),(0,Z.jsx)(`p`,{children:`High-performance solution engineered for space, defense, and industrial applications with superior precision.`})]})]})},n))})]})},Cw=P.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #0b132b, #1c2541);
`,ww=P.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #4ecdc4;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;
    color: white;

    span {
      color: #4ecdc4;
    }
  }
`,Tw=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Ew=P.div`
  perspective: 1200px;

  &:hover div {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    &:hover div {
      transform: none;
    }
  }
`,Dw=P.div`
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s;
`,Ow=P.div`
  position: absolute;
  inset: 0;
  border-radius: 15px;
  overflow: hidden;
  backface-visibility: hidden;

  background: url(${e=>e.bg}) center/cover no-repeat;

  display: flex;
  align-items: flex-end;
  padding: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,kw=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.3)
  );
  transition: 0.3s;
`,Aw=P.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: rgba(78, 205, 196, 0.9);
  color: black;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  box-shadow: 0 0 10px rgba(78, 205, 196, 0.6);

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`,jw=P.div`
  position: relative;
  z-index: 2;
  color: white;

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    color: #ccc;
  }
`,Mw=P.div`
  position: absolute;
  inset: 0;
  border-radius: 15px;

  background: linear-gradient(135deg, #00308f, #4ecdc4);
  color: white;

  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`,Nw=()=>{let[e,t]=(0,N.useState)(null);return(0,Z.jsxs)(Pw,{children:[(0,Z.jsxs)(Fw,{children:[(0,Z.jsx)(`p`,{children:`TECHNOLOGY`}),(0,Z.jsxs)(`h2`,{children:[`Categories & `,(0,Z.jsx)(`span`,{children:`Solutions`})]})]}),(0,Z.jsx)(Iw,{children:[{title:`AI Systems`,img:$,icon:(0,Z.jsx)(yi,{}),desc:`Advanced AI-driven analytics and automation systems.`},{title:`Radar Systems`,img:$,icon:(0,Z.jsx)(vi,{}),desc:`High-precision radar technologies for detection & tracking.`},{title:`RF & Microwave`,img:$,icon:(0,Z.jsx)(Gr,{}),desc:`Reliable RF and microwave engineering solutions.`},{title:`Satellite Technologies`,img:$,icon:(0,Z.jsx)(Fr,{}),desc:`Next-gen satellite communication and space systems.`},{title:`Defense & Security`,img:$,icon:(0,Z.jsx)(Nr,{}),desc:`Mission-critical defense and homeland security systems.`}].map((n,r)=>(0,Z.jsxs)(Lw,{onClick:()=>t(r),as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:r*.1},$active:e===r,children:[(0,Z.jsxs)(Rw,{bg:n.img,children:[(0,Z.jsx)(zw,{}),(0,Z.jsx)(Bw,{$active:e===r,children:n.icon}),(0,Z.jsx)(Vw,{children:n.title})]}),e===r&&(0,Z.jsx)(Hw,{as:Q.div,initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},children:(0,Z.jsx)(`p`,{children:n.desc})})]},r))})]})},Pw=P.section`
  padding: 80px 40px;
  background: #0b132b;
`,Fw=P.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #4ecdc4;
    font-weight: bold;
  }

  h2 {
    color: white;
    font-size: 36px;

    span {
      color: #4ecdc4;
    }
  }
`,Iw=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Lw=P.div`
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  border: 2px solid
    ${e=>e.$active?`#4ecdc4`:`rgba(255,255,255,0.1)`};

  transition: 0.3s;

  &:hover {
    border-color: #4ecdc4;
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
    transform: translateY(-5px);
  }
`,Rw=P.div`
  height: 200px;
  background: url(${e=>e.bg}) center/cover no-repeat;
  position: relative;

  display: flex;
  align-items: flex-end;
  padding: 15px;
`,zw=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.2)
  );
`,Bw=P.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: ${e=>e.$active?`#4ecdc4`:`rgba(255,255,255,0.2)`};
  color: ${e=>e.$active?`#000`:`white`};

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`,Vw=P.h3`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 16px;
`,Hw=P.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  color: #ccc;
  font-size: 14px;
`,Uw=()=>(0,Z.jsxs)(Ww,{children:[(0,Z.jsxs)(Gw,{children:[(0,Z.jsx)(`p`,{children:`APPLICATIONS`}),(0,Z.jsxs)(`h2`,{children:[`Product `,(0,Z.jsx)(`span`,{children:`Use Cases`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Real-world deployment of our advanced technologies across industries.`})]}),(0,Z.jsx)(Kw,{children:[{title:`Defense & Military`,desc:`Advanced radar, missile, and surveillance systems designed for mission-critical defense operations.`,img:$,icon:(0,Z.jsx)(Nr,{})},{title:`Space Research`,desc:`Satellite systems and AI-powered solutions supporting deep space exploration and communication.`,img:$,icon:(0,Z.jsx)($r,{})},{title:`Homeland Security`,desc:`Smart monitoring, threat detection, and border security technologies for national safety.`,img:$,icon:(0,Z.jsx)(qr,{})},{title:`Telecom & Communication`,desc:`Reliable RF, microwave, and communication systems enabling seamless connectivity.`,img:$,icon:(0,Z.jsx)(vi,{})},{title:`Industrial Automation`,desc:`Precision automation and AI-driven systems improving efficiency in industrial environments.`,img:$,icon:(0,Z.jsx)(Xr,{})}].map((e,t)=>(0,Z.jsxs)(qw,{reverse:t%2!=0,as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(Jw,{bg:e.img,children:(0,Z.jsx)(Yw,{})}),(0,Z.jsxs)(Xw,{children:[(0,Z.jsx)(Zw,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]})]},t))})]}),Ww=P.section`
  padding: 80px 40px;
  background: #f5f7ff;
`,Gw=P.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 36px;

    span {
      color: #00308f;
    }
  }

  .sub {
    margin-top: 10px;
    color: #555;
  }
`,Kw=P.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,qw=P.div`
  display: flex;
  align-items: center;
  gap: 40px;

  flex-direction: ${e=>e.reverse?`row-reverse`:`row`};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`,Jw=P.div`
  flex: 1;
  height: 280px;
  border-radius: 15px;

  background: url(${e=>e.bg}) center/cover no-repeat;
  position: relative;

  overflow: hidden;

  transition: 0.4s;

  &:hover {
    transform: scale(1.03);
  }
`,Yw=P.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.2)
  );
`,Xw=P.div`
  flex: 1;

  h3 {
    font-size: 22px;
    margin: 10px 0;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`,Zw=P.div`
  width: 55px;
  height: 55px;

  background: #00308f;
  color: white;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  margin-bottom: 10px;

  transition: 0.3s;

  &:hover {
    background: #001f5c;
    transform: scale(1.1);
  }
`,Qw=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(pw,{}),(0,Z.jsx)(Sw,{}),(0,Z.jsx)(Nw,{}),(0,Z.jsx)(Uw,{})]}),$w=`/tira-space/assets/LOGO8-DpkkjmzN.jpg`,eT=(e,t,n)=>{let[r,i]=(0,N.useState)(0);return(0,N.useEffect)(()=>{if(!n)return;let r=0,a=e/(t/16),o=setInterval(()=>{r+=a,r>=e?(i(e),clearInterval(o)):i(Math.floor(r))},16);return()=>clearInterval(o)},[n,e,t]),r},tT=({value:e,label:t,start:n})=>(0,Z.jsxs)(lT,{children:[(0,Z.jsxs)(`h3`,{children:[eT(e,2e3,n),`+`]}),(0,Z.jsx)(`p`,{children:t})]}),nT=()=>{let e=(0,N.useRef)(null),[t,n]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&n(!0)},{threshold:.4});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,Z.jsx)(rT,{ref:e,children:(0,Z.jsxs)(iT,{children:[(0,Z.jsx)(aT,{as:Q.div,initial:{opacity:0,scale:1.1},whileInView:{opacity:1,scale:1},transition:{duration:.8},children:(0,Z.jsx)(`img`,{src:$w,alt:`R&D`})}),(0,Z.jsxs)(oT,{as:Q.div,initial:{opacity:0,x:80},whileInView:{opacity:1,x:0},transition:{duration:.8},children:[(0,Z.jsx)(`p`,{className:`tag`,children:`RESEARCH`}),(0,Z.jsx)(`h2`,{children:`Driving Innovation Through Advanced R&D`}),(0,Z.jsx)(`p`,{className:`desc`,children:`At TIRA SPACE, our Research & Development drives innovation across AI, robotics, RF engineering, and space technologies, enabling next-generation solutions for complex challenges.`}),(0,Z.jsxs)(sT,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(ei,{}),(0,Z.jsx)(`span`,{children:`Advanced Research Labs`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(xi,{}),(0,Z.jsx)(`span`,{children:`Cutting-edge Technologies`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Yr,{}),(0,Z.jsx)(`span`,{children:`Innovation-driven Approach`})]})]}),(0,Z.jsx)(cT,{children:[{value:120,label:`Projects Completed`},{value:25,label:`Patents & Innovations`},{value:10,label:`Advanced Labs`}].map((e,n)=>(0,Z.jsx)(tT,{value:e.value,label:e.label,start:t},n))})]})]})})},rT=P.section`
  padding: 80px 40px;
  background: linear-gradient(to right, #f9fbff, #eef3ff);
`,iT=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,aT=P.div`
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,oT=P.div`
  .tag {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;
    margin: 10px 0;
  }

  .desc {
    color: #555;
    margin-bottom: 20px;
  }
`,sT=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #00308f;
    }
  }
`,cT=P.div`
  display: flex;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,lT=P.div`
  h3 {
    font-size: 28px;
    color: #00308f;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`,uT=()=>(0,Z.jsxs)(dT,{children:[(0,Z.jsxs)(fT,{children:[(0,Z.jsx)(`p`,{children:`DRONE TECHNOLOGY`}),(0,Z.jsxs)(`h2`,{children:[`Drone Manufacturing & `,(0,Z.jsx)(`span`,{children:`Autonomous Systems`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Advanced UAV systems built with precision engineering and AI-powered intelligence for defense and industrial applications.`})]}),(0,Z.jsx)(pT,{children:[{title:`UAV Design & Development`,img:$w,icon:(0,Z.jsx)(Zr,{}),desc:`Advanced UAV platforms engineered for high performance and durability.`,badges:[`Autonomous`,`Defense Grade`]},{title:`Autonomous Navigation`,img:$w,icon:(0,Z.jsx)(Kr,{}),desc:`AI-powered navigation systems with precision tracking and real-time control.`,badges:[`AI Powered`,`High Accuracy`]},{title:`Defense Surveillance`,img:$w,icon:(0,Z.jsx)(vi,{}),desc:`Smart surveillance drones for monitoring, reconnaissance, and security.`,badges:[`Defense Grade`,`AI Tracking`]},{title:`Manufacturing & Assembly`,img:$w,icon:(0,Z.jsx)(Zr,{}),desc:`State-of-the-art manufacturing units ensuring quality and scalability.`,badges:[`Industrial`,`Automation`]}].map((e,t)=>(0,Z.jsxs)(mT,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsxs)(hT,{bg:e.img,children:[(0,Z.jsx)(gT,{}),(0,Z.jsx)(_T,{children:e.icon}),(0,Z.jsx)(vT,{children:e.badges.map((e,t)=>(0,Z.jsx)(`span`,{children:e},t))}),(0,Z.jsx)(`h3`,{children:e.title})]}),(0,Z.jsx)(yT,{children:(0,Z.jsx)(`p`,{children:e.desc})})]},t))})]}),dT=P.section`
  padding: 80px 40px;
  background: #0a0f1c;
`,fT=P.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #00c6ff;
    font-weight: bold;
  }

  h2 {
    color: white;
    font-size: 36px;

    span {
      color: #00c6ff;
    }
  }

  .sub {
    color: #aaa;
    margin-top: 10px;
    max-width: 600px;
    margin-inline: auto;
  }
`,pT=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,mT=P.div`
  border-radius: 15px;
  overflow: hidden;
  background: #111827;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  transition: 0.4s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 198, 255, 0.3);
  }
`,hT=P.div`
  height: 230px;
  background: url(${e=>e.bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    color: white;
    z-index: 2;
  }
`,gT=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.2)
  );
`,_T=P.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 45px;
  height: 45px;

  background: rgba(0, 198, 255, 0.2);
  border: 1px solid #00c6ff;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00c6ff;
  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: rotate(10deg) scale(1.1);
    background: #00c6ff;
    color: black;
  }
`,vT=P.div`
  position: absolute;
  top: 15px;
  left: 15px;

  display: flex;
  gap: 8px;

  span {
    background: rgba(0, 198, 255, 0.2);
    border: 1px solid #00c6ff;
    color: #00c6ff;

    padding: 4px 8px;
    font-size: 10px;
    border-radius: 6px;
  }
`,yT=P.div`
  padding: 20px;

  p {
    color: #ccc;
    font-size: 14px;
  }
`,bT=`/tira-space/assets/LOGO9-Ccxv-f2B.jpg`,xT=()=>(0,Z.jsxs)(ST,{children:[(0,Z.jsxs)(CT,{children:[(0,Z.jsx)(`p`,{children:`AI & ROBOTICS`}),(0,Z.jsxs)(`h2`,{children:[`Robotics with `,(0,Z.jsx)(`span`,{children:`AI Integration`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Intelligent robotic systems combining artificial intelligence, automation, and real-time analytics for next-generation industries.`})]}),(0,Z.jsx)(wT,{children:[{title:`AI-Powered Robotics`,img:bT,icon:(0,Z.jsx)(zr,{}),desc:`Advanced robots powered by AI algorithms for autonomous operations.`},{title:`Smart Decision Systems`,img:bT,icon:(0,Z.jsx)(yi,{}),desc:`Machine learning systems enabling intelligent real-time decisions.`},{title:`Industrial Automation`,img:bT,icon:(0,Z.jsx)(Xr,{}),desc:`Automation solutions improving efficiency and reducing manual effort.`},{title:`Robotic Process Control`,img:bT,icon:(0,Z.jsx)(ai,{}),desc:`Precision control systems for seamless robotic operations.`}].map((e,t)=>(0,Z.jsxs)(TT,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsxs)(ET,{bg:e.img,children:[(0,Z.jsx)(DT,{}),(0,Z.jsx)(OT,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title})]}),(0,Z.jsx)(kT,{children:(0,Z.jsx)(`p`,{children:e.desc})})]},t))})]}),ST=P.section`
  padding: 80px 40px;
  background: radial-gradient(circle at top, #0a0f1c, #05070f);
`,CT=P.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    color: #8a2be2;
    font-weight: bold;
    letter-spacing: 1px;
  }

  h2 {
    color: white;
    font-size: 36px;

    span {
      color: #00c6ff;
    }
  }

  .sub {
    color: #aaa;
    margin-top: 10px;
    max-width: 600px;
    margin-inline: auto;
  }
`,wT=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,TT=P.div`
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  transition: 0.4s;

  &:hover {
    transform: translateY(-8px);
    border-color: #00c6ff;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
  }
`,ET=P.div`
  height: 230px;
  background: url(${e=>e.bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    color: white;
    z-index: 2;
  }

  &:hover {
    transform: scale(1.05);
  }
`,DT=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.2)
  );
`,OT=P.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 50px;
  height: 50px;

  border-radius: 12px;

  background: rgba(0, 198, 255, 0.15);
  border: 1px solid #00c6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00c6ff;
  font-size: 20px;

  transition: 0.4s;

  /* 🔥 Pulse Animation */
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 5px rgba(0, 198, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 198, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 198, 255, 0.4);
    }
  }

  &:hover {
    transform: rotate(10deg) scale(1.1);
    background: #00c6ff;
    color: black;
  }
`,kT=P.div`
  padding: 20px;

  p {
    color: #ccc;
    font-size: 14px;
  }
`,AT=()=>{let e=[{icon:(0,Z.jsx)(yi,{}),title:`Machine Learning & Deep Learning`,desc:`Advanced AI models for automation, prediction, and intelligent systems.`},{icon:(0,Z.jsx)(Br,{}),title:`Computer Vision`,desc:`Image processing and object detection for real-time applications.`},{icon:(0,Z.jsx)(pi,{}),title:`Predictive Analytics`,desc:`Data-driven insights to forecast trends and optimize performance.`},{icon:(0,Z.jsx)(Pr,{}),title:`AI Labs & Infrastructure`,desc:`High-performance computing environments for AI experimentation.`}];return(0,Z.jsx)(jT,{children:(0,Z.jsxs)(MT,{children:[(0,Z.jsx)(NT,{children:(0,Z.jsx)(PT,{src:vx,alt:`AI Lab`,as:Q.img,initial:{scale:1.1},whileInView:{scale:1},transition:{duration:1}})}),(0,Z.jsxs)(FT,{children:[(0,Z.jsxs)(Q.h2,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6},children:[`Advanced AI Research & `,(0,Z.jsx)(`span`,{children:`Innovation Labs`})]}),(0,Z.jsx)(Q.p,{className:`sub`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.2},children:`Driving next-generation intelligence through deep learning, computer vision, and high-performance AI infrastructure.`}),(0,Z.jsx)(IT,{children:e.map((e,t)=>(0,Z.jsxs)(LT,{as:Q.div,initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{delay:t*.2},children:[(0,Z.jsx)(RT,{children:e.icon}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h4`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]})]},t))})]})]})})},jT=P.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #05070f, #0a1a3a);
  position: relative;
  overflow: hidden;

  /* 🔥 Animated Gradient */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(0, 198, 255, 0.1),
      rgba(138, 43, 226, 0.1)
    );
    animation: moveBg 10s linear infinite;
  }

  @keyframes moveBg {
    0% {
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
`,MT=P.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  max-width: 1300px;
  margin: auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,NT=P.div`
  overflow: hidden;
  border-radius: 20px;
`,PT=P.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`,FT=P.div`
  color: white;

  h2 {
    font-size: 36px;

    span {
      color: #00c6ff;
    }
  }

  .sub {
    margin-top: 15px;
    color: #bbb;
  }
`,IT=P.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
`,LT=P.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  padding: 15px;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: 0.3s;

  &:hover {
    border-color: #00c6ff;
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.4);
    transform: translateX(5px);
  }

  h4 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #ccc;
  }
`,RT=P.div`
  min-width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(0, 198, 255, 0.15);
  border: 1px solid #00c6ff;

  color: #00c6ff;
  font-size: 18px;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1) rotate(8deg);
    background: #00c6ff;
    color: black;
  }
`,zT=`/tira-space/assets/Hero2-C1r-hKBJ.jpg`,BT=()=>{let e=[{title:`Space-Tech Innovations`,icon:(0,Z.jsx)(Fr,{}),img:zT,desc:`Advanced satellite systems and next-gen orbital technologies.`},{title:`AI & Robotics Fusion`,icon:(0,Z.jsx)(zr,{}),img:zT,desc:`Combining AI intelligence with robotic automation systems.`},{title:`Defense Future Systems`,icon:(0,Z.jsx)(Rr,{}),img:zT,desc:`Next-generation defense technologies for strategic operations.`},{title:`Experimental Prototypes`,icon:(0,Z.jsx)(Yr,{}),img:zT,desc:`Innovative prototypes shaping the future of engineering.`}];return(0,Z.jsxs)(VT,{children:[(0,Z.jsx)(HT,{}),(0,Z.jsxs)(UT,{children:[(0,Z.jsxs)(Q.h1,{initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.8},children:[`Future Technologies & `,(0,Z.jsx)(`span`,{children:`Experimental Projects`})]}),(0,Z.jsx)(Q.p,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.3},children:`Exploring the frontiers of innovation with cutting-edge space technologies, AI-driven systems, and futuristic engineering concepts.`})]}),(0,Z.jsx)(WT,{children:e.map((e,t)=>(0,Z.jsxs)(GT,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsxs)(KT,{bg:e.img,children:[(0,Z.jsx)(qT,{}),(0,Z.jsx)(JT,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title})]}),(0,Z.jsx)(YT,{children:(0,Z.jsx)(`p`,{children:e.desc})})]},t))})]})},VT=P.section`
  position: relative;
  padding: 120px 40px;
  background: radial-gradient(circle at center, #02040a, #000000);
  overflow: hidden;
`,HT=P.div`
  position: absolute;
  inset: 0;
  background: transparent;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.2;
    animation: moveStars 60s linear infinite;
  }

  &::after {
    animation-duration: 120s;
    opacity: 0.1;
  }

  @keyframes moveStars {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-200px);
    }
  }
`,UT=P.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 70px;

  h1 {
    font-size: 44px;
    color: white;

    span {
      color: #00c6ff;
    }
  }

  p {
    margin-top: 15px;
    color: #aaa;
    max-width: 700px;
    margin-inline: auto;
  }
`,WT=P.div`
  position: relative;
  z-index: 2;

  display: grid;
  gap: 25px;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,GT=P.div`
  border-radius: 16px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: 0.4s;

  &:hover {
    transform: translateY(-10px);
    border-color: #00c6ff;
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
  }
`,KT=P.div`
  height: 240px;
  background: url(${e=>e.bg}) center/cover no-repeat;
  position: relative;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    color: white;
    z-index: 2;
  }

  &:hover {
    transform: scale(1.05);
  }
`,qT=P.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.2)
  );
`,JT=P.div`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 50px;
  height: 50px;

  border-radius: 12px;

  background: rgba(0, 198, 255, 0.15);
  border: 1px solid #00c6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00c6ff;
  font-size: 20px;

  transition: 0.4s;

  &:hover {
    transform: rotate(10deg) scale(1.1);
    background: #00c6ff;
    color: black;
  }
`,YT=P.div`
  padding: 20px;

  p {
    color: #ccc;
    font-size: 14px;
  }
`,XT=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(nT,{}),(0,Z.jsx)(uT,{}),(0,Z.jsx)(xT,{}),(0,Z.jsx)(AT,{}),(0,Z.jsx)(BT,{})]}),ZT=()=>{let e=(0,N.useRef)(null),[t,n]=(0,N.useState)(``);return(0,N.useEffect)(()=>{let e=0,t=setInterval(()=>{n(`Connecting you to the future...`.slice(0,e)),e++,e>31&&clearInterval(t)},50);return()=>clearInterval(t)},[]),(0,Z.jsxs)(QT,{children:[(0,Z.jsx)($T,{}),(0,Z.jsxs)(eE,{ref:e,onMouseMove:t=>{let n=e.current;if(!n)return;let r=n.getBoundingClientRect(),i=t.clientX-r.left,a=-(t.clientY-r.top-r.height/2)/20,o=(i-r.width/2)/20;n.style.transform=`rotateX(${a}deg) rotateY(${o}deg)`},onMouseLeave:()=>{e.current&&(e.current.style.transform=`rotateX(0deg) rotateY(0deg)`)},as:Q.div,initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:1},children:[(0,Z.jsxs)(`h1`,{children:[`Let’s Connect with `,(0,Z.jsx)(`span`,{children:`TIRA SPACE`})]}),(0,Z.jsx)(tE,{children:t}),(0,Z.jsx)(`p`,{children:`Reach out to us for collaborations, support, or innovative solutions in space, AI, and defense technologies.`}),(0,Z.jsxs)(nE,{children:[(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(Hr,{}),` +91 98765 43210`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(ni,{}),` contact@tiraspace.com`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)($r,{}),` Global Reach`]})]}),(0,Z.jsx)(rE,{as:Q.button,whileHover:{scale:1.08},whileTap:{scale:.95},children:`Contact Now`})]})]})},QT=P.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(circle at center, #020617, #000000);
`,$T=P.div`
  position: absolute;
  inset: 0;
  background: transparent;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveStars 60s linear infinite;
  }

  &:after {
    animation-duration: 120s;
    opacity: 0.5;
  }

  @keyframes moveStars {
    from { transform: translate(0, 0); }
    to { transform: translate(-500px, -500px); }
  }
`,eE=P.div`
  position: relative;
  z-index: 2;

  max-width: 700px;
  padding: 40px;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  text-align: center;
  color: white;

  transition: transform 0.2s ease;

  h1 {
    font-size: 42px;

    span {
      color: #00c6ff;
      text-shadow: 0 0 10px rgba(0, 198, 255, 0.7);
    }
  }

  p {
    margin-top: 15px;
    color: #ccc;
  }

  @media (max-width: 768px) {
    padding: 25px;

    h1 {
      font-size: 26px;
    }
  }
`,tE=P.h3`
  margin-top: 10px;
  color: #00c6ff;
  font-weight: 500;
  min-height: 24px;
`,nE=P.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  span {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 13px;
    color: #aaa;
  }
`,rE=P.button`
  margin-top: 30px;
  padding: 12px 30px;

  border-radius: 8px;
  border: none;

  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;

  font-weight: 500;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(0, 198, 255, 0.5);

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 198, 255, 0.9);
  }
`,iE=[{id:1,name:`Headquarters`,city:`Hyderabad, India`,address:`Hitech City, Hyderabad, Telangana`,phone:`+91 98765 43210`,email:`hq@tiraspace.com`,top:`45%`,left:`65%`},{id:2,name:`R&D Center`,city:`Bangalore, India`,address:`Electronic City, Bangalore`,phone:`+91 91234 56789`,email:`rnd@tiraspace.com`,top:`55%`,left:`60%`},{id:3,name:`Global Office`,city:`Dubai, UAE`,address:`Business Bay, Dubai`,phone:`+971 123 4567`,email:`global@tiraspace.com`,top:`40%`,left:`50%`}],aE=()=>{let[e,t]=(0,N.useState)(iE[0]);return(0,Z.jsx)(oE,{children:(0,Z.jsxs)(sE,{children:[(0,Z.jsxs)(cE,{children:[(0,Z.jsx)(lE,{}),iE.map(e=>(0,Z.jsxs)(uE,{style:{top:e.top,left:e.left},onClick:()=>t(e),children:[(0,Z.jsx)(`span`,{className:`pulse`}),(0,Z.jsx)(Kr,{})]},e.id))]}),(0,Z.jsxs)(dE,{as:Q.div,initial:{opacity:0,x:60},animate:{opacity:1,x:0},children:[(0,Z.jsx)(`h3`,{children:e.name}),(0,Z.jsx)(`h4`,{children:e.city}),(0,Z.jsxs)(fE,{children:[(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(_i,{}),` `,e.address]}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)($r,{}),` `,e.phone]}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(Kr,{}),` `,e.email]})]}),(0,Z.jsx)(`iframe`,{title:`map`,src:`https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed`})]},e.id)]})})},oE=P.section`
  padding: 80px 40px;
  background: #f5f8ff;
`,sE=P.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,cE=P.div`
  position: relative;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  background: #020617;
`,lE=P.div`
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/stardust.png"),
    radial-gradient(circle, #021024, #000);
`,uE=P.div`
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #00c6ff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;

  .pulse {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(0, 198, 255, 0.4);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.7; }
    70% { transform: scale(1.6); opacity: 0; }
    100% { opacity: 0; }
  }

  &:hover {
    color: #fff;
  }
`,dE=P.div`
  background: white;
  padding: 30px;
  border-radius: 15px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  h3 {
    color: #00308f;
  }

  h4 {
    margin-top: 5px;
    color: #666;
  }

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
  }
`,fE=P.div`
  margin-top: 15px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #555;
    margin-bottom: 8px;
  }
`,pE=[{label:`What’s your name?`,key:`name`,icon:(0,Z.jsx)(Dr,{})},{label:`Your email address?`,key:`email`,icon:(0,Z.jsx)(ni,{})},{label:`Phone number?`,key:`phone`,icon:(0,Z.jsx)(Vr,{})},{label:`How can we help you?`,key:`message`,icon:(0,Z.jsx)(Ur,{})}],mE=()=>{let[e,t]=(0,N.useState)(0),[n,r]=(0,N.useState)({}),[i,a]=(0,N.useState)(!1),[o,s]=(0,N.useState)(!1),c=()=>{n[pE[e].key]&&(e<pE.length-1?t(e+1):l())},l=()=>{a(!0),setTimeout(()=>{a(!1),s(!0)},2e3)};return(0,Z.jsx)(hE,{children:(0,Z.jsx)(gE,{as:Q.div,initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},children:o?(0,Z.jsx)(SE,{as:Q.div,initial:{opacity:0},animate:{opacity:1},children:`✅ Message Sent Successfully!`}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(_E,{children:(0,Z.jsx)(`div`,{style:{width:`${(e+1)/pE.length*100}%`}})}),(0,Z.jsxs)(vE,{as:Q.h2,initial:{opacity:0,x:40},animate:{opacity:1,x:0},children:[pE[e].icon,` `,pE[e].label]},e),(0,Z.jsx)(yE,{as:Q.input,type:`text`,placeholder:`Type your answer...`,value:n[pE[e].key]||``,onChange:t=>r({...n,[pE[e].key]:t.target.value}),whileFocus:{scale:1.02}}),(0,Z.jsx)(bE,{onClick:c,children:e===pE.length-1?`Submit`:`Next`}),i&&(0,Z.jsx)(xE,{})]})})})},hE=P.section`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #020617, #001f3f);
`,gE=P.div`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  color: white;
  text-align: center;
`,_E=P.div`
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;

  div {
    height: 100%;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    transition: 0.3s;
  }
`,vE=P.h2`
  font-size: 22px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,yE=P.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;

  margin-bottom: 20px;

  outline: none;

  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    box-shadow: 0 0 10px #00c6ff;
  }
`,bE=P.button`
  padding: 12px 30px;
  border-radius: 8px;

  border: none;
  background: linear-gradient(45deg, #00c6ff, #0072ff);

  color: white;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 15px #00c6ff;
  }
`,xE=P.div`
  margin-top: 20px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #00c6ff;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,SE=P.div`
  font-size: 22px;
  color: #00ffcc;
`,CE=[{icon:(0,Z.jsx)(Hr,{}),title:`Call Us`,details:[`+91 98765 43210`,`+91 91234 56789`]},{icon:(0,Z.jsx)(ni,{}),title:`Email`,details:[`support@tiraspace.com`,`sales@tiraspace.com`]},{icon:(0,Z.jsx)(jr,{}),title:`Support`,details:[`Technical Support`,`Sales Inquiry`,`General Help`]},{icon:(0,Z.jsx)(ci,{}),title:`Working Hours`,details:[`Mon - Fri: 9 AM - 6 PM`,`Sat: 10 AM - 2 PM`]}],wE=()=>(0,Z.jsxs)(TE,{children:[(0,Z.jsxs)(EE,{children:[(0,Z.jsx)(`h2`,{children:`Contact & Support Channels`}),(0,Z.jsx)(`p`,{children:`Multiple ways to reach us for support, inquiries, and collaboration.`})]}),(0,Z.jsx)(DE,{children:CE.map((e,t)=>(0,Z.jsxs)(OE,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:t*.2},children:[(0,Z.jsx)(kE,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(AE,{children:e.details.map((e,t)=>(0,Z.jsx)(`p`,{children:e},t))})]},t))})]}),TE=P.section`
  padding: 80px 40px;
  background: linear-gradient(135deg, #020617, #001f3f);
  color: white;
`,EE=P.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
  }

  p {
    margin-top: 10px;
    color: #aaa;
  }
`,DE=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,OE=P.div`
  position: relative;
  padding: 30px;
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(0, 198, 255, 0.2);

  overflow: hidden;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 25px rgba(0, 198, 255, 0.6);
    border-color: #00c6ff;
  }

  h3 {
    margin-top: 15px;
  }
`,kE=P.div`
  font-size: 26px;
  color: #00c6ff;

  transition: 0.4s;

  ${OE}:hover & {
    transform: rotate(10deg) scale(1.2);
    color: #fff;
  }
`,AE=P.div`
  margin-top: 10px;
  max-height: 0;
  overflow: hidden;
  transition: 0.4s ease;

  p {
    font-size: 14px;
    color: #ccc;
    margin: 5px 0;
  }

  ${OE}:hover & {
    max-height: 200px;
  }
`,jE=`Let’s Build the Future Together`,ME=()=>{let[e,t]=(0,N.useState)(``);return(0,N.useEffect)(()=>{let e=0,n=setInterval(()=>{t(jE.slice(0,e)),e++,e>31&&clearInterval(n)},40);return()=>clearInterval(n)},[]),(0,Z.jsx)(NE,{children:(0,Z.jsxs)(PE,{children:[(0,Z.jsxs)(FE,{children:[(0,Z.jsx)(IE,{children:e}),(0,Z.jsx)(LE,{as:Q.p,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},children:`Partner with TIRA SPACE for cutting-edge solutions in AI, defense, and space technologies. We collaborate with enterprises to deliver innovation-driven results.`}),(0,Z.jsxs)(RE,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Qr,{}),` Custom Solutions`]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(pi,{}),` Enterprise Projects`]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Rr,{}),` R&D Collaboration`]})]}),(0,Z.jsx)(zE,{as:Q.button,whileHover:{scale:1.08},whileTap:{scale:.95},children:`Request Proposal`})]}),(0,Z.jsxs)(BE,{as:Q.div,initial:{opacity:0,x:60},whileInView:{opacity:1,x:0},children:[(0,Z.jsx)(VE,{}),(0,Z.jsxs)(HE,{children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:`120+`}),(0,Z.jsx)(`p`,{children:`Projects`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:`50+`}),(0,Z.jsx)(`p`,{children:`Clients`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:`10+`}),(0,Z.jsx)(`p`,{children:`Industries`})]})]})]})]})})},NE=P.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #020617, #001f3f);
  color: white;
  overflow: hidden;
`,PE=P.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,FE=P.div`
  max-width: 600px;
`,IE=P.h1`
  font-size: 42px;
  color: #fff;

  span {
    color: #00c6ff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`,LE=P.p`
  margin-top: 20px;
  color: #ccc;
  line-height: 1.6;
`,RE=P.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #aaa;
  }

  svg {
    color: #00c6ff;
  }
`,zE=P.button`
  margin-top: 30px;
  padding: 14px 35px;
  border-radius: 8px;

  border: none;
  background: linear-gradient(45deg, #00c6ff, #0072ff);

  color: white;
  font-weight: 500;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(0, 198, 255, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 198, 255, 0.9);
  }
`,BE=P.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,VE=P.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;

  background: radial-gradient(circle, #00c6ff33, transparent);
  animation: pulse 3s infinite;

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0.6; }
  }
`,HE=P.div`
  position: absolute;
  display: flex;
  gap: 20px;

  div {
    text-align: center;
  }

  h3 {
    font-size: 24px;
    color: #00c6ff;
  }

  p {
    font-size: 12px;
    color: #aaa;
  }
`,UE=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ZT,{}),(0,Z.jsx)(aE,{}),(0,Z.jsx)(mE,{}),(0,Z.jsx)(wE,{}),(0,Z.jsx)(ME,{})]}),WE=`/tira-space/assets/Hero3-B-oh0zGM.jpg`,GE=()=>(0,Z.jsxs)(KE,{children:[(0,Z.jsx)(qE,{}),(0,Z.jsxs)(JE,{children:[(0,Z.jsxs)(Q.h1,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[`Build the Future of `,(0,Z.jsx)(`span`,{children:`Space & AI`}),` With Us`]}),(0,Z.jsx)(Q.p,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.3},viewport:{once:!0},children:`Join TIRA SPACE and be part of a team pushing the boundaries of innovation in space technology, artificial intelligence, and defense systems.`}),(0,Z.jsxs)(YE,{children:[(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(Rr,{}),` Mission Driven`]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(yi,{}),` Innovation First`]})]}),(0,Z.jsx)(Q.button,{whileHover:{scale:1.05},whileTap:{scale:.95},children:`Explore Careers`})]})]}),KE=P.section`
  position: relative;
  height: 90vh;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`,qE=P.div`
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.4)
    ),
    url(${WE}) center/cover no-repeat;

  z-index: 0;

  animation: zoomBg 20s infinite linear;

  @keyframes zoomBg {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`,JE=P.div`
  position: relative;
  z-index: 2;

  max-width: 800px;
  text-align: center;
  padding: 20px;

  color: white;

  h1 {
    font-size: 48px;
    line-height: 1.2;

    span {
      color: #00c6ff;
      text-shadow: 0 0 10px rgba(0, 198, 255, 0.6);
    }
  }

  p {
    margin-top: 20px;
    color: #ddd;
    font-size: 18px;
  }

  button {
    margin-top: 30px;
    padding: 12px 32px;

    background: #00c6ff;
    border: 2px solid #00c6ff;

    color: black;
    border-radius: 6px;

    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;

    box-shadow: 0 5px 15px rgba(0, 198, 255, 0.4);
  }

  button:hover {
    background: transparent;
    color: #00c6ff;

    box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`,YE=P.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 6px 14px;
    border-radius: 20px;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);

    font-size: 12px;
    color: #ccc;
  }
`,XE=()=>(0,Z.jsxs)(ZE,{children:[(0,Z.jsxs)(QE,{children:[(0,Z.jsx)(`p`,{children:`CAREERS`}),(0,Z.jsxs)(`h2`,{children:[`Open `,(0,Z.jsx)(`span`,{children:`Positions`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Explore exciting opportunities and be part of cutting-edge innovation.`})]}),(0,Z.jsx)($E,{children:[{title:`AI Engineer`,dept:`Artificial Intelligence`,location:`Hyderabad / Remote`,exp:`2+ Years`,desc:`Develop AI models, deep learning systems, and intelligent automation.`,type:`Full-Time`,icon:(0,Z.jsx)(Gr,{})},{title:`RF Engineer`,dept:`RF & Microwave`,location:`Hyderabad`,exp:`3+ Years`,desc:`Design and optimize RF systems for defense and communication.`,type:`Full-Time`,icon:(0,Z.jsx)(Gr,{})},{title:`Embedded Systems Developer`,dept:`Hardware`,location:`Remote`,exp:`1-3 Years`,desc:`Work on embedded firmware, microcontrollers, and IoT systems.`,type:`Full-Time`,icon:(0,Z.jsx)(Gr,{})},{title:`Robotics Intern`,dept:`Robotics & AI`,location:`Hyderabad`,exp:`Fresher`,desc:`Assist in building AI-powered robotic systems and automation.`,type:`Internship`,icon:(0,Z.jsx)(Gr,{})},{title:`Software Developer`,dept:`Software Engineering`,location:`Remote`,exp:`2+ Years`,desc:`Build scalable web and system applications integrated with hardware.`,type:`Full-Time`,icon:(0,Z.jsx)(Gr,{})},{title:`Test Engineer`,dept:`Quality Assurance`,location:`Hyderabad`,exp:`2+ Years`,desc:`Perform testing, validation, and ensure system quality standards.`,type:`Full-Time`,icon:(0,Z.jsx)(Gr,{})}].map((e,t)=>(0,Z.jsxs)(eD,{as:Q.div,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{delay:t*.15},children:[(0,Z.jsxs)(tD,{children:[(0,Z.jsx)(nD,{children:e.icon}),(0,Z.jsx)(rD,{children:e.type})]}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{className:`dept`,children:e.dept}),(0,Z.jsxs)(iD,{children:[(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(Kr,{}),` `,e.location]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(ci,{}),` `,e.exp]})]}),(0,Z.jsx)(aD,{children:e.desc}),(0,Z.jsx)(`button`,{children:`Apply Now`})]},t))})]}),ZE=P.section`
  padding: 80px 40px;
  background: #f5f7ff;
`,QE=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308f;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`,$E=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,eD=P.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  border-radius: 15px;
  padding: 25px;

  border: 1px solid rgba(0, 0, 0, 0.05);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    border-color: #00308f;
    box-shadow: 0 15px 35px rgba(0, 48, 143, 0.2);
  }

  h3 {
    margin: 10px 0 5px;
  }

  .dept {
    color: #00308f;
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 15px;
    width: 100%;

    padding: 10px;
    border-radius: 6px;

    border: 2px solid #00308f;
    background: transparent;
    color: #00308f;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #00308f;
      color: white;
      box-shadow: 0 0 12px rgba(0, 48, 143, 0.4);
    }
  }
`,tD=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nD=P.div`
  width: 45px;
  height: 45px;

  border-radius: 10px;
  background: rgba(0, 48, 143, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #00308f;
  font-size: 18px;
`,rD=P.span`
  background: #00308f;
  color: white;

  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
`,iD=P.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;

  margin: 10px 0;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`,aD=P.p`
  font-size: 14px;
  color: #666;
`,oD=()=>(0,Z.jsxs)(sD,{children:[(0,Z.jsxs)(cD,{children:[(0,Z.jsx)(`p`,{children:`CAREERS`}),(0,Z.jsxs)(`h2`,{children:[`Why Work `,(0,Z.jsx)(`span`,{children:`With Us`})]}),(0,Z.jsx)(`p`,{className:`sub`,children:`Discover a workplace that values innovation, growth, and collaboration.`})]}),(0,Z.jsx)(lD,{children:[{icon:(0,Z.jsx)(Rr,{}),title:`Career Growth`,desc:`Work on cutting-edge space and defense projects that accelerate your professional journey.`},{icon:(0,Z.jsx)(yi,{}),title:`Learning & Innovation`,desc:`Continuous learning environment with exposure to AI, robotics, and advanced R&D.`},{icon:(0,Z.jsx)(ai,{}),title:`Advanced Technology`,desc:`Hands-on experience with modern systems, tools, and high-end engineering solutions.`},{icon:(0,Z.jsx)(Er,{}),title:`Collaborative Culture`,desc:`Work alongside passionate engineers, researchers, and innovators as a strong team.`},{icon:(0,Z.jsx)(Nr,{}),title:`Stability & Trust`,desc:`Reliable organization focused on long-term growth, quality, and employee well-being.`}].map((e,t)=>(0,Z.jsxs)(uD,{as:Q.div,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:t*.15},children:[(0,Z.jsx)(dD,{children:e.icon}),(0,Z.jsx)(`h3`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))})]}),sD=P.section`
  padding: 80px 40px;

  background: linear-gradient(135deg, #f8faff, #eef3ff);
`,cD=P.div`
  text-align: center;
  margin-bottom: 50px;

  p {
    color: #00308f;
    font-weight: bold;
  }

  h2 {
    font-size: 34px;

    span {
      color: #00308f;
    }
  }

  .sub {
    color: #666;
    margin-top: 10px;
  }
`,lD=P.div`
  display: grid;
  gap: 25px;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,uD=P.div`
  background: white;
  padding: 25px;

  border-radius: 15px;
  text-align: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 48, 143, 0.2);
  }

  h3 {
    margin: 15px 0 10px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`,dD=P.div`
  width: 60px;
  height: 60px;

  margin: auto;

  border-radius: 12px;

  background: rgba(0, 48, 143, 0.1);
  color: #00308f;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  transition: 0.3s;

  ${uD}:hover & {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 48, 143, 0.4);
  }
`,fD=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(GE,{}),(0,Z.jsx)(XE,{}),(0,Z.jsx)(oD,{})]}),pD=()=>(0,Z.jsx)(V_,{children:(0,Z.jsxs)(e_,{children:[(0,Z.jsx)(Qg,{path:`/tira-space`,element:(0,Z.jsx)(Jx,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/about`,element:(0,Z.jsx)(aC,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/services`,element:(0,Z.jsx)(fw,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/products`,element:(0,Z.jsx)(Qw,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/research`,element:(0,Z.jsx)(XT,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/careers`,element:(0,Z.jsx)(fD,{})}),(0,Z.jsx)(Qg,{path:`/tira-space/contact`,element:(0,Z.jsx)(UE,{})})]})}),mD=P.div`
  padding-top: 80px; /* Prevent navbar overlap */
`;function hD(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Gm,{}),(0,Z.jsx)(mD,{children:(0,Z.jsx)(pD,{})}),(0,Z.jsx)(Zm,{})]})}$e.createRoot(document.getElementById(`root`)).render((0,Z.jsx)(N.StrictMode,{children:(0,Z.jsxs)(Hn,{theme:ir,children:[(0,Z.jsx)(ar,{}),(0,Z.jsx)(hD,{})]})}));