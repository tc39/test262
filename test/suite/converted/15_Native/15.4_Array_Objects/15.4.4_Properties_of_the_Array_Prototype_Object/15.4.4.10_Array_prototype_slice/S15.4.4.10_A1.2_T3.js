// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If start is negative, use max(start + length, 0).
 * If end is positive, use min(end, length)
 *
 * @section: 15.4.4.10;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A1.2_T3.js;
 * @description: abs(start) = length > end > 0, start < 0;
 */

var x = [0,1,2,3,4];
var arr = x.slice(-5,1);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(-5,1); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 1) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(-5,1); arr.length === 1. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== 0) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(-5,1); arr[0] === 0. Actual: ' + (arr[0]));
}

//CHECK#4
if (arr[1] !== undefined) {
  $ERROR('#4: var x = [0,1,2,3,4]; var arr = x.slice(-5,1); arr[1] === undefined. Actual: ' + (arr[1]));
}   

