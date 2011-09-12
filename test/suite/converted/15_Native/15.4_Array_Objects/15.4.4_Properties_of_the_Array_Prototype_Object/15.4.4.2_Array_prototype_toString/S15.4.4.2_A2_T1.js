// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The toString function is not generic.
 * it throws a TypeError exception if its this value is not an Array object
 *
 * @section 15.4.4.2
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.2_Array_prototype_toString/S15.4.4.2_A2_T1.js
 * @description {}.toString = Array.prototype.toString
 */

var obj = {};
obj.toString = Array.prototype.toString;

//CHECK#1
try {
  obj.toString();
  $ERROR('#1.1: var obj = {}; obj.toString = Array.prototype.toString; obj.toString() throw TypeError. Actual: ' + (obj.toString()));
} catch(e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: var obj = {}; obj.toString = Array.prototype.toString; obj.toString() throw TypeError. Actual: ' + (e));
  }
}

obj[0] = 1;
obj.length = 1;

//CHECK#2
try {
  obj.toString();
  $ERROR('#2.1: var obj = {}; obj.toString = Array.prototype.toString; obj[0] = 1; obj.length = 1; obj.toString() throw TypeError. Actual: ' + (obj.toString()));
} catch(e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var obj = {}; obj.toString = Array.prototype.toString; obj[0] = 1; obj.length = 1; obj.toString() throw TypeError. Actual: ' + (e));
  }
}

