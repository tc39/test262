// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If thisArg is null or undefined, the called function is passed the global object as the this value
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.3_Function.prototype.apply/S15.3.4.3_A3_T8.js
 * @description Argument at apply function is undefined and it called inside function declaration
 */

(function FACTORY(){
  (function(){this.feat="kamon beyba"}).apply(undefined);
})();

//CHECK#1
if (this["feat"] !== "kamon beyba") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

