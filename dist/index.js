"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=o(function(w,v){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-beta/dist'),q=require('@stdlib/math-base-special-pow/dist');function c(e,r){var s,i,a,u;return n(e)||e<=0||n(r)||r<=0?NaN:(i=r*t(1+1/e,r),a=r*t(1+2/e,r),u=r*t(1+3/e,r),s=a-i*i,(u-3*i*s-i*i*i)/q(s,1.5))}v.exports=c
});var p=m();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
