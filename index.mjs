// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eulergamma@v0.0.8-esm/index.mjs";function n(n,m){return s(n)||s(m)||n<=0||m<=0?NaN:e*(1-1/n)+t(m/n)+1}export{n as default};
//# sourceMappingURL=index.mjs.map
