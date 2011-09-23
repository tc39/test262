// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * This description of Array constructor applies if and only if
 * the Array constructor is given no arguments or at least two arguments
 *
 * @path 15_Native/15.4_Array_Objects/15.4.2_The_Array_Constructor/15.4.2.1_new_Array/S15.4.2.1_A1.3_T1.js
 * @description Checking case when Array constructor is given one argument
 */

var x = new Array(2);

//CHECK#1
if (x.length === 1) {
  $ERROR('#1: var x = new Array(2); x.length !== 1');
}

//CHECK#2
if (x[0] === 2) {
  $ERROR('#2: var x = new Array(2); x[0] !== 2');
}

