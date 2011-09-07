// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * +Infinity expression has a type Number
 *
 * @id: S8.5_A7;
 * @section: 8.5, 7.8.3;
 * @description: Check type of +Infinity;
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

