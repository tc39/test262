// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Any variable that has not been assigned a value has the value undefined
 *
 * @section 8.1
 * @path 08_Types/8.1_The_Undefined_Type/S8.1_A2_T1.js
 * @description Check that var x have value and type undefined
 */

var x;

///////////////////////////////////////////////////////////////////
// CHECK#1
if (!(x === undefined)) {
  $ERROR('#1: var x; x === undefined. Actual: ' + (x));
}
//
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// CHECK#2
if (!(typeof(x) === "undefined")) {
  $ERROR('#2: var x; typeof(x) === "undefined". Actual: ' + (typeof(x)));
}
//
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// CHECK#3
if (!(x === void 0)) {
  $ERROR('#3: var x; x === void 0. Actual: ' + (x));
}
//
///////////////////////////////////////////////////////////////////

