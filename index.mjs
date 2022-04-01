// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var a=s,i=t,r=e;var m=function(s,t){var e,m,n;return a(s)||s<=0||a(t)||t<=0?NaN:(m=t*i(1+1/s,t),n=t*i(1+2/s,t),(t*i(1+3/s,t)-3*m*(e=n-m*m)-m*m*m)/r(e,1.5))};export{m as default};
//# sourceMappingURL=index.mjs.map
