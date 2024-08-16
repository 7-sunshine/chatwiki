import{Z as W,cf as H,$ as Q,W as g,aH as Y,a4 as I,cg as $,a9 as B,Y as F,aQ as Z,A as q}from"../../index-QYI4dmfl.js";import{u as J}from"./index-3DXu9bgV.js";import{e as U,b as o,r as G,w as X,j as u,F as k}from"./vue-chunks-BakLQ6XW.js";const K={small:8,middle:16,large:24},ee=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:B.oneOf(F("horizontal","vertical")).def("horizontal"),align:B.oneOf(F("start","end","center","baseline")),wrap:Z()});function te(e){return typeof e=="string"?K[e]:e||0}const m=U({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:ee(),slots:Object,setup(e,l){let{slots:t,attrs:r}=l;const{prefixCls:n,space:S,direction:z}=W("space",e),[M,D]=H(n),x=J(),c=o(()=>{var a,i,s;return(s=(a=e.size)!==null&&a!==void 0?a:(i=S==null?void 0:S.value)===null||i===void 0?void 0:i.size)!==null&&s!==void 0?s:"small"}),y=G(),p=G();X(c,()=>{[y.value,p.value]=(Array.isArray(c.value)?c.value:[c.value,c.value]).map(a=>te(a))},{immediate:!0});const _=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),E=o(()=>Q(n.value,D.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:z.value==="rtl",[`${n.value}-align-${_.value}`]:_.value})),R=o(()=>z.value==="rtl"?"marginLeft":"marginRight"),T=o(()=>{const a={};return x.value&&(a.columnGap=`${y.value}px`,a.rowGap=`${p.value}px`),g(g({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-p.value}px`})});return()=>{var a,i;const{wrap:s,direction:V="horizontal"}=e,A=(a=t.default)===null||a===void 0?void 0:a.call(t),w=Y(A),C=w.length;if(C===0)return null;const v=(i=t.split)===null||i===void 0?void 0:i.call(t),j=`${n.value}-item`,P=y.value,b=C-1;return u("div",I(I({},r),{},{class:[E.value,r.class],style:[T.value,r.style]}),[w.map((N,d)=>{let O=A.indexOf(N);O===-1&&(O=`$$space-${d}`);let f={};return x.value||(V==="vertical"?d<b&&(f={marginBottom:`${P/(v?2:1)}px`}):f=g(g({},d<b&&{[R.value]:`${P/(v?2:1)}px`}),s&&{paddingBottom:`${p.value}px`})),M(u(k,{key:O},[u("div",{class:j,style:f},[N]),d<b&&v&&u("span",{class:`${j}-split`,style:f},[v])]))})])}}});m.Compact=$;m.install=function(e){return e.component(m.name,m),e.component($.name,$),e};const se=m;var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"};const le=ae;function L(e){for(var l=1;l<arguments.length;l++){var t=arguments[l]!=null?Object(arguments[l]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(n){ne(e,n,t[n])})}return e}function ne(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var h=function(l,t){var r=L({},l,t.attrs);return u(q,L({},r,{icon:le}),null)};h.displayName="SettingOutlined";h.inheritAttrs=!1;const oe=h;export{oe as S,se as _};
