(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[21],{899:function(t,e,r){var n=r(384),s=r(911),i=r(377),u=r(60);t.exports=function(t,e){return(u(t)?n:s)(t,i(e,3))}},900:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(2),s=r.n(n),i=r(25);function u(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var o=s.a.createContext(u()),a=r(266);function c(t,e){var r=s.a.useRef(!1),n=s.a.useState(0)[1],u=Object(a.b)(),c=s.a.useContext(o),l=u.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=i.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=i.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=i.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(c.isReset()||(l.retryOnMount=!1));var h=s.a.useState((function(){return new e(u,l)}))[0],d=h.getOptimisticResult(l);if(s.a.useEffect((function(){r.current=!0,c.clearReset();var t=h.subscribe(i.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return h.updateResult(),function(){r.current=!1,t()}}),[c,h]),s.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&d.isLoading)throw h.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){c.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&d.isError&&!d.isFetching)throw d.error;return"tracked"===l.notifyOnChangeProps&&(d=h.trackResult(d)),d}},911:function(t,e,r){var n=r(383);t.exports=function(t,e){var r=[];return n(t,(function(t,n,s){e(t,n,s)&&r.push(t)})),r}},913:function(t,e){t.exports=function(t,e,r,n){for(var s=t.length,i=r+(n?1:-1);n?i--:++i<s;)if(e(t[i],i,t))return i;return-1}},934:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(7),s=r(31),i=r(5),u=r(25),o=r(119),a=r(73),c=r(157),l=r(74),h=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&p(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&p(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var s=e.subscribe((function(e){e.isFetching||(s(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var e=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||o.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,s=this.options,u=this.currentResult,o=this.currentResultState,a=this.currentResultOptions,l=t!==n,h=l?t.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,y=t.state,b=y.dataUpdatedAt,R=y.error,O=y.errorUpdatedAt,S=y.isFetching,m=y.status,Q=!1,g=!1;if(e.optimisticResults){var E=this.hasListeners(),I=!E&&d(t,e),C=E&&f(t,n,e,s);(I||C)&&(S=!0,b||(m="loading"))}if(e.keepPreviousData&&!y.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==m)r=v.data,b=v.dataUpdatedAt,m=v.status,Q=!0;else if(e.select&&"undefined"!==typeof y.data)if(u&&y.data===(null==o?void 0:o.data)&&e.select===(null==a?void 0:a.select)&&!this.previousSelectError)r=u.data;else try{r=e.select(y.data),!1!==e.structuralSharing&&(r=Object(i.n)(null==u?void 0:u.data,r)),this.previousSelectError=null}catch(x){Object(c.a)().error(x),R=x,this.previousSelectError=x,O=Date.now(),m="error"}else r=y.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&("loading"===m||"idle"===m)){var T;if((null==u?void 0:u.isPlaceholderData)&&e.placeholderData===(null==a?void 0:a.placeholderData))T=u.data;else if(T="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof T)try{T=e.select(T),!1!==e.structuralSharing&&(T=Object(i.n)(null==u?void 0:u.data,T)),this.previousSelectError=null}catch(x){Object(c.a)().error(x),R=x,this.previousSelectError=x,O=Date.now(),m="error"}"undefined"!==typeof T&&(m="success",r=T,g=!0)}return{status:m,isLoading:"loading"===m,isSuccess:"success"===m,isError:"error"===m,isIdle:"idle"===m,data:r,dataUpdatedAt:b,error:R,errorUpdatedAt:O,failureCount:y.fetchFailureCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>h.dataUpdateCount||y.errorUpdateCount>h.errorUpdateCount,isFetching:S,isLoadingError:"error"===m&&0===y.dataUpdatedAt,isPlaceholderData:g,isPreviousData:Q,isRefetchError:"error"===m&&0!==y.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,u=t[n]!==e[n],o=null==i?void 0:i.some((function(t){return t===r})),a=null==s?void 0:s.some((function(t){return t===r}));return u&&!a&&(!i||o)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(a.a);function d(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&p(t,e))}(t,e)}function f(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&("error"!==t.state.status||!1===n.enabled)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}},935:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(934),s=r(5),i=r(900);function u(t,e,r){var u=Object(s.l)(t,e,r);return Object(i.a)(u,n.a)}},968:function(t,e,r){var n=r(913),s=r(377),i=r(969),u=Math.max;t.exports=function(t,e,r){var o=null==t?0:t.length;if(!o)return-1;var a=null==r?0:i(r);return a<0&&(a=u(o+a,0)),n(t,s(e,3),a)}},969:function(t,e,r){var n=r(970);t.exports=function(t){var e=n(t),r=e%1;return e===e?r?e-r:e:0}},970:function(t,e,r){var n=r(971),s=1/0;t.exports=function(t){return t?(t=n(t))===s||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}},971:function(t,e,r){var n=r(972),s=r(198),i=r(197),u=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=o.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}},972:function(t,e,r){var n=r(973),s=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(s,""):t}},973:function(t,e){var r=/\s/;t.exports=function(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}}}]);
//# sourceMappingURL=21.dc2a495f.chunk.js.map