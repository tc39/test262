// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of isNaN has the attribute DontDelete
 *
 * @section 15.1.2.4, 15.2.4.5, 11.4.1
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.4_isNaN/S15.1.2.4_A2.2.js
 * @description Checking use hasOwnProperty, delete
 * @strict_only
 * @negative
 */

//CHECK#1
if (isNaN.hasOwnProperty('length') !== true) {
  $FAIL('#1: isNaN.hasOwnProperty(\'length\') === true. Actual: ' + (isNaN.hasOwnProperty('length')));
}

delete isNaN.length;

//CHECK#2
if (isNaN.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete isNaN.length; isNaN.hasOwnProperty(\'length\') === true. Actual: ' + (isNaN.hasOwnProperty('length')));
}

//CHECK#3
if (isNaN.length === undefined) {
  $ERROR('#3: delete isNaN.length; isNaN.length !== undefined');
}

