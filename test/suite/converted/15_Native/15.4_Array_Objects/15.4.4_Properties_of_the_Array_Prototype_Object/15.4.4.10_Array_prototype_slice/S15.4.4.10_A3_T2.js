// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToUint32(length) for non Array objects
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A3_T2.js
 * @description length = 4294967297
 */

var obj = {};
obj.slice = Array.prototype.slice;
obj[0] = "x";
obj[4294967296] = "y";
obj.length = 4294967297;
var arr = obj.slice(0,4294967297);

//CHECK#1
if (arr.length !== 1) {
  $ERROR('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; var arr = obj.slice(0,4294967297); arr.length === 1. Actual: ' + (arr.length));
}

//CHECK#2
if (arr[0] !== "x") {
   $ERROR('#2: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; var arr = obj.slice(0,4294967297); arr[0] === "x". Actual: ' + (arr[0]));
}

//CHECK#3
if (arr[4294967296] !== undefined) {
   $ERROR('#3: var obj = {}; obj.slice = Array.prototype.slice; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; var arr = obj.slice(0,4294967297); arr[4294967296] === undefined. Actual: ' + (arr[4294967296]));
}  

