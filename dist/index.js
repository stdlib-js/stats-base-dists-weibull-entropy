"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=s(function(p,t){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/constants-float64-eulergamma/dist');function v(e,r){return i(e)||i(r)||e<=0||r<=0?NaN:q*(1-1/e)+o(r/e)+1}t.exports=v
});var a=n();module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
