!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("styled-components"));else if("function"==typeof define&&define.amd)define(["react","styled-components"],r);else{var t="object"==typeof exports?r(require("react"),require("styled-components")):r(e.react,e[void 0]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,((e,r)=>(()=>{"use strict";var t={156:r=>{r.exports=e},466:e=>{e.exports=r}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{Button:()=>y});var e,r=o(156),t=o.n(r);!function(e){e.primary="#252525",e.secondary="#F6F6F6",e.tertiary="#808080",e.white="#FFFFFF",e.border="#E7E7E7",e.borderSecondary="#DBDBDB"}(e||(e={}));var n,c,a,l,d,p,s=o(466);function u(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var f=o.n(s)().button(l||(l=u(["\n  align-items: center;\n  justify-content: center;\n  ","\n  border-radius: 3px;\n  ","\n  padding: 20px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 1px;\n  ","\n  cursor: pointer;\n  ","\n"])),(function(r){return o=(t=r).$color,i=t.$type,c=e.primary,"outlined"===i?c=e.white:"contained"===i&&"secondary"===o&&(c=e.secondary),(0,s.css)(n||(n=u(["background-color: ",";"])),c);var t,o,i,c}),(function(r){return n=(t=r).$color,o=t.$type,i=e.white,"outlined"!==o&&"secondary"!==n||(i=e.primary),(0,s.css)(c||(c=u(["color: ",";"])),i);var t,n,o,i}),(function(r){return n=(t=r).$color,o=t.$type,i=e.primary,"outlined"===o?i="primary"===n?e.primary:e.borderSecondary:"contained"===o&&"secondary"===n&&(i=e.borderSecondary),(0,s.css)(a||(a=u(["border: 1px solid ",";"])),i);var t,n,o,i}),(function(e){return!0===e.$fullwidth?(0,s.css)(d||(d=u(["\n    display: flex;\n    width: 100%;\n  "]))):(0,s.css)(p||(p=u(["\n    display: inline-flex;\n  "])))}));const y=function(e){var r=e.children,n=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["children"]),o=n.color,i=void 0===o?"primary":o,c=n.type,a=void 0===c?"contained":c,l=n.fullwidth,d=void 0!==l&&l,p=n.onClick;return t().createElement(f,{$color:i,$type:a,$fullwidth:d,onClick:p,"data-testid":"button"},r)}})(),i})()));