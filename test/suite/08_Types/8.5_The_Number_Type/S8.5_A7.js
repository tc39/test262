// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * +Infinity expression has a type Number
 *
 * @path 08_Types/8.5_The_Number_Type/S8.5_A7.js
 * @description Check type of +Infinity
 */

var x=+Infinity;

///////////////////////////////////////////////////////
// CHECK#1
if (typeof(x) !== "number"){
  $ERROR('#1: var x=+Infinity; typeof(x) === "number". Actual: ' + (typeof(x)));
}
//
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// CHECK#2
if (typeof(+Infinity) !== "number"){
  $ERROR('#2: typeof(+Infinity) === "number". Actual: ' + (typeof(+Infinity)));
}
//
//////////////////////////////////////////////////////////

