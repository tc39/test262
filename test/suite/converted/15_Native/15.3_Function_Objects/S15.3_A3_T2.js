// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since when call is used for Function constructor themself new function instance creates
 * and then first argument(thisArg) should be ignored
 *
 * @section 15.3
 * @path 15_Native/15.3_Function_Objects/S15.3_A3_T2.js
 * @description First argument is string and null
 */

this.color="red";
var name="mars";

var f = Function.call("blablastring", "return this.color;");

//CHECK#1
if (f() !== "red") {
  $ERROR('#1: ');
}

var g = Function.call(null, "return this.name;");

//CHECK#2
if (g() !== "mars") {
  $ERROR('#2: ');
}


