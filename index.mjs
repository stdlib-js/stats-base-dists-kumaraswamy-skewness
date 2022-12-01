// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";function i(i,a){var m,n,r;return s(i)||i<=0||s(a)||a<=0?NaN:(n=a*t(1+1/i,a),r=a*t(1+2/i,a),(a*t(1+3/i,a)-3*n*(m=r-n*n)-n*n*n)/e(m,1.5))}export{i as default};
//# sourceMappingURL=index.mjs.map
