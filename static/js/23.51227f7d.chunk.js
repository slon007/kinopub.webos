(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[23],{1062:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c=n(31),a=n.n(c),i=n(93),l=n(53),r=n(11),s=n(73),u=n(2),o=n(898),d=n.n(o),j=n(943),b=n.n(j),f=n(193),O=n.n(f),v=n(252),h=n(897),x=n(901),m=n(958),p=n(924),k=n(937),g=n(3),N=function(e){var t=e.label,n=e.options,c=e.defaultValue,a=e.value,i=e.onChange,l=e.closeOnChange,r=Object(u.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1],b=Object(k.a)(a||c),f=Object(s.a)(b,2),v=f[0],h=f[1],x=Object(u.useMemo)((function(){return Array.isArray(n)?n.map((function(e,t){return"string"===typeof e?{title:e,value:t}:e})):[]}),[n]),N=Object(u.useMemo)((function(){return x.find((function(e){return e.value===v}))}),[x,v]),C=Object(u.useCallback)((function(e){h(e),null===i||void 0===i||i(e),l&&j(!1)}),[h,i,l]),y=Object(u.useCallback)((function(e){return function(t){t&&C(e.value)}}),[C]);return Object(g.jsx)(m.a,{open:d,onToggle:j,title:t,subtitle:null===N||void 0===N?void 0:N.title,children:Object(g.jsx)("div",{className:"flex flex-col",children:O()(x,(function(e){return Object(g.jsx)(p.a,{checked:e.value===v,onChange:y(e),children:e.title},e.value)}))})})},C=n(888),y=n(250),w=n(894),F=n(196),M=n(361),T=function(e){var t=e.setting,n=e.onChange;return Object(g.jsx)(x.a,{className:"w-full",defaultChecked:t.value===v.a.True,onChange:n,children:t.label})},S=function(e){var t=e.setting,n=e.onChange,c=Object(u.useMemo)((function(){return O()(t.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[t.value]);return Object(g.jsx)(N,{defaultValue:b()(t.value,(function(e){return e.selected===v.a.True})),label:t.label,onChange:n,options:c,closeOnChange:!0})},A=function(){var e,t,n=Object(w.a)("user").data,c=Object(w.a)("deviceInfo").data,o=Object(F.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(F.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(s.a)(b,2),x=f[0],m=f[1],p=Object(M.a)(),k=p.software,N=p.hardware,A=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,t){return Object(r.a)(Object(r.a)({},e),{},{key:t})})),(function(e){return"undefined"===typeof e.type}))}),[null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings]),E=Object(u.useMemo)((function(){var e;return d()(O()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,t){return Object(r.a)(Object(r.a)({},e),{},{key:t})})),(function(e){return"list"===e.type}))}),[null===c||void 0===c||null===(t=c.device)||void 0===t?void 0:t.settings]),D=Object(u.useCallback)((function(e){return function(){var t=Object(l.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(Object(r.a)(Object(r.a)({},x),{},Object(i.a)({},e.key,n?v.a.True:v.a.False)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),[x]),J=Object(u.useCallback)((function(e){return function(t){m(Object(r.a)(Object(r.a)({},x),{},Object(i.a)({},e.key,e.value[t].id)))}}),[x]),K=Object(u.useCallback)(Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===c||void 0===c?void 0:c.device.id,x]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[x,null===c||void 0===c?void 0:c.device,o]),R=Object(u.useCallback)((function(){j([])}),[j]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(g.jsxs)("div",{className:"h-screen relative",children:[Object(g.jsx)(y.a,{className:"m-1 mb-3",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(g.jsx)("div",{className:"flex flex-col",children:(null===c||void 0===c?void 0:c.device)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(A,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(T,{setting:e,onChange:D(e)})},e.key)}))},"bool-".concat(null===c||void 0===c?void 0:c.device.updated)),Object(g.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(E,(function(e){return Object(g.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(g.jsx)(S,{setting:e,onChange:J(e)})},e.key)}))},"list-".concat(null===c||void 0===c?void 0:c.device.updated))]}),Object(g.jsx)("div",{className:"flex my-8",children:Object(g.jsx)(h.a,{icon:"done",onClick:K,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(g.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(y.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(g.jsxs)("div",{className:"flex items-center",children:[(null===n||void 0===n?void 0:n.user)&&Object(g.jsxs)(y.a,{className:"mr-4",children:[n.user.profile.name||n.user.username," (",Math.floor(n.user.subscription.days)," \u0434\u043d.)"]}),Object(g.jsx)(h.a,{icon:"logout",onClick:R,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(g.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(g.jsx)(y.a,{children:N}),Object(g.jsx)(y.a,{children:k})]})]})]})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(11),a=n(893),i=n(3),l=function(e){return Object(i.jsx)(a.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},894:function(e,t,n){"use strict";var c=n(105),a=n(2),i=n(907),l=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=Object(a.useMemo)((function(){return new l.c}),[]),s=Object(i.a)([e].concat(Object(c.a)(t)),(function(){return r[e].apply(r,Object(c.a)(t))}),n);return s}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(11),a=n(57),i=n(2),l=n(52),r=n.n(l),s=n(257),u=n(251),o=n(3),d=["icon","iconOnly","children","autoFocus","className"],j=function(e){var t=e.icon,n=e.iconOnly,l=e.children,j=e.autoFocus,b=e.className,f=Object(a.a)(e,d),O=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;return j&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,j]),Object(o.jsx)(u.a,Object(c.a)(Object(c.a)({},f),{},{ref:O,className:r()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",b),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[t&&Object(o.jsx)(s.a,{className:r()({"mr-2":!n}),name:t}),!n&&l]})}))}},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(11),a=n(57),i=n(2),l=n(52),r=n.n(l),s=n(251),u=n(260),o=n(3),d=["defaultChecked","checked","onChange","className","children"],j=function(e){var t=e.defaultChecked,n=e.checked,l=e.onChange,j=e.className,b=e.children,f=Object(a.a)(e,d),O=Object(i.useRef)(null),v=Object(i.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]),h=Object(i.useCallback)((function(e){var t;Object(u.a)(e,"Enter")&&(null===(t=O.current)||void 0===t||t.click())}),[]);return Object(o.jsx)(s.a,{component:"label",className:r()("text-gray-200 p-2",j),onKeyPress:h,role:"button",children:Object(o.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(o.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},f),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(o.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(11),a=(n(2),n(901)),i=n(3),l=function(e){return Object(i.jsx)(a.a,Object(c.a)(Object(c.a)({},e),{},{type:"radio"}))}},937:function(e,t,n){"use strict";var c=n(73),a=n(2);t.a=function(e){var t=Object(a.useState)(e),n=Object(c.a)(t,2),i=n[0],l=n[1];return Object(a.useEffect)((function(){l(e)}),[e]),[i,l]}},958:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(73),a=n(2),i=n(52),l=n.n(i),r=n(257),s=n(251),u=n(250),o=n(937),d=n(3),j=function(e){var t=e.open,n=e.onToggle,i=e.title,j=e.subtitle,b=e.className,f=e.children,O=Object(o.a)(t),v=Object(c.a)(O,2),h=v[0],x=v[1],m=Object(a.useCallback)((function(){x((function(e){var t=!e;return null===n||void 0===n||n(t),t}))}),[x,n]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(s.a,{onClick:m,className:l()("p-1 cursor-pointer",b),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(u.a,{children:i}),Object(d.jsx)(r.a,{name:h?"expand_less":"expand_more"})]}),!h&&j&&Object(d.jsx)(u.a,{className:"mt-2",children:j})]})}),h&&f]})}}}]);
//# sourceMappingURL=23.51227f7d.chunk.js.map